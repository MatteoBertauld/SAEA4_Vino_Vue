<script setup>
import { useTravelsStore } from '@/stores/travels';
import { useRouter } from 'vue-router';

const travels = useTravelsStore();
const router = useRouter();

</script>

<template>

    <div id="homepage-container">
        <div @click="router.push('/routedesvins')" class="homepage-image" >
            <h1>Routes des vins</h1>
            <img src="../assets/images/routedesvins/ALSACE.png">
        </div>
        <div @click="router.push('/travels')" class="homepage-image" data-url="/travels">
            <h1>Sejours</h1>
            <img src="../assets/images/sejours/sejour1.jpg">
        </div>
        <div @click="router.push('/partenaires')" class="homepage-image" data-url="/partenaires">
            <h1>Partenaires</h1>
            <img src="../assets/images/hebergement/appartement_vignoble_familial.jpg">
        </div>
        
    </div>

    <h1>Quelques avis de voyageurs</h1>
    <hr class="ligne">
    
    <div id="homepage-avis-center">
        <!-- {{travel.avis}} -->
        <!-- v-if="travel.avis.length > 0" -->
        <article v-for="travel in travels.list.slice(0, 3)" :key="travel.id" :travel="travel" class="homepage-avis-container">
            
            <div class="homepage-avis-travel_note">
                <!-- <a class="homepage-avis-travel" :href="'/travel/' + travel.idsejour">{{ travel.titresejour }}</a> -->
                <a class="homepage-avis-travel">{{ travel.avis[0].titreavis }}</a>
                <div class="homepage-avis-note">
                    <div class="homepage-avis-etoiles-container" v-for="index in 5">
                        <i v-if="travel.avis[0].noteavis >= index" class="fa-solid fa-star star"></i>
                        <i v-else class="fa-regular fa-star star"></i>
                    </div>
                    <p class="homepage-avis-note-valeur">{{ travel.avis[0].noteavis }}/5</p>
                </div>
            </div>
            <div class="homepage-avis-description_lire">
                <p class="description-exemple">{{ travel.avis[0].descriptionavis }}</p>
                <!-- <a href="/opinions/" class="homepage-avis-read">{{ travel.avis.length > 1 ? "Lire les " + travel.avis.length + " avis" : "Lire l'avis" }}</a> -->
            </div>
        </article>
        <a id="homepage-button-avis" class="button-classic" href="/opinions/">Découvrir tous les avis</a>

    </div>
    

</template>

<style>

#homepage-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.homepage-image {
    display: grid;
    background-color: var(--background-dark);
    grid-template-rows: auto max(20vw,200px);
    width: max(20vw,200px);
    height: auto;
    border: 3px solid var(--border);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
}
.homepage-image:hover {
    cursor: pointer;
    box-shadow: 0 0 10px var(--background-dark);
    transform:scale(1.04);
    transition: all 0.3s ease;
}


.homepage-image h1 {
    color: var(--text-white);
}

.homepage-image img {
    
    height: 100%;
    width: 100%;
    /* aspect-ratio: 1 / 1; */
    object-fit:cover;
}


#homepage-avis-center {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 0 20%;
}

.homepage-avis-travel {
    text-decoration: none;
    font-size: 1.5em;
    color: var(--text-black);
    font-weight:bold;
}
.homepage-avis-travel:hover {
    cursor: pointer;
    color: var(--text-dark);
    text-decoration: underline;
}

.homepage-avis-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: max(50%,500px);
    padding: 10px;
    border-bottom: solid 2px var(--background-light);
}


.homepage-avis-travel_note {
    display: flex;
    align-items: left;
    gap: 10px;
}

.homepage-avis-note {
    display: flex;
    align-items: center;
    gap: 5px;
}

.homepage-avis-etoiles-container {
    display: flex;
    gap: 5px;
}

.star {
    display: inline-block;
    color: var(--star);
}

.homepage-avis-note-valeur {
    color: var(--star);
    font-weight:bold;
    font-size: 1em;
    margin: 0;
}


.homepage-avis-description_lire {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>