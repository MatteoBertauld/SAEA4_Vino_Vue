
<script setup>
    import { ref, computed } from 'vue';
    import RoadComponent from '@/components/OneRoad.vue';
    import AddRoad from '@/components/AddRoad.vue';
    import { useRoadsStore } from '@/stores/roads.js';

    const roads = useRoadsStore()

    const showComponent = ref(false)

    

    // Déclaration de la recherche
    const searchQuery = ref(''); // Ou initialiser avec une valeur par défaut

    // Calcul du tableau filtré en fonction de la recherche
    const filteredRoads = computed(() => {
        
        console.log("Filtrage de la recherche avec:", searchQuery.value);
        console.log(roads.list)

        return roads.list.filter(road =>
            road.titreroute.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });

</script>


<template>

    <tr id="margin-top">-</tr>
    <h1 id="titre">Toutes nos routes</h1>

    <div id="line-container">
        <div class="search-container">
            <input type="text" v-model="searchQuery" class="search-input" placeholder="Rechercher...">
            <button class="search-btn">🔍</button>
        </div>
        <button class="button" id="addRoad" @click="showComponent = !showComponent">{{ showComponent ? '-' : '+' }}</button>
    </div>
    

    

    <!-- Utilisation de v-if pour afficher le composant lorsque showComponent est vrai -->
    <div id="container-addRoad-View" v-if="showComponent">
        <AddRoad id="addRoadView" />
        <button class="button" id="CloseAddRoadView" @click="showComponent = false">x</button>
    </div>
    

    <div id="routes">
        <h1 v-if="filteredRoads.length === 0">Aucun résultat</h1>
        <RoadComponent v-for="road in filteredRoads" :key="road.idroute" :road="road"/>
    </div>

</template>

<style>

    #titre {
        text-align: center;
    }

    #container-addRoad-View {
        position: fixed; 
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80vw;
        height: 80vh;
        background-color: rgba(255, 255, 255, 0.95); /* Optionnel : pour un fond semi-transparent */
        z-index: 9999; /* Un très grand nombre pour qu'il soit au-dessus de tout */
        border: solid #333 3px;
        border-radius: 3%;
    }

    #addRoadView {
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }

    #CloseAddRoadView {
        position: fixed;
        right: 10px;
        top: 10px;
        width: 10px;
        height: 20px;
        font-size: small;
        display: flex;          /* Utilisation de Flexbox */
        justify-content: center; /* Centre le contenu horizontalement */
        align-items: center;    /* Centre le contenu verticalement */
        text-align: center;     /* Assure que le texte est centré */
    }

    #margin-top {
        height : 110px;
    }

    #line-container {
        display: flex;
        flex-direction: row;
        margin: 0 5vw;
        gap: 10px;
    }

    .search-container {
        display: flex;
        flex-grow: 1;
        align-items: center;
        border: 2px solid #ccc;
        border-radius: 30px;
        padding: 5px;
        background-color: #fff;
        gap: 10px;
    }

    .search-input {
        flex-grow: 1;
        border: none;
        padding: 10px;
        font-size: 16px;
        border-radius: 25px;
        outline: none;
    }

    .search-input:focus {
        border: 2px solid #007BFF;
    }

    .search-btn {
        width: 80px;
        background-color: #007BFF;
        border: none;
        color: white;
        padding: 10px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 16px;
    }

    .search-btn:hover {
        background-color: #0056b3;
    }

    .button {
        background-color: #fff;
        width: 50px;
        color: #333;
        border: 1px solid #ddd;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 14px;
        transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
    }

    #routes {
        margin-top: 2rem;
        flex-direction:row;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        gap: 2rem;
    }

</style>
  