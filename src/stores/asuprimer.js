import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { LoginStore } from '@/stores/login';

export const useTravelsIDStore = defineStore('travelsId', () => {
  
  const loginStore = LoginStore()
  const list = ref([])



  function getTravelById(id) {
    console.log(id)
    try {
        return axios.get(`${urlBase}sejours/getsejourbyid/${id}`)
    .then(response => {
        list.value = response.data})
    } catch (error) {
        console.error("Erreur lors de la récupération du séjour : ",id, error)
    }
  }

  async function addTravel(travel) {
    var chaine = "sejours/PostSejour"+ travel.value;
    var axiosInstance = loginStore.axiosWithToken()

    try {
      await axiosInstance.post(chaine,travel)
    // return axios.post(`${urlBase}sejours/PostSejour`,travel.value)

    }catch(error){console.log(error)}

  // Retourne la fonction pour récupérer un séjour par ID et la liste des séjours
  }
  return { getTravelById, list,addTravel }
});
