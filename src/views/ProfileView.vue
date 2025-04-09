<script setup>

    import { onMounted,ref } from 'vue';
    import { storeDisplayError } from '@/stores/displayError';
    import router from "@/router";
    import { useClientsStore } from '@/stores/client';
    import { LoginStore } from '@/stores/login' 

    const displayError = storeDisplayError()
    const loginStore = LoginStore()
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
        // const reponse = await clientsStore.GetClientById(1)
        // client.value = reponse.data
    })

    async function edit() {
        console.log("edit")
        const result = await clientsStore.ModifieClient(client.value)
        displayError.display(result.error, result.title,result.description);
        if(!result.error) { location.reload();}
    }

    function logout(){
        loginStore.logOut();
        router.push({name:"home"});
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
<button @click="edit()">Modifier</button>
<button @click="logout()">Se déconnecter</button>

</div>

</template>

<style>

</style>