<script setup>
    import ClientSummary from '@/components/ClientSummary.vue';
    import { ref,computed } from 'vue';
    import { useClientsStore } from '@/stores/client.js'

    const clients = useClientsStore();
    
    const filteredClients = computed(() => {
        return clients.list?.filter(client =>
            client.nomclient?.toLowerCase().includes(searchQuery.value.toLowerCase()) || client.prenomclient?.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });

    const searchQuery = "";
    const showComponent = ref(false);

</script>





<template>


<h1 id="titre">Tous les utilisateurs</h1>

<div id="line-container">
    <div class="search-container">
        <input type="text" v-model="searchQuery" class="search-input" placeholder="Rechercher...">
        <button class="search-btn">🔍</button>
    </div>
    <button class="button-client" id="addClient" @click="showComponent = !showComponent">{{ showComponent ? '-' : '+' }}</button>
</div>




<!-- Utilisation de v-if pour afficher le composant lorsque showComponent est vrai -->
<div id="container-addRoad-View" v-if="showComponent">
    <button class="button-client" id="CloseAddClientView" @click="showComponent = false">x</button>
</div>


<div id="routes">
    <h1 v-if="filteredClients?.length === 0">Aucun résultat</h1>
    <ClientSummary v-for="client in filteredClients" :key="client.idclient" :client="client"/>
</div>

  
</template>

<style scoped>

:root {
  --background-white: #e6e9ef;
  --background-light: #d1d2d3;
  --background-dark: #470023;
  --background-black: #2c0015;
  --border: #2c0015;
  --text-white: hsl(0, 0%, 90%);
  --text-light: hsl(0, 0%, 75%);
  --text-medium: hsl(0, 0%, 50%);
  --text-dark: hsl(0, 0%, 25%);
  --text-black: hsl(0, 0%, 10%);
  --text-hover-light: #e0509d;
  --text-hover-dark: #a13f3f;
  --text-red: #ff1616;
  --button: #80325c;
  --button-light: #e0509d;
  --button-hover-smooth: #a13f73;
  --button-hover-hard: #470023;
  --ligne: #80325c;
}




#container_sejour {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content:center;
    gap: 3vw;
    flex-wrap:nowrap;
}

#container_price_day {
    width: 70%;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrer horizontalement */
    justify-content: center; /* Centrer les éléments verticalement à l'intérieur */
}



#container_left {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#container_right {
    width: 30%;
}

#container_right_fixe {
    overflow: visible;
    position:sticky;
    top: 40px;
    display: flex;
    flex-direction: column; /* Disposition en colonne */
    align-items: center; /* Centrer horizontalement */
    justify-content: center; /* Centrer les éléments verticalement à l'intérieur */
}
#container_right_information {
    background-color: var(--background-dark);
    margin-bottom: 10px;
    border: solid 1px;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column; /* Disposition en colonne */
    align-items: center; /* Centrer horizontalement */
    justify-content: center; /* Centrer les éléments verticalement à l'intérieur */

    h1,h3,p {
        color: var(--text-white);
    }
}

#details {
    margin-bottom: 15px;
}

#container_button_right {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}


#container_button_left {
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    margin: 20px 0;
}

#image_travel {
    height: 600px;
    object-fit:cover;
}

.button-programme {
    background-color: var(--button);
    color: var(--text-white);
    width: 24%;
    display: block;
    text-align: center;
    border-radius: 10px;
    padding: 10px;
    border: solid 1px var(--border); 
}

.button-programme:hover {
    background-color: var(--button-hover-hard);
}

.hr_etape {
    border: none; 
    height: 2px;
    background-color: var(--border);
    margin: 10px 0;
}

.button-acheter {
    width: 100%;
    display: block;
    color: #f7f7f5;
    text-align: center;
    text-transform: uppercase;
    font-size: 1rem;
    padding: 15px 0;
    border-radius: 10px;
    margin-bottom: 5px;
    border: solid 2px;
}

#jours {
    margin-top: 10px;
    align-self: flex-start;
}

#price {
    margin-bottom: 10px;
}

.container_etape {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-evenly;
    width: 100%;
    margin-bottom: 20px;
}

.image-section {
    width: 40%;
}

.img-etape {
    height: 200px;
    width: 100%;
    min-width: 100px;
    object-fit: cover;
    border-radius: 10px;
    border: solid 1px;
}

.info-section {
    width: 55%;
}
.titre_info {
    align-self: left;
    margin-bottom: 20px;
    margin-left: 15px;
    margin-top: 10px;
}

.avis_afficher {
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.button-description {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-bottom: 10px;
    align-items: center;
}

#help,#Avis {
    padding: 15px;
}

#help {
    p,li {
        font-size: 0.9em;
        color: var(--text-black);
    }
}

</style>
