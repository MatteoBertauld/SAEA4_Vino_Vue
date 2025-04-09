import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { LoginStore } from '@/stores/login';


export const useTravelsStore = defineStore('travels', () => {
  
  const urlBase = "https://a14vinotrip-fab8apb7c9aeergn.eastus-01.azurewebsites.net/api/"
  const list = ref ([])
  const vineries = ref([])
  const locations = ref ([])
  const timespans = ref([])
  const targets = ref([])
  const themes = ref([])

  const loginStore = LoginStore()


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
      if (travel.idlocaliteNavigation != null && !locations.value.find(l => l.idlocalite == travel.idlocaliteNavigation.idlocalite)){
        locations.value.push(travel.idlocaliteNavigation)
      }
      if (!timespans.value.find(t => t.idduree == travel.idduree)){
        timespans.value.push(travel.iddureeNavigation)
      }
      if (!vineries.value.find(v => v.idcategorievignoble == travel.idcategorievignobleNavigation.idcategorievignoble)){
        vineries.value.push(travel.idcategorievignobleNavigation)
      }
      if (!targets.value.find(t => t.idcategorieparticipant == travel.idcategorieparticipantNavigation.idcategorieparticipant)){
        targets.value.push(travel.idcategorieparticipantNavigation)
      }
      if (!themes.value.find(t => t.idtheme == travel.idthemeNavigation.idtheme)){
        themes.value.push(travel.idthemeNavigation)
      }
    });

    // Alphabetic sort
    timespans.value.sort((a,b) => (a.libelleduree > b.libelleduree) ? 1 : ((b.libelleduree > a.libelleduree) ? -1 : 0));
    vineries.value.sort((a,b) => (a.libellecategorievignoble > b.libellecategorievignoble) ? 1 : ((b.libellecategorievignoble > a.libellecategorievignoble) ? -1 : 0));
    targets.value.sort((a,b) => (a.libellecategorieparticipant > b.libellecategorieparticipant) ? 1 : ((b.libellecategorieparticipant > a.libellecategorieparticipant) ? -1 : 0));
    themes.value.sort((a,b) => (a.libelletheme > b.libelletheme) ? 1 : ((b.libelletheme > a.libelletheme) ? -1 : 0));
  });



  async function getTravelById(id) {
    return new Promise( function(resolve) {
      axios.get(urlBase+`Sejours/GetSejourById/${id}`)
      .then(response => {
          resolve(response.data)
      })
  })}
  
  async function addTravel(travel) {
    
    axios.post(urlBase+"Sejours/PostSejour",travel ,{headers: {
      "Authorization" : `Bearer ${loginStore.token}`
    }})
      .then(async(response) => {
        
        list.value.push(await getTravelById(response.data.idsejour));
      }).catch(error =>{
        console.log(error)
      })
    
  }

  async function putTravel(id, updatedTravel) {
    try {
      const response = await axios.put(urlBase + `Sejours/PutSejour/${id}`, updatedTravel, {
        headers: {
          "Authorization": `Bearer ${loginStore.token}`
        }
      });
  
      const index = list.value.findIndex(travel => travel.idsejour === id);
      if (index !== -1) {
        list.value[index] = await getTravelById(id);  
      }
  
      console.log("Travel updated successfully", response.data);
    } catch (error) {
      console.error("Error updating travel:", error);
    }
  }

  async function deleteTravel(id) {

    const response = await axios.delete(urlBase + `Sejours/DeleteSejour/${id}`, {
        headers: {
          "Authorization": `Bearer ${loginStore.token}`
        }
      })
      .then(()=>{

        window.location.href = '/travels';
        console.log('Séjour supprimé avec succès');
      }
    )
    .catch(error => {
        console.error('Erreur lors de la suppression du séjour', error);
    });
    }
     

  return { list, vineries, timespans, locations, targets, themes, addTravel, getTravelById, load, putTravel, deleteTravel } 

})
