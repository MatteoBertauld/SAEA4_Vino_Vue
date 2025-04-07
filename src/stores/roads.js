import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';
import { LoginStore } from '@/stores/login';
import { StatusCodes } from 'http-status-codes';


export const useRoadsStore = defineStore('roads', () => {
  // Déclaration de la liste des routes avec `ref`
  const list = ref ([])
  const loginStore = LoginStore()
  const urlBase = "https://a14vinotrip-fab8apb7c9aeergn.eastus-01.azurewebsites.net/api/"

  axios.get(urlBase+"routedesvins/getroutedesvins")
  .then(response => {
      list.value = response.data
  })

  async function ModifieRoad(travel) {
    
    var chaine = "routedesvins/PutRoutedesVin/"+ travel.idroute;
    var axiosInstance = loginStore.axiosWithToken()

    try {
      await axiosInstance.put(chaine,travel)

      return {
        error: false,
        title: "Succès",
        description: `La route des vins : ${travel.titreroute} a été modifié avec succès.`,
        statusCode: StatusCodes.ACCEPTED
      };
    } catch (error) {
      
      console.log(error)
      switch (error.status) {
        case 401:
          return {
            error: true,
            title: "Non autorisé",
            description: "Token d'authentification manquant ou invalide.",
            statusCode: StatusCodes.UNAUTHORIZED
          };
        case 400:
          return {
            error: true,
            title: "Requete incorrect",
            description: "Les valeurs saisies sont incorrect.",
            statusCode: StatusCodes.BAD_REQUEST
          };
        default:
          return {
            error: true,
            title: "Erreur serveur",
            description: "voir la console pour plus de détail",
            statusCode: StatusCodes.INTERNAL_SERVER_ERROR
          };
      }

    }
  };

  

  async function AddRoad(travel) {
    var chaine = "routedesvins/PostRoutedesVin";
    var axiosInstance = loginStore.axiosWithToken()

    if(travel == null) {
      return {
        error: true,
        title: "Action Impossible",
        description: "Erreur objet invalide.",
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR
      };
    }

    try {
      const response = await axiosInstance.post(chaine,travel)
      travel.idroute = response.data.idroute
      list.value.push(travel);

      return {
        error: false,
        title: "Succès",
        description: `La route des vins : ${travel.titreroute} a été ajouté avec succès.`,
        statusCode: StatusCodes.ACCEPTED
      };
    } catch (error) {
      
      console.log(error)
      switch (error.status) {
        case 401:
          return {
            error: true,
            title: "Non autorisé",
            description: "Token d'authentification manquant ou invalide.",
            statusCode: StatusCodes.UNAUTHORIZED
          };
        case 400:
          return {
            error: true,
            title: "Requete incorrect",
            description: "Les valeurs saisies sont incorrect.",
            statusCode: StatusCodes.BAD_REQUEST
          };
        default:
          return {
            error: true,
            title: "Erreur serveur",
            description: "voir la console pour plus de détail",
            statusCode: StatusCodes.INTERNAL_SERVER_ERROR
          };
      }
    }
    
  };

  async function DelRoad(idroute) {
    if(idroute == null || idroute <=0) {
      return {
        error: true,
        title: "Action Impossible",
        description: "l'Objet est probablement déja supprimé.",
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR
      };
    }

    var chaine = "routedesvins/DeleteRouteDesVin/"+ idroute;
    var axiosInstance = loginStore.axiosWithToken()

    try {
      const response = await axiosInstance.delete(chaine);
      // const index = list.value.findIndex(item => item.idroute === idroute);
      // if (index !== -1) {list.value.splice(index, 1);}
      return {
        error: false,
        title: "Succès",
        description: `La route des vins avec l'ID ${idroute} a été supprimée avec succès.`,
        statusCode: StatusCodes.ACCEPTED
      };
    } catch (error) {
      
      if (error.status === 401) {
        return {
          error: true,
          title: "Non autorisé",
          description: "Token d'authentification manquant ou invalide.",
          statusCode: StatusCodes.UNAUTHORIZED
        };
      } 
      else {
        return {
          error: true,
          title: "Erreur interne du serveur",
          description: "Une erreur est survenue sur le serveur lors de la suppression de la route.",
          statusCode: StatusCodes.INTERNAL_SERVER_ERROR
        };
      }
    }
  }
    

  return { list,ModifieRoad,AddRoad,DelRoad };
});
