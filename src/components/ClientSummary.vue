<script setup>
    import { storeDisplayError } from '@/stores/displayError';
    import { useClientsStore } from '@/stores/client.js'
    import AddClient from '@/components/AddClient.vue'
    import {ref} from 'vue'


    const props = defineProps({
        idclient : {
            type : Number,
            required: true
        },
        prenom : {
            type : String,
            required: true
        },
        nom : {
            type : String,
            required: true
        },
        mail : {
            type : String,
            required: false
        },
        date : {
            type : String,
            required: true
        },
    });

    const showComponent = ref(false);

    const clientsStore = useClientsStore()
    const displayError = storeDisplayError()


    async function deleteClient() {
        const result = await clientsStore.DelClient(props.idclient)
        displayError.display(result.error, result.title,result.description);
        if(!result.error) { router.push({name:"home"});}
    }

</script>

<template>
    
    <div id="container-addRoad-View" v-if="showComponent">
        <AddClient :idClient="idclient" :toEdit="true"></AddClient>
        <button class="button" id="CloseAddRoadView" @click="showComponent = false">x</button>
    </div>

    <div class="client">

        <div class="info-value">{{prenom}}  {{ nom }}</div>

        <div class="info-value">
            {{mail}} 
            <button id="send-email" class="clique" onclick="window.location.href = 'mailto:' + '{{mail}}'">
                <i class="fa-solid fa-paper-plane"></i>
            </button>
        </div>

        <div class="info-value">{{date}}</div>

        <div class="container-buttons">
            <button id="edit-button" class="clique" @click="showComponent = !showComponent">
                <i class="fa-regular fa-pen-to-square" ></i>
            </button>
            <p class="idclient">{{ idclient }}</p>
            <button id="delete-button" class="clique" @click="deleteClient">
                <i class="fa-solid fa-trash" ></i>
            </button> 
        </div>

    </div>

</template>

<style scoped>

.client {
    display: flex;
    flex-direction: column;
    padding : 10px;
    gap: 10px;
    width: 400px;
    height: 200px;
    background-color: #f5f5f5;
    border-radius: 10px;
    border: 2px solid transparent;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: border 0.3s ease, box-shadow 0.3s ease;
    justify-content: center;
    align-items: center;
}

.client:hover {
    border: 2px solid #333;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

#info-value {
    font-size: 3rem;
    text-align: center;
    color: #333;
}

.container-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
}

.container-buttons button {
    width: 50px;
    height: 50px;
    border: none;
    font-size: x-large;
    background: none;
}
.clique {
    cursor:pointer;
}

.idclient {
    width: 50px;
    margin: 0;
    padding: 0;
    text-align: center;
}



</style>
