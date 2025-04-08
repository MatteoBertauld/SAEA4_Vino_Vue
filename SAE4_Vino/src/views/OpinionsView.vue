<script setup>
import Travel from '@/components/Travel.vue';
import { useTravelsStore } from '@/stores/travels';
const travels = useTravelsStore();
import "https://unpkg.com/lucide@latest";
import { Star } from 'lucide-vue-next';
</script>

<template>
    <h1>Quelques avis de voyageurs</h1>
    <hr id="ligne">
    <section v-for="travel in travels.list" :key="travel.id" :travel="travel">
        <article v-if="travel.avis.length > 0" class="avis">
            <a class="titre-avis" :href="'/travel/'+travel.idsejour">{{ travel.titresejour }}</a>
            <div class="avis-list">
                <div v-for="avis in travel.avis" :key="avis.id" class="avis-item">
                    <div class="note">
                        <p class="etoiles">
                            <Star :class="{ checked: avis.noteavis >= 1 }" />
                            <Star :class="{ checked: avis.noteavis >= 2 }" />
                            <Star :class="{ checked: avis.noteavis >= 3 }" />
                            <Star :class="{ checked: avis.noteavis >= 4 }" />
                            <Star :class="{ checked: avis.noteavis >= 5 }" />
                        </p>
                    </div>
                    <div class="exemple-avis">
                        <p class="titre-exemple">{{ avis.titreavis }}</p>
                        <p class="description-exemple">{{ avis.descriptionavis }}</p>
                    </div>
                </div>
            </div>
            <hr class="separateur">
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
    gap: 1rem;
    padding: 1rem;
    margin: 0 10vw;
}

.avis-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.avis-item {
    border: 1px solid #b6005e;
    padding: 0.5rem;
    border-radius: 0.25rem;
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

.separateur {
    height: 2px;
    width: 100%;
    border: none;
    background-color: #b6005e;
    margin: 1rem auto;
}
</style>
