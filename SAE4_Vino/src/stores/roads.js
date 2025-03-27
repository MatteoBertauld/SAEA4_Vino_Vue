import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

export const useRoadsStore = defineStore('roads', () => {
  // Déclaration de la liste des routes avec `ref`
  const list = ref ([])


  const urlBase = "https://a14vinotrip-fab8apb7c9aeergn.eastus-01.azurewebsites.net/api/"

  axios.get(urlBase+"routedesvins/getroutedesvins")
  .then(response => {
      list.value = response.data
      console.log(list)
  })

  // Retourner les variables et fonctions nécessaires
  return { list };
});
