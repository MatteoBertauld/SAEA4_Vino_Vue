<script setup>
import Travel from '@/components/Travel.vue';
import { useTravelsStore } from '@/stores/travels';
const travels = useTravelsStore();
import "https://unpkg.com/lucide@latest"

</script>

<template>
    <h1>Quelques avis de voyageurs</h1>
    <hr id="ligne">
    
    <div id="homepage-avis-center">
        <a id="homepage-button-avis" href="/opinions/">Découvrir tous les avis</a>
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
                <a class="homepage-avis-read">{{ travel.avis.length > 1 ? "Lire les " + travel.avis.length + " avis" : "Lire l'avis" }}</a>
            </div>
        </article>

    </div>
    

</template>

<style>

#homepage-button-avis {
    background: none;
    display: inline-block;
    padding: 10px 20px;
    font-size: 1.5rem;
    font-weight: bold; 
    color: var(--text-black);
    text-decoration: none; 
    border: none;
}

#homepage-button-avis:hover {
    cursor: pointer;
    color: var(--text-dark);
    text-decoration: underline;
}

#homepage-avis-center {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 5%;
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
    width: 100%;
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


.homepage-avis-read {
    color: var(--text-hover-light);
    text-decoration: none;
}

.homepage-avis-read:hover {
    cursor: pointer;
    color: var(--text-hover-dark);
    text-decoration: underline;
}






</style>