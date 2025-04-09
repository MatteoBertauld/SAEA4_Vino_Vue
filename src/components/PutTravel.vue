<script setup>
import { ref } from "vue";
import { useTravelsStore } from '@/stores/travels.js';
import { storeDisplayError } from '@/stores/displayError';
import router from "@/router";
import axios from "axios";

const props = defineProps({

    travelID: {
        type: Number,
        required: true,
    },
    travelEdit: {
        required: true
    },
    toEdit :{
        required: false,
        default: () => (true)
    }
    
}); 

const travelEdit = ref(props.travelEdit);
const travelsStore = useTravelsStore()
const displayError = storeDisplayError()



async function edit() {
        console.log(props.travelEdit)
        const result = await travelsStore.putTravel(props.travelID,props.travelEdit,)
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


                <p class="container">
                    <label class="label">Titre du séjour</label>
                    <input class="input" type="text" v-model="travelEdit.titresejour" placeholder="Titre du séjour">
                </p>

                <p class="container">
                    <label class="label">Description du séjour</label>
                    <textarea class="input" v-model="travelEdit.descriptionsejour" rows="4" cols="50" placeholder="Description du séjour"></textarea>
                </p>

                <p class="container">
                    <label class="label">Prix du séjour</label>
                    <input class="input" type="number" v-model="travelEdit.prixsejour" placeholder="Prix du séjour" />
                </p>

                <p class="container">
                    <label class="label">Durée du séjour</label>
                    <input class="input" type="number" v-model="travelEdit.idduree" placeholder="Durée du séjour (en jours)" />
                </p>

                <p class="container">
                    <label class="label">Localité</label>
                    <input class="input" type="number" v-model="travelEdit.idlocalite" placeholder="ID de la localité" />
                </p>

                <p class="container">
                    <label class="label">Thème</label>
                    <input class="input" type="number" v-model="travelEdit.idtheme" placeholder="ID du thème" />
                </p>

                <p class="container">
                    <label class="label">Catégorie de participants</label>
                    <input class="input" type="number" v-model="travelEdit.idcategorieparticipant" placeholder="ID de la catégorie de participants" />
                </p>

                <p class="container">
                    <label class="label">Catégorie de vignoble</label>
                    <input class="input" type="number" v-model="travelEdit.idcategorievignoble" placeholder="ID de la catégorie du vignoble" />
                </p>

                <p class="container">
                    <label class="label">Catégorie de séjour</label>
                    <input class="input" type="number" v-model="travelEdit.idcategoriesejour" placeholder="ID de la catégorie du séjour" />
                </p>

                <div class="image-preview-container parent">
                    <div id="container-preview-img">
                        <img id="preview-img" @click="preview" :src="'/src/assets/images/sejours/' + travelEdit.photosejour"/>
                    </div>

                    <input id="input-preview" type="file" name="image" accept="image/*" class="file-input" @change="changeFile">
                </div>
            </div>
        </div>

        <button class="button-travel" type="submit" @click="toEdit ? edit() : add()">{{ toEdit ? 'Modifier' : 'Ajouter' }}</button>
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

.button-travel {
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
