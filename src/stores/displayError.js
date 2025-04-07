
import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const storeDisplayError = defineStore('info', () => {
    

    const info = reactive({
        error: true,
        title: "Erreur",
        message: "description",
        display: false,
    });

    function display(error, title, message) {
        info.error = error;
        info.title = title;
        info.message = message;
        info.display = true;
        setTimeout(() => {
            info.display = false;
        }, 3000);
    }
    

    return {info,display};
});

