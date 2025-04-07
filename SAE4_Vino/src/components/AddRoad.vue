<script setup>
    import { ref } from "vue";
    import { useRoadsStore } from '@/stores/roads.js';
    import router from "@/router";
    import axios from "axios";

    const props = defineProps({

        newRoad : {
            type: Object,  // Spécifie le type attendu pour la prop
            required: false,
            default: () => ({ 
                idroute : 20 ,
                titreroute : "Title" ,
                descriptionroute : "desc",
                photoroute : "NOIMAGE.jpg",
                idcategorievignobles : []
            })
        },
        toEdit: {
            type:Boolean,
            required: false,
            default: () => (false)
        }
    });

    const roads = useRoadsStore()


    async function add() {
        console.log("test")
        try {
            const response = await axios.post('https://a14vinotrip-fab8apb7c9aeergn.eastus-01.azurewebsites.net/api/routedesvins/postroutedesvin', newRoad);

            roads.add(newRoad)
            router.push({name:"routedesvins"})
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'objet', error);
        }
    }

    function edit() {
        //
    }


    function preview() {
        const fileInput = document.getElementById("input-preview")
        fileInput.click();
    }

    function changeFile(event) {
        const file = event.target.files[0]; // Le fichier sélectionné

        // Vérifie si un fichier est sélectionné
        if (file) {
            const preview = event.target.closest('.parent').querySelector('img');
            console.log("preview",preview)
            const reader = new FileReader();

            // Lorsque le fichier est lu, mettre à jour l'élément <img> avec l'URL de données
            reader.onload = function(e) {
                preview.src = e.target.result; // Met à jour la source de l'image
                props.newRoad.photoroute = e.target.result;
                console.log(preview.src)
            };

            // Lire le fichier comme URL de données (Base64)
            reader.readAsDataURL(file);
        }
    };
</script>

<template>

    <div id="form">

        <div id="section">

            <div class="grid-item">

                <p class="container" id="title">
                    <label class="label">Titre</label>
                    <input class="input" type="text" v-model="newRoad.titreroute">
                </p>

                <p class="container" id="desc">
                    <label class="label">Description</label>
                    <textarea
                        class="input"
                        v-model="newRoad.descriptionroute" 
                        rows="10" 
                        cols="50" 
                        placeholder="Entrez une description de la route des vins...">
                    </textarea>
                </p>
            </div>

            <div class="grid-item">

                <div class="image-preview-container parent">
                    <div id="container-preview-img">
                        <img id="preview-img" @click="preview" :src="'/src/assets/images/routedesvins/' + newRoad.photoroute"/>
                    </div>
                    

                    <input id="input-preview" type="file" name="image" accept="image/*" class="file-input" @change="changeFile">
                </div>
            </div>
        </div>
    
        <button class="button" type="submit" @click="toEdit ? add : edit">{{ toEdit ? 'Modifier' : 'Ajouter' }}</button>
    </div>
</template>

<style scoped>


    #form {
        display: flex;
        flex-direction: column;
        background-color: #f5f5f5;
        border: 2px solid transparent;
        border-radius: 6px;
        transition: border 100ms;
        margin : 1rem;
    }

    #section {

        display: grid;
        grid-template-columns: repeat(2, 1fr);

        box-sizing: border-box;
        gap: 1rem;
        width: 100%;
        padding: 1rem;        
    }

    .container {
        display: flex;
        flex-direction: column;
        gap : 1rem;
    }

    img {
        display: flex;
        width: 400px;
        height: 400px;
    }

    #container-preview-img {
        display: grid;           
        place-items: center;        
    }


    #preview-img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
        aspect-ratio: 1;
    }
    #preview-img:hover {
        cursor: pointer;
    }

    #input-preview {
        display : none;
    }

    .button{
        background-color: #fff;
        width: 100%;
        color: #333;
        border: 1px solid #ddd;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 14px;
        transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
    }
</style>
