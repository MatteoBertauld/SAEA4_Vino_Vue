<script setup>
    import ClientSummary from '@/components/ClientSummary.vue';
    import { ref,watch } from 'vue';
    import { useClientsStore } from '@/stores/client.js'
    import AddClient from '@/components/AddClient.vue'


    const loading = ref(false); 
    const searchQuery = ref('');
    const filteredClients = ref([]);    

    var clientsStore = useClientsStore();

    clientsStore.GetClients().then(() => {
        filterClients(); // Appeler la fonction de filtrage après le chargement des clients
    });

    function filterClients() {
        
        filteredClients.value = clientsStore.list.filter(client =>
            client.nomclient?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            client.prenomclient?.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    };

    watch(() => searchQuery.value, () => filterClients())
    watch(() => clientsStore.list, () => filterClients())
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
    <AddClient></AddClient>
    <button class="button-client" id="CloseAddClientView" @click="showComponent = false">x</button>
</div>

<div v-if="loading.value">Chargement...</div>

<div v-else id="clients">
    <h1 v-if="filteredClients.length === 0">Aucun résultat</h1>
    <ClientSummary v-for="client in filteredClients" :key="client.idclient" :idclient="client.idclient" :prenom="client.prenomclient" :nom="client.nomclient" :mail="client.emailclient" :date="client.datenaissanceclient"/>
</div>



  
</template>

<style scoped>

    #clients {
        margin-top: 2rem;
        flex-direction:row;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        gap: 2rem;
    }

</style>
