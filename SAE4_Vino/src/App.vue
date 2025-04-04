<script setup>
import { RouterLink, RouterView } from 'vue-router'
//https://a14vinotrip-fab8apb7c9aeergn.eastus-01.azurewebsites.net/api/
</script>

<template>
<div class="headerContainer">
  <header class="semibold">
    <div class="wrapper">
      <div class="leftMargin">
        <RouterLink class="logo" to="/">
          <img src="./assets/images/vinotrip.png" alt="">
          <p class="underlogo colorVino">Créateurs de séjours oenotouristique</p>
        </RouterLink>
      </div>
      
      <nav class="colorVino topmenu">
        <RouterLink class="leftMargin link colorVino" to="/">HOME</RouterLink>|
        <RouterLink class="leftMargin link colorVino" to="/travels">TOUS NOS SEJOURS</RouterLink>|
        <RouterLink class="leftMargin link colorVino" to="/routedesvins">ROUTE DES VINS</RouterLink>|
        <RouterLink class="leftMargin link colorVino" to="/aide">AIDE</RouterLink>
      </nav>
    </div>
  </header>
</div>
  
<RouterView  />

<footer>

  @COPYRIGHT

  <nav>
    <RouterLink class="semibold leftMargin link footerlink" to="/mentions-legales">MENTIONS LÉGALES</RouterLink>
    <RouterLink class="semibold leftMargin link footerlink" to="/politique">POLITIQUE DE CONFIDENTIALITÉ</RouterLink>
    <RouterLink class="semibold leftMargin link footerlink" to="/conditions-vente">CONDITIONS GÉNÉRALES DE VENTE</RouterLink>
    <RouterLink class="semibold leftMargin link footerlink" to="/aide">ASSISTANCE / FAQ</RouterLink>
  </nav>

</footer>
</template>

<style scoped>



/*************************************************HEADER*******/

header{
  position: fixed;
  padding: 2vh;
  width: 100%;
  background-color: #f0eeec;
  z-index: 5;
  border-bottom: 0.3rem solid #bd0162;
}

.headerContainer{
  height: 6.25rem;
}
.mainpage{
  min-height: 100vh;
}

.topmenu{
  right: 0;
}

.wrapper{
  display:flex;
  right: 0px;
  justify-content: space-between; /* Espace entre les éléments */
}

.leftMargin{
    margin: 0 3vw;
}


/*************************************************DISPLAY*******/
.colorVino{
  color: rgba(135,6,76,255);
}
.topmenu .link:hover{
  color:rgb(255, 0, 200);
}
nav{
  margin: 15px;
}


/*************************************************TEXT*******/

.link{
  text-decoration:none ;
}
.link:hover{
  text-decoration: underline;
}
.semibold{
  font-weight: 600;
}

/*************************************************LOGO*******/


.logo {
  text-decoration: none; /* Supprime le soulignement */
}

.logo:hover {
  text-decoration: none; /* Assure qu'il ne soit pas souligné même au survol */
}

/*************************************************UNDERLOGO*******/

.underlogo{
  font-size: 10px;
  font-weight: 400;
  margin: -15px 0 0 95px;
}


/*************************************************FOOTER*******/

footer{
  background-color:rgb(40,28,28);  
  color: white;
  height: 10vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

footer nav{
  justify-content: center;

  display: flex;
  flex-direction:row;
  margin: 4vh;
}

.footerlink{
  color: white;
}
</style>
