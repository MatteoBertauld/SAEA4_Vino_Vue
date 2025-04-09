<script setup>

    import { RouterLink } from 'vue-router'
    import { 
        Landmark, CookingPot, Flower,
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
    <article id="travel-section">
        <div class="travel-section-image"> 
            <img :src="'/src/assets/images/sejours/'+travel.photosejour" alt="">
        </div>
        <div class="travel-section-padding">
            <div class="travel-section-title">
                <RouterLink :to="{path:'/travels/'+travel.idsejour}" v-bind:tooltip="travel.idsejour" class="travel-title">{{ travel.titresejour }}</RouterLink>
                
                <div id="icons" class="travel-section-logo">
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
            </div>
            
            <div class="travel-section-titre-secondaire">
                <div class="travel-location">
                    <p >{{ travel.idcategorievignobleNavigation.libellecategorievignoble }}</p>
                    <!-- <p v-if="travel.idlocaliteNavigation?.libellelocalite">({{travel.idlocaliteNavigation?.libellelocalite}})</p> -->
                </div>
                
                <div class="note travel-note" v-if="travel.avis.length != 0">
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
            <div class="travel-section-description">
                <p>{{ travel.descriptionsejour }}</p>
            </div>
            <div class="travel-section-button">
                <p>{{ travel.iddureeNavigation.libelleduree }} </p>
                <RouterLink :to="{path:'/travels/'+travel.idsejour}" v-bind:tooltip="travel.idsejour" class="button-classic">Decouvrir</RouterLink>
            </div>
        </div>
    </article>

</template>

<style scoped>

#travel-section{
    margin-top: 20px;
    display: grid;
    grid-template-rows: 300px auto;
    width: 350px;
    height: 550px;
    background-color: #f5f5f5;
    border-radius: 10px;
    border: 2px solid var(--border);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: border 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
}

.travel-section-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.travel-section-padding {
    display: grid;
    grid-template-rows: 20px 50px auto 50px;
    padding: 10px;
}


.travel-section-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.travel-title {
    font-size: 0.8em;
    color: var(--text-black);
    font-weight:bold;
    text-decoration: none;
}

.travel-section-logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
}

.travel-section-titre-secondaire {
    display: grid;
    grid-template-columns: 2fr 3fr;
}



.travel-location {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
}

.travel-note {
    margin-left: auto;
}

.travel-location p {
    font-size: 0.8em;
    color: var(--text-dark);
    font-weight: bold;
    text-decoration: none;
}

.travel-section-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}





</style>