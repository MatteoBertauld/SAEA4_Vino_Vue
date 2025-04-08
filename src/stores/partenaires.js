import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'



export const usePartenairesStore = defineStore('partenaires', () => {

    const urlBase = "https://a14vinotrip-fab8apb7c9aeergn.eastus-01.azurewebsites.net/api/"
    const list = ref([])
    const hotel = ref([])
    const restaurant = ref([])
    const cave = ref([])
    const autresociete = ref([])
    const tous = ref([])

    async function load() {
        return new Promise(function (resolve) {
            axios.get(urlBase + "partenaires/getpartenaires")
                .then(response => {
                    resolve(response.data)
                })
        })
    }

    onMounted(async () => {
        list.value = await load();
        list.value.forEach((partenaire) => {
            if (partenaire.hotel != null) {
                hotel.value.push(partenaire)
            }

            if (partenaire.restaurant != null) {
                restaurant.value.push(partenaire)
            }

            if (partenaire.cave != null) {
                cave.value.push(partenaire)
            }

            if (partenaire.autresociete != null) {
                autresociete.value.push(partenaire)
            }
            tous.value.push(partenaire)
        });
    });
    return { list, hotel, restaurant, cave, autresociete, tous }
})
