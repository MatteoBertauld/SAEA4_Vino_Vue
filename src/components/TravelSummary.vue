<script setup>
import { ref, computed,onMounted } from 'vue';
import "https://unpkg.com/lucide@latest"
import { Star } from 'lucide-vue-next';
import PutTravel from './PutTravel.vue';
import { useTravelsStore } from '@/stores/travels';
import { jwtDecode } from "jwt-decode";

const props = defineProps({
    travel: {
        required: true
    },
});
const showComponent = ref(false)
const travelStore = useTravelsStore();

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


</script>

<template>

<div id="container-addRoad-View" v-if="showComponent">
    <PutTravel id="addRoadView" :travelEdit="travel" :travelID="travel.idsejour "/>
    <button id="CloseAddRoadView" @click="showComponent = false">X</button>
</div>

<main class="container" v-if="travel">
    <section id="sejour">
        <div id="sejour-section-left">
            <div id="sejour-image">
                <img :src="'/src/assets/images/sejours/' + travel.photosejour">
            </div>
            <hr class="sejour-section-left-hr">
            <h2 class="travel-title">Le programme détaillé de votre séjour</h2>

            <section class="sejour-article" id="etapes" v-for="etape in travel.etapes">
                <img :src="'/src/assets/images/etape/' + etape.photoetape"> 
                <div class="sejour-article-text">
                    <h2>{{ etape.titreetape }}</h2>
                    <p>{{ etape.descriptionetape }}</p>
                </div>
            </section>

            <hr class="sejour-section-left-hr">

            <h2 class="travel-title">Les hébergements proposés</h2>

            <section class="sejour-article" id="hebergements" v-for="etape in travel.etapes">
                <img :src="'/src/assets/images/hebergement/' + etape.idhebergementNavigation.photohebergement">
                <div class="sejour-article-text">
                    <h2>{{ etape.idhebergementNavigation.idpartenaireNavigation.nompartenaire }}</h2>
                    <p>{{ etape.idhebergementNavigation.descriptionhebergement }}</p>
                    <a class="sejour-bouton-lien button-classic" :href="etape.idhebergementNavigation.lienhebergement" target="_blank">{{etape.idhebergementNavigation.idpartenaireNavigation.nompartenaire }}</a>
                </div>
            </section>


            <hr class="sejour-section-left-hr">
            

            <div id="Avis" v-if="travel.avis.length > 0">
                <div id="travel-avis-center">
                    <h2 class="travel-title">Les Avis</h2>
                    <div v-for="Avis in travel.avis" class="travel-avis-container">

                        <div class="travel-avis-travel_note">
                            <a class="travel-avis-travel">{{ Avis.titreavis }}</a>
                            <div class="travel-avis-note">
                                <div class="travel-avis-etoiles-container" v-for="index in 5">
                                    <i v-if="Avis.noteavis >= index" class="fa-solid fa-star star"></i>
                                    <i v-else class="fa-regular fa-star star"></i>
                                </div>
                                <p class="travel-avis-note-valeur">{{ Avis.noteavis}}/5</p>
                            </div>
                        </div>
                        <div class="travel-avis-description_lire">
                            <p class="description-exemple">{{ Avis.descriptionavis }}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <div id="sejour-section-right">
            <div id="section-fixe">
                <h1 class="sejour-title">{{ travel.titresejour }}</h1>
                <div id="sejour-price-detail">
                    <hr class="sejour-section-right-hr">
                    <p>{{ travel.iddureeNavigation.libelleduree }}</p>
                    <p id="sejour-prix"><span id="euros">{{ travel.prixsejour }}€</span> / pers</p>
                    <hr class="sejour-section-right-hr">
                </div>
                
                <div id="sejour-categories">
                    <p>{{ travel.idcategorievignobleNavigation.libellecategorievignoble }} {{ travel.idlocalite!=null ? "("+travel.idlocaliteNavigation.libellelocalite+")" : "" }}</p>
                    <p>{{ travel.idcategorieparticipantNavigation.libellecategorieparticipant }}</p>
                    <p>{{ travel.idthemeNavigation.libelletheme }}</p>
                </div>
                <p id="sejour-description">{{ travel.descriptionsejour }}</p>
                <div id="sejour-button">
                    <button v-if="isAdmin" id="addTravel" class="button-classic" @click="showComponent = !showComponent">
                        <i class="fa-regular fa-pen-to-square" ></i>
                    </button>
                    <button v-if="isAdmin" id="deleteTravel" class="button-classic" @click="travelStore.deleteTravel(travel.idsejour)">
                        <i class="fa-solid fa-trash" ></i>
                    </button> 
                </div>
                
            </div>
        </div>

    </section>
  
</main>



</template>

<style>

#sejour-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

#sejour {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
}


#section-fixe {
    position: fixed;
    display: flex;
    margin-right: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--background-white);
    border: solid 2px var(--border);
    border-radius: 20px;
    padding:20px;    
    height: 400px;
}

#sejour-section-left {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


#sejour-image {
    width: 100%;
    height: 400px;
}

#sejour-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.sejour-section-right-hr {
    width: 100%;
    height: 2px;
    background-color: var(--border);
}

#sejour-price-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: min(100%,150px);
}
#sejour-price-detail p {
    margin: 0;
    font-size: 1.2em;
    font-weight: bold;
    color: var(--text-black);
}

#sejour-price-detail span {
    font-size: 1.5em;
    font-weight: bold;
    color: var(--text-black);
}

#sejour-categories {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
#sejour-categories p {
    background-color: var(--background-dark);
    border: solid 2px var(--border);
    border-radius: 20px;
    padding: 5px 10px;
    font-size: 1em;
    font-weight: bold;
    color: var(--text-white);
    margin: 0;
}

#sejour-description {
    font-size: 0.9em;
    color: var(--text-dark);
    text-align: center;
    margin-top: 15px;
}

.sejour-section-left-hr {
    width: 80%;
    object-fit: border-box;
    margin: 20px 0;
    height: 2px;
    background-color: var(--border);
    border-radius: 10px;
}

.travel-title {
    font-size: 1.5em;
    font-weight: bold;
    color: var(--text-black);
    margin: 0 0 10px 0;
}

.sejour-article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
}
.sejour-article img {
    width: 100%;
    height: 100%;
    object-fit:fill;
    border: 1px solid var(--border);
    border-radius: 10px;
}

.sejour-article-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
}


#travel-avis-center {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding:0;
}

.travel-avis-travel {
    text-decoration: none;
    font-size: 1.5em;
    color: var(--text-black);
    font-weight:bold;
}
.travel-avis-travel:hover {
    cursor: pointer;
    color: var(--text-dark);
    text-decoration: underline;
}

.travel-avis-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    border-bottom: solid 2px var(--background-light);
}


.travel-avis-travel_note {
    display: flex;
    align-items: left;
    gap: 10px;
}

.travel-avis-note {
    display: flex;
    align-items: center;
    gap: 5px;
}

.travel-avis-etoiles-container {
    display: flex;
    gap: 5px;
}

.star {
    display: inline-block;
    color: var(--star);
}

.travel-avis-note-valeur {
    color: var(--star);
    font-weight:bold;
    font-size: 1em;
    margin: 0;
}


.travel-avis-description_lire {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


</style>