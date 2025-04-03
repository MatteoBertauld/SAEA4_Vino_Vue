import { ref, computed, compile } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useWineCatStore = defineStore('wineCategories', () => {
  
  const list = ref ([])

  const urlBase = "https://localhost:7124/"

  axios.get(urlBase+"sejours/getsejours")
  .then(response => {
      list.value = response.data
      console.log(list)
  })
  


  const filteredList = computed(() => list.value.filter(s => s.idduree == -1))

  return { list, filteredList } 
})