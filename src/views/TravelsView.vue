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
    document.getElementById("locationFilter").style.display = locations.value.length == 0 ? "none" : "flex"
    document.getElementById("noVinery").style.display = l.length != 0 ? "none" : "flex"


  }
  return {
    'list': l,
    "vinery": vineryFilter.value
  }
    ;
})


</script>

<template>
  <div class="sectionContainer">

    <div class="filtrecontainer">

      <button id="addTravel" @click="showComponent = !showComponent">{{ showComponent ? '-' : '+' }}</button>
      <select name="" id="vineryFilter" v-model="vineryFilter">
        <option :value="0">Quel vignoble ? </option>
        <option v-for="vinery in travels.vineries" :value="vinery.idcategorievignoble"> {{
          vinery.libellecategorievignoble }} </option>
      </select>
      <select v-model="locationFilter" name="" id="locationFilter" style="display: none;">
        <option :value="0" id="baseLocation">Localité ? </option>
        <option v-for="location in locations" :value="location.idlocalite"> {{ location.libellelocalite }}</option>
      </select>
      <select name="" id="timeFilter" v-model="timespanFilter">
        <option :value="0">Durée ? </option>
        <option v-for="timespan in travels.timespans" :value="timespan.idduree"> {{ timespan.libelleduree }}</option>
      </select>
      <select name="" id="targetFilter" v-model="targetFilter">
        <option :value="0">Pour qui ? </option>
        <option v-for="target in travels.targets" :value="target.idcategorieparticipant"> {{
          target.libellecategorieparticipant }}</option>
      </select>
      <select name="" id="themeFilter" v-model="themeFilter">
        <option :value="0">Une envie particulière ? </option>
        <option v-for="theme in travels.themes" :value="theme.idtheme"> {{ theme.libelletheme }}</option>
      </select>
    </div>

    <section class="bigContainer">
      <Travel v-for="travel in filteredTravels['list']" :travel="travel" class="travel"></Travel>

      <div id="noVinery" style="display: none;">Aucun séjour n'a été trouvé pour ces paramètres.</div>
    </section>

  </div>


  <div id="container-addRoad-View" v-if="showComponent">
    <AddTravel id="addRoadView" />
    <button id="CloseAddRoadView" @click="showComponent = false">X</button>
  </div>



</template>

<style>
.sectionContainer {
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
}

.bigContainer {
  display: flex;
  flex-wrap: wrap;
  margin: 3vh 0 3vh 0;
  justify-content: space-around;
}

@media only screen and (max-width: 1024px) {
  .bigContainer {
    display: inline-flex;
    flex-direction: column;
    width: 100%;
  }

  .travel {
    width: 100%;
  }

}

.filtrecontainer {
  width: 80vw;
  display: flex;
  justify-content: space-around;
}

.filtrecontainer select {
  width: 100%;
  margin: 1rem;
  display: flex;
  padding: .25rem .75rem;
  border: 2px solid transparent;
  font-size: 1.1rem;
  background-color: #e1e8f0;
  align-items: center;
  border-radius: 6px;
  transition: all 100ms;
  cursor: pointer;
  text-decoration: none;
}


#container-addRoad-View {

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 80vh;
  background-color: rgba(255, 255, 255, 0.95);
  /* Optionnel : pour un fond semi-transparent */
  z-index: 9999;
  /* Un très grand nombre pour qu'il soit au-dessus de tout */
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
  display: flex;
  /* Utilisation de Flexbox */
  justify-content: center;
  /* Centre le contenu horizontalement */
  align-items: center;
  /* Centre le contenu verticalement */
  text-align: center;
  /* Assure que le texte est centré */
}
</style>
