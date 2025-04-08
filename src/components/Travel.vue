<script setup>

    import { RouterLink } from 'vue-router'
    import { 
        Landmark, CookingPot , Volleyball, Flower,
        LandPlot, Leaf, PartyPopper,
        Heart, UsersRound, Baby,
        Star
     } from 'lucide-vue-next';

    defineProps({
        travel: {
            required: true
        }
    });
</script>

<template>
    <article>
        <h2 class="centre">
            <RouterLink :to="{path:'/travels/'+travel.idsejour}" v-bind:tooltip="travel.idsejour" class="hovershiny">{{ travel.titresejour }}</RouterLink>
        </h2>
        <div class="inlineblock">
            <div class="block">
                <img :src="'/src/assets/images/sejours/'+travel.photosejour" alt="" class="mainimage">
                <div id="icons" class="inlineblock">

                    <div :title="travel.idcategorieparticipantNavigation.libellecategorieparticipant">
                        <Heart v-if="travel.idcategorieparticipant === 1"></Heart>
                        <UsersRound v-if="travel.idcategorieparticipant === 2"></UsersRound>
                        <Baby v-if="travel.idcategorieparticipant === 3"></Baby>
                    </div>

                    <div :title="travel.idthemeNavigation.libelletheme">
                        <CookingPot v-if="travel.idtheme === 1"></CookingPot>
                        <Flower v-if="travel.idtheme === 2"></Flower>
                        <LandPlot v-if="travel.idtheme === 3"></LandPlot>
                        <Landmark v-if="travel.idtheme === 4"></Landmark>
                        <Leaf v-if="travel.idtheme === 5"></Leaf>
                        <PartyPopper v-if="travel.idtheme === 6"></PartyPopper>
                    </div>

                </div>
                <div class="note" v-if="travel.avis.length != 0">
                    <p class="etoiles">
                        <Star :class="{ checked: ((travel.avis.reduce((total, {noteavis}) => total + noteavis, 0) / travel.avis.length || 0 ) >= 1) }" />
                        <Star :class="{ checked: ((travel.avis.reduce((total, {noteavis}) => total + noteavis, 0) / travel.avis.length || 0) >= 2) }" />
                        <Star :class="{ checked: ((travel.avis.reduce((total, {noteavis}) => total + noteavis, 0) / travel.avis.length || 0) >= 3) }" />
                        <Star :class="{ checked: ((travel.avis.reduce((total, {noteavis}) => total + noteavis, 0) / travel.avis.length || 0) >= 4) }" />
                        <Star :class="{ checked: ((travel.avis.reduce((total, {noteavis}) => total + noteavis, 0) / travel.avis.length || 0) >= 5) }" />
                    </p>
                    <p class="valeur">{{ travel.avis.reduce((total, {noteavis}) => total + noteavis, 0) / travel.avis.length || 0 }}/5 ({{ travel.avis.length }} avis)</p>

                </div>
            </div>
            <div class="petitContainer">

                <div class="column">
                    <p>{{ travel.idcategorievignobleNavigation.libellecategorievignoble }} <span v-if="travel.idlocaliteNavigation?.libellelocalite">({{travel.idlocaliteNavigation?.libellelocalite}})</span></p>
                    <hr>
                    <p>À partir de <span class="shiny">{{ travel.prixsejour }}€</span> par personne</p>
                    <p>{{ travel.descriptionsejour }}</p>
                    <p>{{ travel.iddureeNavigation.libelleduree }} </p>
                </div>
            </div>
        </div>

        <RouterLink :to="{path:'/travels/'+travel.idsejour}" v-bind:tooltip="travel.idsejour" class="button hovershiny">Decouvrir</RouterLink>
    
    </article>

</template>

<style scoped>

.centre{
    text-align: center;
}
.icons{
    position: absolute;
    top: 5px;
    right: 5px;
}
article{
    background-color: aliceblue;
    width: 30vw;
    height: 100%;
    border-radius: 5%;
    padding: 10px;
    margin: 50px 0 50px 0;
    border: white solid 2px;
    position: relative;
}
article:hover{
    border: solid black 2px;
    scale: 1.02;
}
.petitContainer{
    width: 50%;
    padding: 0 15px;
}
.mainimage{
    height: 150px;
}
.shiny{
    color: #bd0162;
}
.hovershiny:hover{
    color: #bd0162;
}
.column{
    display: flex;
    flex-direction: column;
}
.button{
    width: 20%;
    padding:25px;
    right: 5%;
    bottom: -15%;
    background-color: black;
    color: white;
    border-radius: 10%;
    position: absolute;
    justify-content: stretch;
    text-align: center;
}

.fillwidth{
    width: 100%;
}
.button:hover{
    background-color: #bd0162;
    color: black;
}

.inlineblock{
    display: flex;
    flex-direction: row;
}

.block{
    margin: 0;
}



.block{
    display: flex;
    flex-direction: column;
}
a{
    text-decoration: none;
    color: black;
}

hr {
    margin: 0 0 1rem 0;
    height: 4px;
    width: 75px;
    border: none;
    background-color: #bd0162;
}

#icons{
    width: 100%;
    margin: 0.5rem 0;
    align-items: center;
}

#icons *{
    margin: 0 0.1rem;
    width: 32px;
    height: 32px;
}


.note .etoiles .checked {
    fill: #b6005e;
}

.etoiles{
    margin: 0;
}
</style>