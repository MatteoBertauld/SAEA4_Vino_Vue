<script setup>
import Travel from '@/components/Travel.vue';
import { useTravelsStore } from '@/stores/travels';
const travels = useTravelsStore();
import "https://unpkg.com/lucide@latest"
import { Star } from 'lucide-vue-next';

</script>

<template>
    <h1>Quelques avis de voyageurs</h1>
    <hr id="ligne">
    <section v-for="travel in travels.list" :travel="travel">
        <!-- {{travel.avis}} -->
        <article class="avis">
            <a class="titre-avis" :href="'/travel/'+travel.idsejour" >{{travel.titresejour }}</a>
            <div class="note">
                <p class="etoiles">
                    <Star :class="{ checked: travel.avis.noteavis >= 1 }" />
                    <Star :class="{ checked: travel.avis.noteavis >= 2 }" />
                    <Star :class="{ checked: travel.avis.noteavis >= 3 }" />
                    <Star :class="{ checked: travel.avis.noteavis >= 4 }" />
                    <Star :class="{ checked: travel.avis.noteavis >= 5 }" />
                </p>
                <p class="valeur">{{ travel.avis.noteavis }}/5 ({{ travel.avis.length }} avis)</p>
            </div>
            <div class="exemple-avis">
                <p class="titre-exemple">{{ travel.avis.titreavis }}</p>
                <p class="description-exemple">{{ travel.avis.descriptionavis }}</p>
            </div>
            <hr class="separateur"> <!-- Ajout du trait ici -->
        </article>

    </section>
</template>

<style>
h1 {
    text-align: center;
}

#ligne {
    height: 4px;
    width: 75px;
    border: none;
    background-color: #b6005e;
    margin: 0.5rem auto;
}

.avis {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    margin: 0 10vw;
}

.avis:not(:last-of-type) {
    border-bottom: 2px solid #b6005e;
    /* Ligne séparatrice */
    padding-bottom: 1rem;
    /* Ajoute un espace */
}


.avis .titre-avis {
    font-size: 1.25rem;
    font-weight: bold;
    text-decoration: none;
}

.avis .note {
    display: flex;
    align-items: center;
}

.avis .note .etoiles .lucide {
    height: 0.9rem;
    width: 0.9rem;
    color: var(--c-gray-300);
}

.avis .note .etoiles .checked {
    fill: #b6005e;
}

.avis .note .valeur {
    margin-left: 0.5rem;
}

.avis .exemple-avis {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.avis .exemple-avis .titre-exemple {
    font-style: italic;
}

.buttons {
    display: flex;
    justify-content: center; /* Centre horizontalement */
    white-space: nowrap; /* Empêche le retour à la ligne */
    padding: 10px 20px; /* Ajuste la taille */
    min-width: 150px; /* Taille minimale */
    text-align: center; /* Centre le texte */
}

.button{
    min-width: 200px; /* Taille minimale */
}

.unavis .ligne {
    margin: 8px;
    color: #b6005e;
}

article {
    margin: 10px;
}

.separateur {
    height: 2px;
    width: 100%;
    border: none;
    background-color: #b6005e;
    margin: 1rem auto;
}
</style>