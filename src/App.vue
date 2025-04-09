<script setup>
import './assets/main.css';
import { RouterLink, RouterView } from 'vue-router';
import DisplayError from './components/DisplayError.vue';
//https://a14vinotrip-fab8apb7c9aeergn.eastus-01.azurewebsites.net/api/

import { storeDisplayError } from '@/stores/displayError';
import { LoginStore } from '@/stores/login';

const loginStore = LoginStore()
const displayError = storeDisplayError()

const isMenuOpen = false;

</script>

<template>
<header>
  <div id="header-container">
    <div id="header-logo-container">
      <RouterLink class="header-logo-link" to="/">
        <img id="header-logo-image" src="./assets/images/vinotrip.png" alt="">
      </RouterLink>
    </div>
    <button id="menu-toggle" @click="isMenuOpen = !isMenuOpen">☰</button>
    
    <nav id="header-topmenu">
      <RouterLink class="header-link" :to="loginStore.isAuthenticated ? '/profile' : '/login'">{{loginStore.isAuthenticated ? "Profil" : "Se connecter"}}</RouterLink>|
      <RouterLink class="header-link" to="/clients">Admin</RouterLink>|
      <RouterLink class="header-link" to="/aide">Aide</RouterLink>|
      
      <RouterLink class="header-link" to="/partenaires">Partenaires</RouterLink>
      <RouterLink class="header-link" to="/routedesvins">Route des vins</RouterLink>
      <RouterLink class="header-link" to="/travels">Sejours</RouterLink>
    </nav>
  </div>
</header>

<DisplayError v-if="displayError.info.display" />
<div id="app-container-router-view">
  <RouterView />
</div>


<footer>

  @COPYRIGHT

  <nav>
    <RouterLink class="footer-link" to="/mentions-legales">MENTIONS LÉGALES</RouterLink>
    <RouterLink class="footer-link" to="/politique">POLITIQUE DE CONFIDENTIALITÉ</RouterLink>
    <RouterLink class="footer-link" to="/conditions-vente">CONDITIONS GÉNÉRALES DE VENTE</RouterLink>
    <RouterLink class="footer-link" to="/aide">ASSISTANCE / FAQ</RouterLink>
  </nav>

</footer>
</template>

<style scoped>

#app-container-router-view {
  padding: 20px;
}

#menu-toggle {
  display: none;
}

#header-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position:relative;
  left: 0;
  top: 0;
  width: 100%;
  flex-direction: row;
  background-color: var(--background-white);
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content:space-evenly;
  border-bottom: solid 2px var(--border);
}

#header-topmenu {
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  margin-right: 30px;
  align-items: center;
  width: 100%;
}

#header-logo-image {
  height: 100%;
  width: fit-content;
  display: flex;
  justify-content: center; 
  align-items: center; 
  margin: auto; 
}

.header-link {
  text-decoration: none;
  padding: 10px 15px;
  display: block;
  color: var(--text-black);
  transition: color 0.3s ease, var(--text-black) 0.3s ease; 
  font-size: 1em;
}

.header-link:hover {
  padding: 10px 15px;
  text-decoration: underline;
  display: block;
  color: var(--button-hover-smooth);
  transition: color 0.3s ease, var(--button-hover-smooth) 0.3s ease; 
}

footer {
  background-color: var(--background-white);
  color: var(--text-dark); 
  padding: 20px; 
  text-align: center; 
  border-top: solid 2px var(--border);
  /* font-size: 14px;  */
}

footer nav {
  margin-top: 10px; 
}

footer nav .footer-link {
  color: var(--text-dark); 
  text-decoration: none; 
  margin: 0 10px; 
  font-size: 1em;
}

footer nav .footer-link:hover {
  text-decoration: underline; 
  color: var(--button-hover-hard); 
}


/* Responsive styles for mobile */
@media (max-width: 768px) {

  #menu-toggle {
    display: block;
  }

  #header-container {
    flex-direction: column; /* Empile les éléments verticalement */
    padding: 10px;
  }

  #header-topmenu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: var(--background-white);
    border: solid 1px var(--border);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px;
    gap: 5px;
  }

  .header-link {
    padding: 8px 10px; /* Réduit les marges pour les petits écrans */
    font-size: 14px; /* Réduit la taille de la police */
  }
}




</style>
