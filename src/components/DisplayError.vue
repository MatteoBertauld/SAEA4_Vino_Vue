<script setup>
    import { computed } from 'vue';
    import { storeDisplayError } from '@/stores/displayError';

    const displayError = storeDisplayError();

    // const backgroundColor = computed(() => {
    //     console.log(displayError.info)
    //     return displayError.info.error ? 'rgb(50, 219, 50)' : 'rgb(219, 50, 50)';
    //     // background-color : rgb(219, 50, 50);
    // });
    
</script>

<template>
    <div id="container-error" :style="{ backgroundColor: displayError.info.error ? 'rgb(219, 50, 50)' : 'rgb(50, 219, 50)' }">
        <h1 id="title">{{ displayError.info.title }}</h1>
        <p id="detail">{{ displayError.info.message }}</p> 
    </div>

</template>
    
<style scoped>

#container-error {
    position: fixed;
    z-index: 9999;
    right: 50px;
    bottom: 50px;
    display: grid;
    grid-template-rows: 1fr auto;
    height: 150px;
    width: 400px;
    padding: 5px; 
    border: solid 3px black;
    border-radius: 20px;
    box-shadow: 5px 5px 10px black;
    opacity: 1;
    background-color : rgb(219, 50, 50);

}

#title {
    position: relative; 
    left: 10px;
    top: 10px;
    font-size: 24px; 
    font-weight: bold; 
    color: white;
}

#detail {
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 100%; 
    text-align: center; 
    color: white;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}


</style>
