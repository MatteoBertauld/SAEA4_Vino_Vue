import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTravelsIDStore = defineStore('traveId', () => {
  
  // Déclare la liste des séjours
  const list = ref([])

  // URL de base de l'API
  const urlBase = "https://a14vinotrip-fab8apb7c9aeergn.eastus-01.azurewebsites.net/api/"


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

  // Retourne la fonction pour récupérer un séjour par ID et la liste des séjours
  return { getTravelById, list }
})
