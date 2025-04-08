<script setup>
import { ref } from "vue";
import { useRoadsStore } from '@/stores/roads.js';
import { storeDisplayError } from '@/stores/displayError';
import router from "@/router";
import axios from "axios";

const props = defineProps({
    newRoad: {
        type: Object,  // Spécifie le type attendu pour la prop
        required: false,
        default: () => ({ 
            titreroute: "Title",
            descriptionroute: "desc",
            photoroute: "NOIMAGE.jpg",
            idcategorievignobles: [],
            idsejour: 0,
            idduree: 0,
            idcategorievignoble: 0,
            idcategoriesejour: 0,
            idlocalite: 0,
            idtheme: 0,
            idcategorieparticipant: 0,
            titresejour: "string",
            photosejour: "string",
            descriptionsejour: "string",
            prixsejour: 0
        })
    },
    toEdit: {
        type: Boolean,
        required: false,
        default: () => (false)
    }
});

const roads = useRoadsStore()
const displayError = storeDisplayError()

async function add() {
    const result = await roads.AddRoad(props.newRoad)
    displayError.display(result.error, result.title, result.description);
    if (!result.error) {
        router.push({ name: "routedesvins" });
    }
}

async function edit() {
    const result = await roads.ModifieRoad(props.newRoad)
    displayError.display(result.error, result.title, result.description);
    if (!result.error) {
        router.push({ name: "routedesvins" });
    }
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
        const reader = new FileReader();

        // Lorsque le fichier est lu, mettre à jour l'élément <img> avec l'URL de données
        reader.onload = function (e) {
            preview.src = e.target.result; // Met à jour la source de l'image
            props.newRoad.photoroute = e.target.result;
        };

        // Lire le fichier comme URL de données (Base64)
        reader.readAsDataURL(file);
    }
}
</script>

<template>
    <div id="form">
        <div id="section">
            <div class="grid-item">


                <p class="container">
                    <label class="label">Titre du séjour</label>
                    <input class="input" type="text" v-model="newRoad.titresejour" placeholder="Titre du séjour">
                </p>

                <p class="container">
                    <label class="label">Description du séjour</label>
                    <textarea class="input" v-model="newRoad.descriptionsejour" rows="4" cols="50" placeholder="Description du séjour"></textarea>
                </p>

                <p class="container">
                    <label class="label">Prix du séjour</label>
                    <input class="input" type="number" v-model="newRoad.prixsejour" placeholder="Prix du séjour" />
                </p>

                <p class="container">
                    <label class="label">Durée du séjour</label>
                    <input class="input" type="number" v-model="newRoad.idduree" placeholder="Durée du séjour (en jours)" />
                </p>

                <p class="container">
                    <label class="label">Localité</label>
                    <input class="input" type="number" v-model="newRoad.idlocalite" placeholder="ID de la localité" />
                </p>

                <p class="container">
                    <label class="label">Thème</label>
                    <input class="input" type="number" v-model="newRoad.idtheme" placeholder="ID du thème" />
                </p>

                <p class="container">
                    <label class="label">Catégorie de participants</label>
                    <input class="input" type="number" v-model="newRoad.idcategorieparticipant" placeholder="ID de la catégorie de participants" />
                </p>

                <p class="container">
                    <label class="label">Catégorie de vignoble</label>
                    <input class="input" type="number" v-model="newRoad.idcategorievignoble" placeholder="ID de la catégorie du vignoble" />
                </p>

                <p class="container">
                    <label class="label">Catégorie de séjour</label>
                    <input class="input" type="number" v-model="newRoad.idcategoriesejour" placeholder="ID de la catégorie du séjour" />
                </p>

                <div class="image-preview-container parent">
                    <div id="container-preview-img">
                        <img id="preview-img" @click="preview" :src="'/src/assets/images/routedesvins/' + newRoad.photoroute"/>
                    </div>

                    <input id="input-preview" type="file" name="image" accept="image/*" class="file-input" @change="changeFile">
                </div>
            </div>
        </div>

        <button class="button-road" type="submit" @click="toEdit ? edit() : add()">{{ toEdit ? 'Modifier' : 'Ajouter' }}</button>
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
    gap: 1rem;
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

.button-road {
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
