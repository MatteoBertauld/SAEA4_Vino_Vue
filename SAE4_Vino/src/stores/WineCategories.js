import { ref, computed, compile } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useWineCatStore = defineStore('wineCategories', () => {
  
  const list = ref ([])

  const urlBase = "https://a14vinotrip-fab8apb7c9aeergn.eastus-01.azurewebsites.net/api/"

  axios.get(urlBase+"sejours/getsejours")
  .then(response => {
      list.value = response.data
      console.log(list)
  })
  


  const filteredList = computed(() => list.value.filter(s => s.idduree == -1))

  return { list, filteredList } 
})