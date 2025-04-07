<script setup>
    import { ref,computed,onMounted } from 'vue';
    import AddRoad from '@/components/AddRoad.vue';
    import { useRoadsStore } from '@/stores/roads.js';
    import { storeDisplayError } from '@/stores/displayError';
    import Travel from '@/components/Travel.vue';
    import { useTravelsStore } from '@/stores/travels';
    import { useRoute } from 'vue-router';
    const route = useRoute();

    const travelsStore = useTravelsStore();

    const travel = ref(null);
    const isLoading = ref(true);

    // Fonction asynchrone pour charger les données
    const loadTravel = async () => {
        if (!travelsStore || !travelsStore.getTravelById) {
            console.error('travelsStore ou la méthode getTravelById est introuvable.');
            return;
        }

        const idTravel = route.params.id_travel;
        try {
            travel.value = await travelsStore.getTravelById(idTravel);
            isLoading.value = false;
        } catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
        }
    };

    // Charger les données lors du montage du composant
    onMounted(() => {
        loadTravel();
    });

    const displayError = storeDisplayError()


    const roads = useRoadsStore()
    const isDelete = ref(false);

    const showComponent = ref(false)

    async function deleteRoad() {
    const result = await roads.DelRoad(props.road.idroute);
    if(!result.error) {isDelete.value = true;}
    displayError.display(result.error, result.title,result.description);
    }

</script>





<template>

<div id="container_sejour">

    <div v-if="isLoading">
        <p>Chargement en cours...</p>
    </div>

    <div v-else-if="travel">

        <section id="container_left">

            <img id="image_travel" :src="'/src/assets/images/sejours/sejours1.jpg'">

            <div id="container_button_left">
                <a id="button-programme" class="button-programme" href="#" name='action'>Programme du séjour</a>
                <a id="button-hébergement" class="button-programme" href="#"  name='action'>Hébergements</a>
                <a id="button-domaine" class="button-programme" href="#" name='action'>Chateaux / Domaine</a>
                <a id="button-avis" class="button-programme" href="#" name='action'>Avis nbAvis</a>
            </div>
            <div id="Programme">
            <h2 class="titre_info">Le programme détaillé de votre séjour</h2>
                <div class="container_etape">
                    <!-- v-for="travelStep in travel.travel_steps" -->
                    <div class="image-section">
                        <img id="preview-img" @click="preview" :src="'/src/assets/images/sejours/sejours1.jpg'"/>
                    </div>
                    <div class="info-section">
                        <h3 class="titre-etape">Dégustation de vins réputés en Bourgogne</h3>
                        <p>Un séjour immersif au coeur d'un domaine viticole, avec des visites guidees des vignes et des degustations de vins uniques</p>
                    </div>
                </div>
            </div>
            <hr class="hr_etape">
            <div id="Hebergement">
                <h2 class="titre_info">hébergements</h2>
                <!-- @foreach ($travel->travel_steps as $travelStep)
                    @foreach ($travelStep->activities as $activity)
                        @if( $activity->partner->hotel != null) -->
                <div class="container_etape">
                    <div class="image-section">
                        <img id="preview-img" @click="preview" :src="'/src/assets/images/sejours/sejours1.jpg'"/>
                    </div>
                    <div class="info-section">
                        <h3 class="titre-etape">Nom Partenaire</h3>
                        <p>
                            Description Partenaire
                        </p>
                        <br>
                        <a href="https://paris-clignancourt-montmartre.kyriad.com/fr-fr/?utm_source=bing&utm_medium=cpc&utm_campaign=ASUC%20-%20KY%20FR%20T1%20-%20Bing%20-%20SN%20-%20Gen%20%2B%20Geo%20IMC%20-%20FR&utm_content=KY%20FR%20T1%20-%20Bing%20-%20Gen%20%2B%20Paris%20FR&utm_"  target="_blank">En savoir plus sur notre partenaire Nom Partenaire</a>
                    </div>
                </div>
            </div>

            <hr class="hr_etape">

            <div id="Domaine">
                <h2 class="titre_info">Chateau et Domaine</h2>
                <!-- @foreach ($travel->travel_steps as $travelStep)
                    @foreach ($travelStep->activities as $activity)
                        @if( $activity->partner->wine_cellar != null) -->
                <div class="container_etape">
                    <div class="image-section">
                        <img id="preview-img" @click="preview" :src="'/src/assets/images/sejours/sejours1.jpg'"/>
                    </div>
                    <div class="info-section">
                        <h3 class="titre-etape">Nom Cheateau</h3>
                        <p>
                            description Chateau
                        </p>
                        <br>
                        <a href="https://www.lescavesduvieuxpressoir.com/" target="_blank">En savoir plus sur notre partenaire nom chateau</a>
                    </div>
                </div>
            </div>
            <hr class="hr_etape">

            <div id="Avis">
                <h2 class="titre_info">Les Avis</h2>
                <div class="container_avis">
                    <div v-for="unAvis in travel.avis" class="avis-item">
                        <div class="note">
                            <p class="etoiles">
                                <Star :class="{ checked: unAvis.noteavis >= 1 }" />
                                <Star :class="{ checked: unAvis.noteavis >= 2 }" />
                                <Star :class="{ checked: unAvis.noteavis >= 3 }" />
                                <Star :class="{ checked: unAvis.noteavis >= 4 }" />
                                <Star :class="{ checked: unAvis.noteavis >= 5 }" />
                            </p>
                        </div>
                        <div class="exemple-avis">
                            <p class="titre-exemple">{{ unAvis.titreavis }}</p>
                            <p class="description-exemple">{{ unAvis.descriptionavis }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
  

  
</template>

<style scoped>

:root {
  --background-white: #e6e9ef;
  --background-light: #d1d2d3;
  --background-dark: #470023;
  --background-black: #2c0015;
  --border: #2c0015;
  --text-white: hsl(0, 0%, 90%);
  --text-light: hsl(0, 0%, 75%);
  --text-medium: hsl(0, 0%, 50%);
  --text-dark: hsl(0, 0%, 25%);
  --text-black: hsl(0, 0%, 10%);
  --text-hover-light: #e0509d;
  --text-hover-dark: #a13f3f;
  --text-red: #ff1616;
  --button: #80325c;
  --button-light: #e0509d;
  --button-hover-smooth: #a13f73;
  --button-hover-hard: #470023;
  --ligne: #80325c;
}




#container_sejour {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content:center;
    gap: 3vw;
    flex-wrap:nowrap;
}

