import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { LoginStore } from './login'



export const usePartenairesStore = defineStore('partenaires', () => {

    const urlBase = "https://a14vinotrip-fab8apb7c9aeergn.eastus-01.azurewebsites.net/api/"
    const list = ref([])
    const hotel = ref([])
    const restaurant = ref([])
    const cave = ref([])
    const autresociete = ref([])
    const tous = ref([])

    const loginStore = LoginStore()

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

    async function getPartenaireById(id) {
        console.log("id renvoyé",id)
    try {
      console.log("succès id")
      return await axios.get(`${urlBase}partenaire/getpartenairebyid/${id}`)
    } catch (error) {
        console.error("Erreur lors de la récupération du partenaire : ",id, error)
        return false;
    }}

    async function addPartenaire(partenaire) {
        axios.post(urlBase+"Partenaire/PostPartenaire",partenaire ,{headers: {
            "Authorization" : `Bearer ${loginStore.token}`
          }})
            .then(async(response) => {
              
              list.value.push(await getPartenaireById(response.data.idpartenaire));
            }).catch(error =>{
              console.log(error)
            })
      // Retourne la fonction pour récupérer un séjour par ID et la liste des séjours
      }


    return { list, hotel, restaurant, cave, autresociete, tous, addPartenaire, getPartenaireById }
})
