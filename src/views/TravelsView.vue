<script setup defer>
import Travel from '@/components/Travel.vue';
import AddTravel from '@/components/AddTravel.vue';
import { useTravelsStore } from '@/stores/travels';
import { ref, computed } from 'vue';
const travels = useTravelsStore();

const vineryFilter = ref(0);
const timespanFilter = ref(0)
const locationFilter = ref(0)
const targetFilter = ref(0)
const themeFilter = ref(0)

var locations = ref([]);
const showComponent = ref(false)

const filteredTravels = computed((previous) => {
  let l = travels.list;

  if (previous != undefined) {

    l = vineryFilter.value != 0 ? l.filter(s => s.idcategorievignoble == vineryFilter.value) : l
    l = timespanFilter.value != 0 ? l.filter(s => s.idduree == timespanFilter.value) : l
    l = locationFilter.value != 0 ? l.filter(s => s.idlocalite == locationFilter.value) : l
    l = targetFilter.value != 0 ? l.filter(s => s.idcategorieparticipant == targetFilter.value) : l
    l = themeFilter.value != 0 ? l.filter(s => s.idtheme == themeFilter.value) : l

    // Reset cursor on locationFilter
    if (previous["vinery"] != vineryFilter.value) {
      locationFilter.value = 0
      document.getElementById("locationFilter").value = 0
      locations.value = [];
    }


    // A opti
    if (vineryFilter.value != 0) {
      l.forEach(travel => {
        if (travel.idlocaliteNavigation != null && !locations.value.find(l => l.idlocalite == travel.idlocaliteNavigation.idlocalite))
          locations.value.push(travel.idlocaliteNavigation)
      });
    }

    // Hide locationFilter if no location for this vinery
    document.getElementById("travels-locationFilter").style.display = locations.value.length == 0 ? "none" : "flex"
    document.getElementById("travels-notravel").style.display = l.length != 0 ? "none" : "flex"


  }
  return {
    'list': l,
    "vinery": vineryFilter.value
  }
    ;
})


</script>

<template>
  <div id="travels-container-addRoad-View" v-if="showComponent">
    <AddTravel id="travels-addRoadView" />
    <button id="travels-CloseAddRoadView" @click="showComponent = false">X</button>
  </div>

  <div class="travels-container">

    <div class="travels-filtrecontainer">

      <button id="travels-addTravel" @click="showComponent = !showComponent">{{ showComponent ? '-' : '+' }}</button>
      
      <select id="travels-vineryFilter" v-model="vineryFilter">
        <option :value="0">Quel vignoble ? </option>
        <option v-for="vinery in travels.vineries" :value="vinery.idcategorievignoble"> {{
          vinery.libellecategorievignoble }} </option>
      </select>
      
      <select id="travels-locationFilter" v-model="locationFilter" style="display: none;">
        <option :value="0" id="baseLocation">Localité ? </option>
        <option v-for="location in locations" :value="location.idlocalite"> {{ location.libellelocalite }}</option>
      </select>
      
      <select id="travels-timeFilter" v-model="timespanFilter">
        <option :value="0">Durée ? </option>
        <option v-for="timespan in travels.timespans" :value="timespan.idduree"> {{ timespan.libelleduree }}</option>
      </select>
      
      <select id="travels-targetFilter" v-model="targetFilter">
        <option :value="0">Pour qui ? </option>
        <option v-for="target in travels.targets" :value="target.idcategorieparticipant"> {{
          target.libellecategorieparticipant }}</option>
      </select>
      
      <select id="travels-themeFilter" v-model="themeFilter">
        <option :value="0">Une envie particulière ? </option>
        <option v-for="theme in travels.themes" :value="theme.idtheme"> {{ theme.libelletheme }}</option>
      </select>

    </div>

    <div id="travels-notravel" style="display: none;">Aucun séjour n'a été trouvé pour ces paramètres.</div>
    <section id="travels-container-travel">
      <Travel v-for="travel in filteredTravels['list']" :travel="travel"></Travel>
    </section>

  </div>



</template>

<style>

.travels-filtrecontainer {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.5rem;
  background-color: var(--background-white);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.travels-filtrecontainer button {
  background-color: var(--background-medium);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.travels-filtrecontainer button:hover {
  background-color: var(--background-dark);
}

.travels-filtrecontainer select {
  flex: 1;
  min-width: 200px;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  background-color: var(--background-light);
  color: var(--text-black);
  transition: var(--border) 0.3s ease;
}

.travels-filtrecontainer select:focus {
  border-color: var(--background-dark);
  outline: none;
}

.travels-filtrecontainer select option {
  font-size: 0.9rem;
  padding: 0.5rem;
}

#travels-container-travel {
  display: flex;
  flex-wrap: wrap;
  margin: 3vh 0;
  justify-content: space-around;
}


#travels-container-addRoad-View {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 80vh;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 9999;
  border: solid #333 3px;
  border-radius: 3%;
  overflow: hidden;
}

#travels-addRoadView {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

#travels-CloseAddRoadView {
  position: fixed;
  right: 25px;
  top: 25px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
