<script setup>
import { ref, computed } from 'vue';
import "https://unpkg.com/lucide@latest"
import { Star } from 'lucide-vue-next';
import PutTravel from './PutTravel.vue';

const props = defineProps({
    travel: {
        required: true
    },
});
const showComponent = ref(false)

</script>

<template>

    <main class="container" v-if="travel">
        <section id="sejour">
            <div id="photo">
                <img :src="'/src/assets/images/sejours/' + travel.photosejour">
            </div>
            <div id="description">
                <h1 class="title">{{ travel.titresejour }}</h1>
                <hr>
                <h4 class="prix">À partir de <span class="euros">{{ travel.prixsejour }}€ / personne</span></h4>
                <p class="description">{{ travel.descriptionsejour }}</p>
                <div id="categories">
                    <p>{{ travel.idcategorievignobleNavigation.libellecategorievignoble }}</p>
                    <p>{{ travel.iddureeNavigation.libelleduree }}</p>
                    <p>{{ travel.idcategoriesejourNavigation.libellecategoriesejour }}</p>
                    <p>{{ travel.idthemeNavigation.libelletheme }}</p>
                </div>
            </div>
            <button id="addTravel" class="buttons" @click="showComponent = !showComponent">{{ showComponent ? '-' : '+' }}</button>

        </section>
        
        <div id="container-addRoad-View" v-if="showComponent">
                
                <PutTravel id="addRoadView" :travelEdit="travel" :travelID="travel.idsejour "/>
                <button id="CloseAddRoadView" @click="showComponent = false">X</button>
            </div>



        <hr>
        <h2 class="titreg">Le programme détaillé de votre séjour</h2>

        <section id="etapes" v-for="etape in travel.etapes">
            <article class="etape">
                <h2>Étape : {{ etape.titreetape }}</h2>
                <p>{{ etape.descriptionetape }}</p>
                <img class="image" :src="'/src/assets/images/etape/' + etape.photoetape">
            </article>
        </section>


        <hr>
        <h2 class="titreg">Les hébergements proposés</h2>

        <section id="hebergements" v-for="etape in travel.etapes">

            <article class="hebergement">
                <img class="imgheberg"
                    :src="'/src/assets/images/hebergement/' + etape.idhebergementNavigation.photohebergement">
                <p class="descrheberg">{{ etape.idhebergementNavigation.descriptionhebergement }}</p>

                <article id="hotel">


                    <a class="lienheberg" href="{{ etape.idhebergementNavigation.lienhebergement }}" target="_blank">"{{
                        etape.idhebergementNavigation.idpartenaireNavigation.nompartenaire }}"</a>

                </article>
            </article>
        </section>



        <hr>
        <h2 class="titreg">Les châteaux et les domaines</h2>

        <section id="chateaux" v-for="etape in travel.etapes">
            <article class="unchateaux" v-for="visite in etape.idvisites">
                <img class="imgchateaux" :src="'/src/assets/images/visite/' + visite.photovisite"></img>
                <p class="descrchateaux">{{ visite.descriptionvisite }}</p>
                <a class="lienchateaux" href="https://www.vinotrip.com/fr/partenaires/25-domaine-trapet"
                    target="_blank">{{ visite.idpartenaireNavigation.nompartenaire }}</a>
            </article>
        </section>

        <div id="Avis" v-if="travel.avis.length > 0">
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

#sejour #description .buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 0;
}

#sejour {
    display: flex;
    position: relative;
    width: 100%;
    padding: 1rem;
    border: 2px solid transparent;
    border-radius: 6px;
    gap: 1rem;
    transition: border 100ms;
}

#sejour #description {
    flex: 3;
    width: calc(100% * (3 / 5));
    border-left: 2px solid #b6005e;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

#sejour #description .title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
}

#sejour #description hr {
    height: 4px;
    background-color: #b6005e;
    margin: 1rem auto;
    width: 20%;
}

#sejour #description .prix {
    font-weight: normal;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

#sejour #description .prix .euros {
    color: #b6005e;
    font-weight: bold;
}

#sejour #description #categories {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
}

#sejour #description #categories p {
    display: block;
    padding: 0.5rem;
    border: 1px solid #b6005e;
    border-radius: 50vw;
    text-align: center;
    user-select: none;
}

#sejour #photo {
    flex: 2;
    width: calc(100% * (2 / 5));
    overflow: auto;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 1fr;
    gap: 1rem;
}

#sejour #photo img,
#sejour #photo .photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    grid-column: 1 / 2;
}

#sejour #photo .photo {
    position: relative;
    width: 100%;
}


#etapes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

#etapes .etape {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    background-color: #edf2f7;
    border-radius: 6px;
}

#etapes .etape .image {
    width: 100%;
    border-radius: 4px;
    aspect-ratio: 16 / 9;
    object-fit: cover;
}

hr {
    height: 4px;
    background-color: #b6005e;
    border: none;
    margin: 0.5rem auto;
}

#avis {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

#avis .avis {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto auto;
    gap: 0.5rem;
}

#avis .avis .stars {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

#chateaux {
    display: grid;
    position: relative;
    width: 100%;

    border: 2px solid transparent;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    border-radius: 6px;
    gap: 1rem;
    transition: border 100ms;
}

#chateaux .unchateaux {
    margin: 10px;
    border-color: black;
}

#chateaux .unchateaux .imgchateaux {
    width: 30%;
    height: auto;
    border-radius: 8px;
    grid-row: 1 / 2;
}

#chateaux .unchateaux .descrchateaux {
    grid-row: 2 / 2;
    margin-top: 10px;
    margin-bottom: 10px;
}

#chateaux .unchateaux .lienchateaux {
    grid-row: 2 / 2;
}

#hebergements {
    display: grid;
    position: relative;
    width: 100%;

    border: 2px solid transparent;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    border-radius: 6px;
    gap: 1rem;
    transition: border 100ms;
}

#hebergements .hebergement {
    margin: 10px;
    border-color: black;
}

#hebergements .hebergement .imgheberg {
    width: 30%;
    height: auto;
    border-radius: 8px;
    grid-row: 1 / 2;
}

#hebergements .hebergement .descrheberg {
    grid-row: 2 / 2;
    margin-top: 10px;
    margin-bottom: 10px;
}

#hebergements .hebergement .lienheberg {
    grid-row: 2 / 2;
}
</style>