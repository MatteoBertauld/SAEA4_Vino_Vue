import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useTravelsStore = defineStore('travels', () => {
  
  const list = ref ([])


  const urlBase = "https://a14vinotrip-fab8apb7c9aeergn.eastus-01.azurewebsites.net/api/"

  axios.get(urlBase+"sejours/getsejours")
  .then(response => {
      list.value = response.data
  })
  
  

  return { list } 
})
