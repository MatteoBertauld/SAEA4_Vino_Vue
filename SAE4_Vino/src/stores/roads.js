import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

export const useRoadsStore = defineStore('roads', () => {
  // Déclaration de la liste des routes avec `ref`
  const list = ref ([])


  const urlBase = "https://localhost:7124/"

  axios.get(urlBase+"routedesvins/getroutedesvins")
  .then(response => {
      list.value = response.data
      console.log(list)
  })

  // Retourner les variables et fonctions nécessaires
  return { list };
});
