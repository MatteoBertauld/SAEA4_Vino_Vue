<script setup>
import { ref } from 'vue';
import { usePartenairesStore } from '@/stores/partenaires';

const partenaires = usePartenairesStore();
const affichage = ref(partenaires.tous); // État initial 

// Méthode pour changer la catégorie affichée
const changerAffichage = (categorie) => {
    affichage.value = partenaires[categorie];
};
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
        </div>
        <div class="partenaires">
            <article v-for="partenaire in affichage" :key="partenaire.id">
                <div>
                    <h2>{{ partenaire.nompartenaire }}</h2>
                    <p>Téléphone : {{ partenaire.telpartenaire }}</p>
                    <p>Mail : {{ partenaire.mailpartenaire }}</p>
                </div>
            </article>
        </div>
    </div>
</template>

<style>
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

.partenaires article div{
    width: 40vw;
}
article{
    background-color: aliceblue;
    height: 100%;
    border-radius: 5%;
    border: white solid 2px;
}
article:hover{
    border: solid black 2px;
    scale: 1.02;
}
.button:hover{
    background-color: #bd0162;
    color: black;
}

hr {
    height: 4px;
    width: 75px;
    border: none;
    background-color: #bd0162;
}
</style>
