<script setup>
defineProps({
    travel: {
        required: true
    }
    
})

</script>

<template>
    
    <article>
        <h2 class="centre"><a :href="'/travel/'+travel.idsejour" class="hovershiny">{{ travel.titresejour }}</a></h2>
        <div class="inlineblck">
            <img :src="'/src/assets/images/sejours/'+travel.photosejour" alt="" class="mainimage">
            <div class="petitContainer">
                <div class="icons">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
                <div class="column">
                    <p>{{ travel.idcategorievignobleNavigation.libellecategorievignoble }}</p>
                    <hr>
                    <p>À partir de <span class="shiny">{{ travel.prixsejour }}€</span> par personne</p>
                    <p>{{ travel.descriptionsejour }}</p>
                    <p>{{ travel.iddureeNavigation.libelleduree }} </p>
                </div>
            </div>
        </div>
        <a :href="'/travels/'+travel.idsejour" class="button fillwidth">Decouvrir</a>
    
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
    border-radius: 20px;
    padding: 10px;
    margin: 50px 0 50px 0;
    border: white solid 2px;
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
    width: 50%;
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
    width: 100%;
    padding:25px;
    margin:25px;
    background-color: black;
    color: white;

    justify-content: stretch;
}

.fillwidth{
    width: 100%;
}
.button:hover{
    background-color: #bd0162;
    color: black;
}
p{
    margin:10px;
}
.inlineblck{
    display: flex;
    flex-direction: row;
}
a{
    text-decoration: none;
    color: black;
}

hr {
    height: 4px;
    width: 75px;
    border: none;
    background-color: #bd0162;
    margin: .5rem 0;
}
</style>