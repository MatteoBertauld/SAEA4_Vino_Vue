<script setup>
    import { storeDisplayError } from '@/stores/displayError';

    const props = defineProps({
        client : {
            type: Object,  // Spécifie le type attendu pour la prop
            required: true,
        },
    });

    const clients = useClientsStore()
    const displayError = storeDisplayError()


    // async function add() {
    //     const result = await roads.AddRoad(props.newRoad)
    //     displayError.display(result.error, result.title,result.description);
    //     if(!result.error) { router.push({name:"routedesvins"});}
    // }

    // async function edit() {
    //     const result = await roads.ModifieRoad(props.newRoad)
    //     displayError.display(result.error, result.title,result.description);
    //     if(!result.error) { router.push({name:"routedesvins"});}
    // }

</script>

<template>

<div class="info">
        <div class="info-label">Prénom:</div>
        <div class="info-value">Serena</div>
    </div>

    <div class="info">
        <div class="info-label">Nom:</div>
        <div class="info-value">Elliott</div>
    </div>

    <div class="info">
        <div class="info-label">Email:</div>
        <div class="info-value">serenaelliott8820@google.com</div>
    </div>

    <div class="info">
        <div class="info-label">Date de naissance:</div>
        <div class="info-value">1977-02-18</div>
    </div>

</template>

<style scoped>

</style>