#container_price_day {
    width: 70%;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrer horizontalement */
    justify-content: center; /* Centrer les éléments verticalement à l'intérieur */
}



#container_left {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#container_right {
    width: 30%;
}

#container_right_fixe {
    overflow: visible;
    position:sticky;
    top: 40px;
    display: flex;
    flex-direction: column; /* Disposition en colonne */
    align-items: center; /* Centrer horizontalement */
    justify-content: center; /* Centrer les éléments verticalement à l'intérieur */
}
#container_right_information {
    background-color: var(--background-dark);
    margin-bottom: 10px;
    border: solid 1px;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column; /* Disposition en colonne */
    align-items: center; /* Centrer horizontalement */
    justify-content: center; /* Centrer les éléments verticalement à l'intérieur */

    h1,h3,p {
        color: var(--text-white);
    }
}

#details {
    margin-bottom: 15px;
}

#container_button_right {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}


#container_button_left {
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    margin: 20px 0;
}

#image_travel {
    height: 600px;
    object-fit:cover;
}

.button-programme {
    background-color: var(--button);
    color: var(--text-white);
    width: 24%;
    display: block;
    text-align: center;
    border-radius: 10px;
    padding: 10px;
    border: solid 1px var(--border); 
}

.button-programme:hover {
    background-color: var(--button-hover-hard);
}

.hr_etape {
    border: none; 
    height: 2px;
    background-color: var(--border);
    margin: 10px 0;
}

.button-acheter {
    width: 100%;
    display: block;
    color: #f7f7f5;
    text-align: center;
    text-transform: uppercase;
    font-size: 1rem;
    padding: 15px 0;
    border-radius: 10px;
    margin-bottom: 5px;
    border: solid 2px;
}

#jours {
    margin-top: 10px;
    align-self: flex-start;
}

#price {
    margin-bottom: 10px;
}

.container_etape {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-evenly;
    width: 100%;
    margin-bottom: 20px;
}

.image-section {
    width: 40%;
}

.img-etape {
    height: 200px;
    width: 100%;
    min-width: 100px;
    object-fit: cover;
    border-radius: 10px;
    border: solid 1px;
}

.info-section {
    width: 55%;
}
.titre_info {
    align-self: left;
    margin-bottom: 20px;
    margin-left: 15px;
    margin-top: 10px;
}

.avis_afficher {
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.button-description {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-bottom: 10px;
    align-items: center;
}

#help,#Avis {
    padding: 15px;
}

#help {
    p,li {
        font-size: 0.9em;
        color: var(--text-black);
    }
}

</style>
