import { ref,computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { StatusCodes } from 'http-status-codes';

export const LoginStore = defineStore('logins', () => {
  
  const urlBase = "https://a14vinotrip-fab8apb7c9aeergn.eastus-01.azurewebsites.net/api/";
  const token = ref(getToken());
  const user = ref({mail:null});

  const isAuthenticated = computed(() => !!token.value);

  function getToken() {
    return localStorage.getItem('token');
  }

  function setToken(token) {
    localStorage.setItem('token', token);
  }

  function removeToken() {
    localStorage.removeItem('token');
  }
    


  async function connexion(email,password) {
    try {
      const response = await axios.post(urlBase + 'login', {
        emailClient: email,
        motdepasseclient: password
      });

      setToken(response.data.token);
      user.value = { mail: email };
      console.log("votre token de connexion\n"+token.value)
      return {
        error: false,
        title: "Connexion réussi",
        description: "redirection sur la page home",
        statusCode: StatusCodes.ACCEPTED
      };

    } catch (error) {
      console.log(error)
      return {
          error: true,
          title: "Connexion Impossible",
          description: "Email ou mot de passe invalide.",
          statusCode: StatusCodes.UNAUTHORIZED
        }; 
    }
  };

  function logOut () {
    user.value = null;
    removeToken(); 
  }

  const axiosWithToken = (endpoint = '') => {

    if(!isAuthenticated) {
      return Promise.reject(error);
    };

    const apiClient = axios.create({
      baseURL: `${urlBase}${endpoint}`,
    });
  
    apiClient.interceptors.request.use(config => {
      if (token.value) {
        config.headers.Authorization = `Bearer ${token.value}`;
      }
      return config;
    }, error => {
      return Promise.reject(error);
    });
  
    return apiClient;
  };


  

  return { token,user,isAuthenticated,logOut, connexion,axiosWithToken } 
});
