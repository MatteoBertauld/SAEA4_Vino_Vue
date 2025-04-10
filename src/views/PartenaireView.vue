<script setup>
import { ref, onMounted } from 'vue';
import { jwtDecode } from "jwt-decode";
import { usePartenairesStore } from '@/stores/partenaires';
import "https://unpkg.com/lucide@latest"
import { Star } from 'lucide-vue-next';
import AddPartenaire from '@/components/AddPartenaire.vue';

const partenaires = usePartenairesStore();
const affichage = ref(partenaires.tous);
const showComponent = ref(false);


var isAdmin = ref(false);

onMounted(() => {
    const token = localStorage.getItem('token'); 
    if (token) {
        try {
            const decoded = jwtDecode(token);
            console.log(decoded.role)

            if(decoded.role =='Admin'){
                isAdmin.value=true;
            }
        } catch (err) {
            console.error('Erreur décodage JWT:', err);
        }
    }
});


const changerAffichage = (categorie) => {
    affichage.value = partenaires[categorie];
};
</script>


<template>
    <div id="partenaire-center-button">
        <div id="partenaire-filtrecontainer">
            <button id="partenaire-filtre-tous" class="button" @click="changerAffichage('tous')">Tous</button>
            <button id="partenaire-filtre-autresociete" class="button" @click="changerAffichage('autresociete')">Autre
                Société</button>
            <button id="partenaire-filtre-cave" class="button" @click="changerAffichage('cave')">Cave</button>
            <button id="partenaire-filtre-hotel" class="button" @click="changerAffichage('hotel')">Hotel</button>
            <button id="partenaire-filtre-restaurant" class="button"
                @click="changerAffichage('restaurant')">Restaurant</button>
            <button v-if="isAdmin" id="partenaire-ajouter" class="button" @click="showComponent = !showComponent">
                Ajouter un partenaire
            </button>
        </div>
    </div>

    <div id="partenaire-container">
        <article class="partenaire" v-for="partenaire in affichage" :key="partenaire.id">
            <h2>{{ partenaire.nompartenaire }}</h2>
            <section v-if="partenaire.restaurant?.nombreetoilesrestaurant != null">
                <div class="note">
                    <p class="etoiles">
                        <Star :class="{ checked: partenaire.restaurant?.nombreetoilesrestaurant >= 1 }" />
                        <Star :class="{ checked: partenaire.restaurant?.nombreetoilesrestaurant >= 2 }" />
                        <Star :class="{ checked: partenaire.restaurant?.nombreetoilesrestaurant >= 3 }" />
                        <Star :class="{ checked: partenaire.restaurant?.nombreetoilesrestaurant >= 4 }" />
                        <Star :class="{ checked: partenaire.restaurant?.nombreetoilesrestaurant >= 5 }" />
                    </p>
                    <p class="valeur">{{ partenaire.restaurant?.nombreetoilesrestaurant }}/5</p>
                </div>
            </section>
            <section v-if="partenaire.hotel?.categoriehotel != null">
                <div class="note">
                    <p class="etoiles">
                        <Star :class="{ checked: partenaire.hotel?.categoriehotel >= 1 }" />
                        <Star :class="{ checked: partenaire.hotel?.categoriehotel >= 2 }" />
                        <Star :class="{ checked: partenaire.hotel?.categoriehotel >= 3 }" />
                        <Star :class="{ checked: partenaire.hotel?.categoriehotel >= 4 }" />
                        <Star :class="{ checked: partenaire.hotel?.categoriehotel >= 5 }" />
                    </p>
                    <p class="valeur">{{ partenaire.hotel?.categoriehotel }}/5</p>
                </div>
            </section>
            <p><span>Téléphone :</span> {{ partenaire.telpartenaire }}</p>
            <p><span>Mail</span> : {{ partenaire.mailpartenaire }}</p>
            <section v-if="partenaire.restaurant?.nombreetoilesrestaurant != null">
                <p><span>Spécialite culinaire :</span> {{ partenaire.restaurant?.specialiterestaurant }}</p>
                <p><span>Type de cuisine :</span> {{ partenaire.restaurant?.idtypecuisineNavigation.libelletypecuisine
                }}</p>
            </section>
            <section v-if="partenaire.hotel?.categoriehotel != null">
                <p><span>Nombre de chambres :</span> {{ partenaire.hotel?.nombrechambreshotel }}</p>
            </section>
            <section v-if="partenaire.cave?.idtypedegustationNavigation != null">
                <p><span>Type de dégustation :</span> {{
                    partenaire.cave?.idtypedegustationNavigation.libelletypedegustation }}</p>
            </section>
        </article>
    </div>



    <div id="container-addRoad-View" v-if="showComponent">
        <AddPartenaire id="addRoadView" />
        <button id="CloseAddRoadView" @click="showComponent = false">X</button>
    </div>
</template>

<style>
#partenaire-center-button {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#partenaire-filtrecontainer {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    gap: 1rem;
    padding: 1.5rem;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    justify-content: center;
    /* Centre les boutons horizontalement */
}

#partenaire-filtrecontainer .button {
    background-color: var(--button);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#partenaire-filtrecontainer .button:hover {
    background-color: var(--button-hover-hard);
    ;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

#partenaire-filtrecontainer .button:active {
    background-color: var(--button-hover-hard);
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#partenaire-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}

.partenaire {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* Centre le contenu verticalement */
    height: 280px;
    width: 380px;
    background-color: var(--background-white);
    margin-top: 10px;
    padding: 20px;
    /* Augmente l'espace intérieur pour plus de confort visuel */
    border-radius: 12px;
    /* Légèrement plus arrondi pour un design moderne */
    border: 2px solid var(--border);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* Ajoute une ombre douce pour un effet de carte */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    /* Ajoute une transition pour les interactions */
}

.partenaire:hover {
    transform: translateY(-5px);
    /* Légère élévation au survol */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    /* Accentue l'ombre au survol */
}

.partenaire:active {
    transform: translateY(0);
    /* Réinitialise l'élévation au clic */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* Réinitialise l'ombre au clic */
}

.partenaire p {
    font-size: 0.9rem;
}

.partenaire span {
    font-weight: bold;
    font-size: 0.9rem;
}
</style>
