<script setup>
import { ref, watch } from "vue";
import axios from "axios";
import { LoginStore } from "@/stores/login";
import { usePartenairesStore } from "@/stores/partenaires";

const loginStore = LoginStore();
const partnerType = ref("restaurant"); // Default type

const props = defineProps({
    newPartner: {
        type: Object,
        required: false,
        default: () => ({
            nompartenaire: "",
            mailpartenaire: "",
            telpartenaire: "",
            adresses: [],
            autresociete: {},
            cave: {},
            hotel: {},
            restaurant: {}
        })
    },
    toEdit: {
        type: Boolean,
        required: false,
        default: false
    }
});

// Hardcoded options for types of cuisine and tasting
const cuisineTypes = ref([
    { id: 1, label: "Cuisine Italienne" },
    { id: 2, label: "Cuisine Française" },
    { id: 3, label: "Cuisine Japonaise" },
    { id: 4, label: "Cuisine Mexicaine" },
    { id: 5, label: "Cuisine Espagnole" },
    { id: 6, label: "Cuisine Chinoise" },
    { id: 7, label: "Cuisine Indienne" },
    { id: 8, label: "Cuisine Thaïlandaise" },
    { id: 9, label: "Cuisine Marocaine" },
    { id: 10, label: "Cuisine Grecque" }
]);

const tastingTypes = ref([
    { id: 1, label: "Dégustation de Vins Rouges" },
    { id: 2, label: "Dégustation de Vins Blancs" },
    { id: 3, label: "Dégustation de Vins Rosés" },
    { id: 4, label: "Dégustation de Vins Bio" },
    { id: 5, label: "Dégustation en Terroir" },
    { id: 6, label: "Dégustation de Vins Millésimés" },
    { id: 7, label: "Dégustation de Vins Vieux" },
    { id: 8, label: "Atelier de Dégustation avec un Sommelier" },
    { id: 9, label: "Dégustation en Cave Particulière" },
    { id: 10, label: "Dégustation de Vins et Fromages" }
]);

const partnersStore = usePartenairesStore()

async function add() {
    console.log(props.newPartner)
    const result = await partnersStore.addPartenaire(props.newPartner)
}

</script>


<template>
    <div>
        <h1>{{ toEdit ? "Modifier le partenaire" : "Nouveau partenaire" }}</h1>
        <form @submit.prevent="toEdit ? editPartner() : add()">
            <!-- General Information -->
            <fieldset>
                <legend>Informations générales</legend>
                <label for="nompartenaire">Nom du partenaire :</label>
                <input type="text" id="nompartenaire" v-model="newPartner.nompartenaire" required />

                <label for="mailpartenaire">Email :</label>
                <input type="email" id="mailpartenaire" v-model="newPartner.mailpartenaire" required />

                <label for="telpartenaire">Téléphone :</label>
                <input type="tel" id="telpartenaire" v-model="newPartner.telpartenaire" required />

                <label for="typePartenaire">Type de partenaire :</label>
                <select id="typePartenaire" v-model="partnerType">
                    <option value="restaurant">Restaurant</option>
                    <option value="hotel">Hôtel</option>
                    <option value="cave">Cave</option>
                    <option value="autresociete">Autre Société</option>
                </select>
            </fieldset>

            <!-- Restaurant Information -->
            <fieldset v-if="partnerType === 'restaurant'">
                <legend>Restaurant</legend>
                <label for="typeCuisine">Type de cuisine :</label>
                <select id="typeCuisine" v-model.number="newPartner.restaurant.idtypecuisine" required>
                    <option v-for="type in cuisineTypes" :key="type.id" :value="type.id">
                        {{ type.label }}
                    </option>
                </select>

                <label for="etoiles">Nombre d'étoiles :</label>
                <input type="number" id="etoiles" v-model.number="newPartner.restaurant.nombreetoilesrestaurant" min="0" max="5" />

                <label for="specialiterestaurant">Spécialité culinaire :</label>
                <input type="text" id="specialiterestaurant" v-model="newPartner.restaurant.specialiterestaurant" />
            </fieldset>

            <!-- Hotel Information -->
            <fieldset v-if="partnerType === 'hotel'">
                <legend>Hôtel</legend>
                <label for="nombrechambres">Nombre de chambres :</label>
                <input type="number" id="nombrechambres" v-model.number="newPartner.hotel.nombrechambreshotel" min="1" />

                <label for="categoriehotel">Catégorie :</label>
                <input type="number" id="categoriehotel" v-model.number="newPartner.hotel.categoriehotel" min="0" max="5" />
            </fieldset>

            <!-- Cave Information -->
            <fieldset v-if="partnerType === 'cave'">
                <legend>Cave</legend>
                <label for="typedegustation">Type de dégustation :</label>
                <select id="typedegustation" v-model.number="newPartner.cave.idtypedegustation" required>
                    <option v-for="type in tastingTypes" :key="type.id" :value="type.id">
                        {{ type.label }}
                    </option>
                </select>
            </fieldset>

            <!-- Autre Société Information -->
            <fieldset v-if="partnerType === 'autresociete'">
                <legend>Autre Société</legend>
                <label for="nomAutresociete">Nom de la société :</label>
                <input type="text" id="nomAutresociete" v-model="newPartner.autresociete.nompartenaire" required />

                <label for="emailAutresociete">Email :</label>
                <input type="email" id="emailAutresociete" v-model="newPartner.autresociete.mailpartenaire" required />

                <label for="telAutresociete">Téléphone :</label>
                <input type="tel" id="telAutresociete" v-model="newPartner.autresociete.telpartenaire" required />
            </fieldset>

            <!-- Action Button -->
            <button type="submit">
                {{ toEdit ? "Modifier" : "Ajouter" }}
            </button>
        </form>
    </div>
</template>



<style scoped>
form {
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
}

label {
    margin-top: 1em;
}

button {
    margin-top: 1em;
    padding: 0.5em 1em;
}
</style>