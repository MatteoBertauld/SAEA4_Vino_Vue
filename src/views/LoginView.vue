<script setup>
    import { LoginStore } from '@/stores/login';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { storeDisplayError } from '@/stores/displayError';
    import { StatusCodes } from 'http-status-codes';

    const router = useRouter();

    const displayError = storeDisplayError()
    const loginStore = LoginStore()

    var loading = ref(false);

    var email = ref("aina.carpentier@vinotrip.fr");
    var password = ref('azeAZE&é\"123');  

    async function Connexion() {
        loading.value = true;
        const result = await loginStore.connexion(email.value,password.value);
        displayError.display(result.error, result.title,result.description);
        if(!result.error) { router.push({ name: 'home' });}
        loading.value = false;
    };

    var forgetPassword = ref(false);

</script>


<template>
    <div class="loader" v-if="loading"></div>
    <div id="big-container-login">
        <div id="container-login">    
            <div class="section" id="email">
                <label class="label">Email</label>
                <input class="input" type="text" v-model="email">
            </div>

            <div class="section" id="password">
                <label class="label">Mot de Passe</label>
                <input class="input" type="text" v-model="password">
            </div>

            <a class="link" @click="forgetPassword = !forgetPassword">Oublier votre mot de passe?</a>
            <button class="button" @click="Connexion">Se connecter</button>
        </div>
    
    
        <div id="container-forget-password" v-if="forgetPassword">
            <p>
                Problmème de connexion ?<br>

                Vérifier votre mail et votre mot de passe <br>

                ...<br>

                En cas de problème, contactez notre support à support@vinotrip.fr.
            </p>
        </div>
    </div>
    

    <p id="token">token: {{ loginStore.token }}</p>


</template>
  

<style>

    .loader {
        z-index: 9;
        position: fixed;
        bottom: 50px;
        right: 50px;
        border: 16px solid #f3f3f3; /* Couleur de fond */
        border-top: 16px solid #e23cf1; /* Couleur du logo de chargement */
        border-radius: 50%;
        width: 100px;
        height: 100px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    #token {
        word-wrap: break-word;
    }

    #forget-password-button {
        background : none;
        border : none;
    }

    #big-container-login {
        display: flex;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        grid-template-columns: 2fr 1fr;
        padding: 20px;
        gap: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #container-forget-password {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: solid 3px black;
        border-radius: 20px;
        padding: 4%;
        box-shadow: 5px 5px 10px black;
        background-color : rgb(219, 207, 207);
    }

    #container-login {
        width: 50vw;
        height: 100%;
        position : relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        border: solid 2px black;
        border-radius: 20px;
        padding: 4%;
        box-shadow: 5px 5px 10px black;
        background-color : rgb(241, 241, 241);
    }

    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
    }

    .link {
        color: blue;
    }

    .link:hover {
        cursor:pointer;
    }

    .input {
        padding: 5px;
        border-radius: 5px;
        font-size: x-large;
        width: 100%;
    }

    .label {
        font-size: x-large;
    }

    .button {
        padding: 5px;
        border-radius: 5px;
        font-size: x-large;
        cursor:pointer;
    }
  
</style>
  
