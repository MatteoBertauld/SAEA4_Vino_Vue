<script setup defer>
import Travel from '@/components/Travel.vue';

import { useTravelsStore } from '@/stores/travels';
import { ref, computed } from 'vue';
const travels = useTravelsStore();

const vineryFilter = ref(0);
const timespanFilter = ref(0)
const locationFilter =ref(0)

var currentVinery;
var locations;

const filteredTravels = computed(() => {
  let l = travels.list;

  if (!vineryFilter.value == 0){
    l = l.filter(
    s => s.idcategorievignoble == vineryFilter.value
    )
  }
  locations = []

  l.forEach(travel => {
    if (travel.idlocaliteNavigation != null && !locations.find(l => l.idlocalite == travel.idlocaliteNavigation.idlocalite)){
      locations.push(travel.idlocaliteNavigation)
    }
  });
  
  if (!locationFilter.value == 0){
    l = l.filter(
    s => s.idlocalite == locationFilter.value
  )}
  if (!timespanFilter.value == 0){
    l = l.filter(
    s => s.idduree == timespanFilter.value
  )}
  return l;
})


</script>

<template>
  <div class="sectionContainer">

    <div class="filtrecontainer">
      <select name="" id="vineryFilter" v-model="vineryFilter">
        <option :value="0">Quel vignoble ? </option>
        <option v-for="vinery in travels.vineries" :value="vinery.idcategorievignoble"> {{ vinery.libellecategorievignoble }} </option>
      </select>
      <select v-if="true" v-model="locationFilter" name="" id="forWhoFilter">
        <option :value="0" >Localité ? </option>
        <option v-for="location in locations" :value="location.idlocalite"> {{ location.libellelocalite }}</option>
      </select>
      <select name="" id="timeFilter" v-model="timespanFilter">
        <option :value="0">Durée ? </option>
        <option v-for="timespan in travels.timespans" :value="timespan.idduree"> {{ timespan.libelleduree }}</option>
      </select>
      <select name="" id="desireFilter">
        <option value="default">Pour qui ? </option>
        <!-- <option v-for="vinery in vinerys.list" value=""></option> -->
      </select>
      <select name="" id="desireFilter">
        <option value="default">Une envie particulière ? </option>
        <!-- <option v-for="vinery in vinerys.list" value=""></option> -->
      </select>
    </div>
    <section class="bigContainer">
      <Travel v-for="travel in filteredTravels" :travel="travel"></Travel>
    </section>
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
  margin: 100px 0 100px 0;
  justify-content: space-around;
}

.filtrecontainer {
  width: 80vw;
  display: flex;
  justify-content: space-around;
}

.filtrecontainer select {
  min-width: 200px;
  width: 15vw;
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
</style>
