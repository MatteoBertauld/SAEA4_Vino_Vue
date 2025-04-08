<script setup>
import { h } from 'vue';


const props = defineProps({
    travel: {
        required: true
    },
});


</script>

<template >
    

    <main class="container"> 
        <hr>
        <h2 class="titreg">Le programme détaillé de votre séjour</h2>

        <section id="etapes" v-for="etape in travel.etapes">
            <article class="etape">
                <h2>Étape  : {{ etape.titreetape}}</h2>
                <p>{{ etape.descriptionetape }}</p>
                <img :src="'/src/assets/images/etape/'+etape.photoetape">
            </article>
        </section>


        <hr>
        <h2 class="titreg">Les hébergements proposés</h2>

        <section id="hebergements" v-for="etape in travel.etapes">

            <article class="hebergement">
                <img :src="'/src/assets/images/hebergement/'+etape.idhebergementNavigation.photohebergement">
                <p class="descrheberg">{{ etape.idhebergementNavigation.descriptionhebergement }}</p>

                <article id="hotel">


                    <a class="lienheberg link" href="{{ etape.idhebergementNavigation.lienhebergement }}"
                        target="_blank">"{{ etape.idhebergementNavigation.idpartenaireNavigation.nompartenaire }}"</a>

                </article>
            </article>
        </section>



        <hr>
        <h2 class="titreg">Les châteaux et les domaines</h2>

        <section id="chateaux" v-for="etape in travel.etapes">
                <article class="unchateaux" v-for="visite in etape.idvisites">
                        <img class="imgchateaux" :src="'/src/assets/images/visite/'+visite.photovisite"></img>
                        <p class="descrchateaux">{{ visite.descriptionvisite }}</p>
                            <a class="lienchateaux link" href="https://www.vinotrip.com/fr/partenaires/25-domaine-trapet"
                                target="_blank">{{ visite.idpartenaireNavigation.nompartenaire }}</a>
                </article>
        </section>

        <div id="Avis">
                <h2 class="titre_info">Les Avis</h2>
                <div class="container_avis">
                    <div v-for="Avis in travel.avis" class="avis-item">
                        <div class="note">
                            <p class="etoiles">
                                <Star :class="{ checked: Avis.noteavis >= 1 }" />
                                <Star :class="{ checked: Avis.noteavis >= 2 }" />
                                <Star :class="{ checked: Avis.noteavis >= 3 }" />
                                <Star :class="{ checked: Avis.noteavis >= 4 }" />
                                <Star :class="{ checked: Avis.noteavis >= 5 }" />
                            </p>
                        </div>
                        <div class="exemple-avis">
                            <p class="titre-exemple">{{ Avis.titreavis }}</p>
                            <p class="description-exemple">{{ Avis.descriptionavis }}</p>
                        </div>
                    </div>
                </div>
            </div>



    </main>




</template>

<style>




</style>