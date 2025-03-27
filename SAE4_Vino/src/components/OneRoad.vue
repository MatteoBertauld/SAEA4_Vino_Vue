<script setup>
  import { ref, computed } from 'vue';
  import AddRoad from '@/components/AddRoad.vue';

  defineProps({
    road: {
      required: true,
    },
  });


  const showComponent = ref(false)

</script>





<template>

  <div id="route">
    <h3 id="title">{{ road.titreroute }}</h3>
    
    <img id="image" :src="'/src/assets/images/routedesvins/'+road.photoroute">

    <p id="desc">{{ road.descriptionroute }}</p>

    <div id="container-buttons">
      <button id="edit-button">
        <i class="fa-regular fa-pen-to-square" @click="showComponent = !showComponent"></i>
      </button>
      <button id="delete-button" @click="">
        <i class="fa-solid fa-trash"></i>
      </button> 
    </div>

  </div>

  <div id="container-addRoad-View" v-if="showComponent">
      <AddRoad id="addRoadView" :newRoad="road" :toEdit="true"/>
      <button class="button" id="CloseAddRoadView" @click="showComponent = false">x</button>
  </div>
  

  
</template>

<style scoped>

  #container-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
  }

  #container-buttons button {
    width: 50px;
    height: 50px;
    border: none;
    font-size: x-large;
    background: none;
  }

  #container-buttons button:hover {
      font-size: xx-large;
      transition: ease-in-out 0.2s;
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

  #route {
    display: grid;
    grid-template-rows: 80px 300px 220px 50px;
    grid-gap: 1rem;
    padding: 1.5rem;
    width: 350px;
    height: 700px;
    background-color: #f5f5f5;
    border-radius: 10px;
    border: 2px solid transparent;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: border 0.3s ease, box-shadow 0.3s ease;
  }

  #route:hover {
    border: 2px solid #333;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  #title {
    grid-row: 1;
    font-size: 2rem;
    text-align: center;
    color: #333;
    font-weight: bold;
    margin: 0;
  }

  #image {
    grid-row: 2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  #image:hover {
    transform: scale(1.05);
  }

  #desc {
    grid-row: 3;
    font-size: 0.8rem;
    text-align: justify;
    color: #555;
    line-height: 1.5;
    margin: 0;
  }

  @media (max-width: 768px) {
    #route {
        width: 100%;
        height: auto;
    }

    #title {
        font-size: 1.5rem;
    }
  }


</style>
