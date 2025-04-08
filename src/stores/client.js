import { defineStore } from 'pinia';
import { computed, ref,watch} from 'vue';
import { LoginStore } from '@/stores/login';
import { StatusCodes } from 'http-status-codes';
// import { ListEnd } from 'lucide-vue-next';


export const useClientsStore = defineStore('clients', () => {
  // Déclaration de la liste des routes avec `ref`
  const list = ref([])
  const loginStore = LoginStore()
  const urlBase = "https://a14vinotrip-fab8apb7c9aeergn.eastus-01.azurewebsites.net/api/"
  
  GetClients();

  // Permission admin pour les voir tout les clients
  async function GetClients() {
    if(loginStore.isAuthenticated) {
      try {
        var chaine = urlBase+"clients/getclients"
        var axiosInstance = loginStore.axiosWithToken()
        const response = await axiosInstance.get(chaine);
        list.value = response.data;
        console.log("succès",list.value[0])  
      }
      catch(error) {
        console.log("erreur lors du chargements des données clients", error)
      }
    }
  }

   // Permission admin pour les voir tout les clients
   async function GetClientById(idclient) {
    if(loginStore.isAuthenticated) {
      try {
        var chaine = urlBase+"clients/getclientbyid/" + idclient
        var axiosInstance = loginStore.axiosWithToken()
        return await axiosInstance.get(chaine);
      }
      catch(error) {
        console.log("erreur lors du chargements des données clients", error)
      }
    }
  }


  async function ModifieClient(client) {
    var chaine = "clients/putclient/"+ client.idclient;
    var axiosInstance = loginStore.axiosWithToken()

    try {
      await axiosInstance.put(chaine,client)

      return {
        error: false,
        title: "Succès",
        description: `Le client : ${ client.prenomclient}  ${ client.nomclient} a été modifié avec succès.`,
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

  

  async function AddClient(client) {
    var chaine = "clients/postclient";
    var axiosInstance = loginStore.axiosWithToken()

    if(client == null) {
      return {
        error: true,
        title: "Action Impossible",
        description: "Erreur objet invalide.",
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR
      };
    }

    try {
      const response = await axiosInstance.post(chaine,client)
      client.idroute = response.data.idroute
      list.value.push(travel);

      return {
        error: false,
        title: "Succès",
        description: `Le client : ${ client.prenomclient}  ${ client.nomclient} a été ajouté avec succès.`,
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

  async function DelClient(idclient) {
    if(idclient == null || idclient <=0) {
      return {
        error: true,
        title: "Action Impossible",
        description: "l'Objet est probablement déja supprimé.",
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR
      };
    }

    var chaine = "clients/deleteclient/"+ idclient;
    var axiosInstance = loginStore.axiosWithToken()

    try {
      const response = await axiosInstance.delete(chaine);
      // const index = list.findIndex(item => item.idroute === idroute);
      // if (index !== -1) {list.splice(index, 1);}
      return {
        error: false,
        title: "Succès",
        description: `Le client : ${ client.prenomclient}  ${ client.nomclient} a été supprimé avec succès.`,
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
    

  return { list,ModifieClient,AddClient,DelClient,GetClientById };
});
