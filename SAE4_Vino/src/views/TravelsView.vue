<script setup>
import Travel from '@/components/Travel.vue';

import { useTravelsStore } from '@/stores/travels';
const travels = useTravelsStore();
</script>

<template>
  <div class="sectionContainer">

    <div class="filtrecontainer">
      <select name="" id="vineryFilter">
        <option value="default">Quel vignoble ? </option>
        <!-- <option v-for="vinery in vinerys.list" value=""></option> -->
      </select>
      <select name="" id="timeFilter">
        <option value="default">Localité ? </option>
        <!-- <option v-for="vinery in vinerys.list" value=""></option> -->
      </select>
      <select name="" id="forWhoFilter">
        <option value="default">Durée ? </option>
        <!-- <option v-for="vinery in vinerys.list" value=""></option> -->
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
    <Travel v-for="travel in travels.list" :travel="travel"></Travel>
  </section>
</div>
  
</template>

<style>

.sectionContainer{
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
}
.bigContainer{
  display: flex;
  flex-wrap: wrap;
  margin: 100px 0 100px 0;
  justify-content: space-around;
}

.filtrecontainer{
  width: 80vw;
  display: flex;
  justify-content: space-around;
}

.filtrecontainer select{
  min-width:200px ;
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
