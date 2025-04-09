<script setup>
import { ref } from 'vue';
import { usePartenairesStore } from '@/stores/partenaires';
import "https://unpkg.com/lucide@latest"
import { Star } from 'lucide-vue-next';
import AddPartenaire from '@/components/AddPartenaire.vue';

const partenaires = usePartenairesStore();
const affichage = ref(partenaires.tous); // État initial 

// Méthode pour changer la catégorie affichée
const changerAffichage = (categorie) => {
    affichage.value = partenaires[categorie];
};
const showComponent = ref(false)
</script>

<template>
    <div class="sectionContainer">
        <div class="filtrecontainer">
            <!-- Les boutons mettent à jour la catégorie affichée -->
            <button class="button" @click="changerAffichage('tous')">Tous</button>
            <button class="button" @click="changerAffichage('autresociete')">Autre Société</button>
            <button class="button" @click="changerAffichage('cave')">Cave</button>
            <button class="button" @click="changerAffichage('hotel')">Hotel</button>
            <button class="button" @click="changerAffichage('restaurant')">Restaurant</button>
            <button class="button" @click="showComponent = !showComponent">Ajouter un partenaire</button>
        </div>
        <div class="partenaires">
            <article class="partenaire" v-for="partenaire in affichage" :key="partenaire.id">
                <div>
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
                    <p>Téléphone : {{ partenaire.telpartenaire }}</p>
                    <p>Mail : {{ partenaire.mailpartenaire }}</p>
                    <section v-if="partenaire.restaurant?.nombreetoilesrestaurant != null">
                        <p>Spécialite culinaire : {{ partenaire.restaurant?.specialiterestaurant }}</p>
                        <p>Type de cuisine : {{ partenaire.restaurant?.idtypecuisineNavigation.libelletypecuisine }}</p>
                    </section>
                    <section v-if="partenaire.hotel?.categoriehotel != null">
                        <p>Nombre de chambres : {{ partenaire.hotel?.nombrechambreshotel }}</p>
                    </section>
                    <section v-if="partenaire.cave?.idtypedegustationNavigation != null">
                        <p>Type de dégustation : {{ partenaire.cave?.idtypedegustationNavigation.libelletypedegustation }}</p>
                    </section>
                </div>
            </article>
        </div>
    </div>



    <div id="container-addRoad-View" v-if="showComponent">
        <AddPartenaire id="addRoadView" />
        <button id="CloseAddRoadView" @click="showComponent = false">X</button>
    </div>
</template>

<style>
.note {
    display: flex;
    align-items: center;
}

.note .etoiles .checked {
    fill: #b6005e;
}

.note .valeur {
    margin-left: 0.5rem;
}

.sectionContainer {
    max-width: 80vw;
    margin: auto;
}

.filtrecontainer {
    width: 80vw;
    display: flex;
    justify-content: space-around;
}

.filtrecontainer button {
    margin: 1rem;
    padding: 0.25rem 0.75rem;
    border: 2px solid transparent;
    font-size: 1.1rem;
    background-color: #e1e8f0;
    border-radius: 6px;
    transition: all 100ms;
    cursor: pointer;
}

.partenaires {
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
}

.partenaires .partenaire div {
    width: 40vw;
}


.partenaire {
    background-color: aliceblue;
    height: 100%;
    border-radius: 5%;
    border: white solid 2px;
}

.button:hover {
    background-color: #bd0162;
    color: black;
}

</style>
