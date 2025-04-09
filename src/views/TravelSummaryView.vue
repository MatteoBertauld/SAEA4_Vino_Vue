<script setup>
import TravelSummary from '@/components/TravelSummary.vue';

import { ref, onMounted } from 'vue';
import { useTravelsStore } from '@/stores/travels.js';
const travelsStore = useTravelsStore();

const travelId = parseInt(window.location.pathname.split('/').pop());;
const oneTravel = ref(null);
const loading = ref(true);

onMounted(async () => {
  try {
    oneTravel.value = await travelsStore.getTravelById(travelId);
    loading.value = false
  } catch (error) {
    console.error("Error fetching travel data:", error);
  }
});

</script>

<template>
  <div class="container">

    <div v-if="loading.value">Chargement ...</div>
    <section v-else class="bigContainer">
      <TravelSummary :travel="oneTravel"></TravelSummary>
    </section>
  </div>

</template>

<script>
</script>