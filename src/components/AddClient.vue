<script setup>
    import { onMounted,ref } from 'vue';
    import { storeDisplayError } from '@/stores/displayError';
    import router from "@/router";

    const displayError = storeDisplayError()

    const props = defineProps({

        idClient : {
            type: Number,
            required: false,
        },
        toEdit: {
            type:Boolean,
            required: false,
            default: () => (false)
        }
    });

    import { useClientsStore } from '@/stores/client';

    const clientsStore = useClientsStore();

    const client = ref(
        {
            civiliteclient: "M",
            prenomclient: "",
            nomclient: "",
            emailclient: "",
            datenaissanceclient: "",
            motdepasseclient: "",
            a2f: false,
            telephoneclient: "",
            roleclient: "Client",
            adresses: [],
            datederniereactiviteclient: "",
        }
    );

    onMounted(async () => {
        if(props.idClient) {
            const reponse = await clientsStore.GetClientById(props.idClient)
            client.value = reponse.data
        }
    })


    async function add() {
        console.log("add")
        const result = await clientsStore.AddClient(client.value)
        displayError.display(result.error, result.title,result.description);
        if(!result.error) { location.reload();}
    }

    async function edit() {
        console.log("edit")
        const result = await clientsStore.ModifieClient(client.value)
        displayError.display(result.error, result.title,result.description);
        if(!result.error) { location.reload();}
    }

</script>

<template>

<div class="container-addclient">

    <h2>Détails du client</h2>

    <div class="container-line">
        <div class="detail">
            <label>Nom:</label>
            <input type="text" v-model="client.nomclient">
        </div>
        <div class="detail">
            <label>Prenom:</label>
            <input type="text" v-model="client.prenomclient">
        </div>
        <div class="detail">
            <label>Date de naissance:</label>
            <input type="text" v-model="client.datenaissanceclient">
        </div>
    </div>

    <hr>

    <h2>Contact</h2>

    <div class="container-line">
        <div class="detail">
            <label>Email:</label>
            <input type="text" v-model="client.emailclient">
        </div>
        <div class="detail">
            <label>Téléphone:</label>
            <input type="text" v-model="client.telephoneclient">
        </div>
    </div>
    

    <hr>

    <h2>Vos addresse(s)</h2>

    <div v-for="addresse in client.adresses">
       
        <div class="detail">
            <label>Nom de l'addresse:</label>
            <input type="text" v-model="addresse.nomadresse">
        </div>

        <div class="container-line">
            <div class="detail">
                <label>Rue :</label>
                <input type="text" v-model="addresse.rueadresse">
            </div>
            <div class="detail">
                <label>Ville :</label>
                <input type="text" v-model="addresse.villeadresse">
            </div>
            <div class="detail">
                <label> Pays :</label>
                <input type="text" v-model="addresse.paysadresse">
            </div>
        </div>
    </div>

    <hr>

    <h2>Sécurité</h2>

    <div class="container-line">
        <div class="detail">
            <label>Dernière activité:</label>
            <input type="text" v-model="client.datederniereactiviteclient">
        </div>
        
        <div class="detail">
            <label>Rôle:</label>
            <input type="text" v-model="client.roleclient">
        </div>
        <button @click="client.a2f = !client.a2f">
            {{ client.a2f? 'Activé la double authentification A2F' : 'Désactivé la double authentification A2F' }}
        </button>
    </div>

    <hr>
    <button @click="toEdit? edit() : add()">{{ toEdit? "Modifier" : "Ajouter" }}</button>
    
</div>

</template>


<style>

    /* Conteneur principal */
    .container-addclient {
        display: flex;
        flex-direction: column;
        border: 2px solid transparent;
        border-radius: 6px;
        transition: border 100ms;
        height: 100%;
        margin : 1rem;
        overflow-y:auto;
        box-sizing: border-box;

        font-family: 'Arial', sans-serif;
        color: #333;
        line-height: 1.6;
    }

    /* Titres principaux */
    .container-addclient h2 {
        font-size: 24px;
        color: #2c3e50;
        width: 80%;
    }

    /* Conteneur pour les sections de noms (nom et prénom) */
    .container-line {
        display: flex;
        gap: 40px;
    }

    /* Détail d'un élément (label + valeur) */
    .detail {
        margin-bottom: 15px;
    }

    .detail label {
        font-weight: bold;
        color: #555;
        display: block;
        margin-bottom: 5px;
    }

    .detail p {
        font-size: 16px;
        color: #777;
    }

    .detail .data {
        font-weight: normal;
        color: #333;
    }

    /* Sections séparées par des lignes */
    .container-addclient hr {
        border: 1px solid #e1e1e1;
        margin: 30px 0;
    }

    /* Section bouton */
    .container-addclient button {
        background-color: #3498db;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        margin-bottom: 20px;
    }

    b.container-addclient utton:hover {
        background-color: #2980b9;
    }

    /* Bouton "Modifier" */
    .container-addclient .button a {
        text-decoration: none;
        padding: 12px 25px;
        background-color: #2ecc71;
        color: white;
        border-radius: 5px;
        font-size: 16px;
    }

    .button a:hover {
        background-color: #27ae60;
    }


    





</style>