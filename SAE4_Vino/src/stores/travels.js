import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useTravelsStore = defineStore('travels', () => {
  
  const list = ref ([])
  const vineries = ref([])
  const locations = ref ([])
  const timespans = ref([])
  const urlBase = "https://localhost:7124/api/"

  async function load(){
    return new Promise( function(resolve) {
      axios.get(urlBase+"Sejours/GetSejours")
      .then(response => {
          resolve(response.data)
      })
  })}
  onMounted(async() =>{
    list.value = await load();
    list.value.forEach((travel) => {
      if (travel.idlocaliteNavigation != null && !locations.value.find(s => s.idlocalite == travel.idlocaliteNavigation.idlocalite)){
        locations.value.push(travel.idlocaliteNavigation)
      }
      if (!timespans.value.find(s => s.idduree == travel.idduree)){
        timespans.value.push(travel.iddureeNavigation)
      }
      if (!vineries.value.find(s => s.idcategorievignoble == travel.idcategorievignobleNavigation.idcategorievignoble)){
        vineries.value.push(travel.idcategorievignobleNavigation)
      }
    });
    timespans.value.sort();
    vineries.value.sort((a,b) => (a.libellecategorievignoble > b.libellecategorievignoble) ? 1 : ((b.libellecategorievignoble > a.libellecategorievignoble) ? -1 : 0));

  })

  return { list, vineries, timespans, locations } 
})
