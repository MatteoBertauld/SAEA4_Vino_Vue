<script setup>
import TravelSummary from '@/components/TravelSummary.vue';

  import { ref, onMounted } from 'vue';
import { useTravelsIDStore } from '@/stores/travelsId.js';
const travid = useTravelsIDStore();

const travelId = ref(null);


onMounted(() => {

  travelId.value = parseInt(window.location.pathname.split('/').pop()); 
  travid.getTravelById(travelId.value).then(() => {


  });
});
</script>

<template>
  <div class="container">

    

    <section class="bigContainer">


        <TravelSummary :travel="travid.list"></TravelSummary>
        
    </section>
</div>
  
</template>

<script>
</script>