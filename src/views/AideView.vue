
<script setup>
import { LucideChevronsDown, LucideChevronsUp } from 'lucide-vue-next';
import { initializeAccordion } from '../assets/js/aide.js';
import { onMounted } from 'vue'; // Importation explicite de onMounted
onMounted(() => {
    initializeAccordion(); // Appeler la fonction pour initialiser les événements des accordéons
});
</script>

<template>
    <div class="legalContainer">
        <div class="legalContent">
            <h1>Foire aux Questions</h1>
            <hr class="help-hr" />

            <div class="accordeon">

                <div class="accordeon-item">
                    <div class="click" tabindex="0"></div>
                    <p class="titre">
                        <span class="text">Comment visualiser tous les séjours ?</span>
                        <svg data-icon="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </p>
                    <div class="details">
                        <img src="../assets/images/aide/01_tous_nos_sejours.png">
                        <p>Appuyer sur le bouton « Sejours » représenté sur l'image ci-dessus par un encadré.
                        </p>
                    </div>
                </div>


                <div class="accordeon-item">
                    <div class="click" tabindex="0"></div>
                    <p class="titre">
                        <span class="text">Comment filtrer les séjours ?</span>
                        <svg data-icon="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </p>
                    <div class="details">
                        <img src="../assets/images/aide/03_filtre_sejour1.png">
                        <p><b>Première étape :</b> Cliquer sur le filtre souhaité parmi ceux de la zone de filtre mise
                            en évidence en jaune sur l'image ci-dessus.</p>
                        <img src="../assets/images/aide/03_filtre_sejour2.png">
                        <p><b>Deuxième étape :</b> Une fois le filtre sélectionné, cliquez dessus puis choisissez
                            l'option souhaitée parmi celles disponibles dans la liste (encadrée en jaune). Les séjours seront automatiquement filtrés</p>
                    </div>
                </div>


                <div class="accordeon-item">
                    <div class="click" tabindex="0"></div>
                    <p class="titre">
                        <span class="text">Comment visualiser tous les partenaires de Vinotrip ?</span>
                        <svg data-icon="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </p>
                    <div class="details">
                        <img src="../assets/images/aide/04_tous_nos_partenaire.png">
                        <p>Appuyer sur le bouton « Partenaires » représenté sur l'image ci-dessus par un encadré.
                        </p>
                    </div>
                </div>


                <div class="accordeon-item">
                    <div class="click" tabindex="0"></div>
                    <p class="titre">
                        <span class="text">Comment filtrer les partenaires ?</span>
                        <svg data-icon="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </p>
                    <div class="details">
                        <img src="../assets/images/aide/05_filtre_partenaire.png">
                        <p>Pour filtrer les partenaires, il suffit de cliquer sur le bouton correspondant au type de partenaires 
                            que l'on souhaite filtrer (encadrée en rouge). Les partenaires seront automatiquement filtrés</p>
                    </div>
                </div>


                <div class="accordeon-item">
                    <div class="click" tabindex="0"></div>
                    <p class="titre">
                        <span class="text">Comment aller sur la page « Profil » ?</span>
                        <svg data-icon="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </p>
                    <div class="details">
                        <img src="../assets/images/aide/06_mon_compte1.png">
                        <p>Depuis la page d’accueil, cliquer sur le bouton mis en évidence en jaune sur l'image
                            ci-dessus afin
                            d’accéder à la page « Profil » (connectez-vous à votre compte si ce n’est pas encore
                            fait).</p>
                    </div>
                </div>
                

                <div class="accordeon-item">
                    <div class="click" tabindex="0"></div>
                    <p class="titre">
                        <span class="text">Qu'est-ce que l'authentification à deux facteurs ?</span>
                        <svg data-icon="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </p>
                    <div class="details">
                        <p>L'authentification à deux facteurs (aussi appelée A2F) est une sécurité permettant une
                            vérification supplémentaire lors de la connexion au compte.</p>
                        <p>Cette vérification se réalise par l'envoi d'un code de vérification par SMS à votre téléphone
                            portable.</p>
                    </div>
                </div>


                <div class="accordeon-item">
                    <div class="click" tabindex="0"></div>
                    <p class="titre">
                        <span class="text">Comment activer l'authentification à deux facteurs ?</span>
                        <svg data-icon="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </p>
                    <div class="details">
                        <p>Pour activer l'authentification à deux facteurs, être authentifié à votre compte est
                            nécessaire.</p>
                        <p>Ensuite, rednez-vous sur votre profil.</p>
                        <p>Appuyer sur le bouton « Activer la double authentification A2F ».</p>
                        <img src="../assets/images/aide/A2F.png">
                    </div>

                </div>

                <div class="help-footer">
                    <b>Vous n'avez pas trouvé la réponse à votre question ?</b>
                    <p>L’équipe VINOTRIP est joignable par mail à l'adresse <a
                            href="mailto:vinotrip@lmgt.me">vinotrip@lmgt.me</a>.
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<style>
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
}

h1 {
    text-align: center;
}

svg {
    width: 24px;
    /* Adjust the size as needed */
    height: 24px;
    stroke: black;
    /* Keep the arrow color consistent */
    stroke-width: 2;
}


.help-hr {
    height: 4px;
    width: 75px;
    border: none;
    background-color: #b6005e;
    margin: 1.5rem auto;
}

.accordeon {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    counter-reset: questions 0;
    width: 60vw;

    .accordeon-item {
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: var(--c-gray-200);
        border-radius: 6px;
        padding: 1rem;
        counter-increment: questions 1;

        .click {
            height: 3.5rem;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            cursor: pointer;
            z-index: 2;
        }

        .titre {
            font-size: 1.2rem;
            font-weight: bold;
            height: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .text::before {
                content: counter(questions, decimal-leading-zero) '. ';
            }

            .lucide {
                height: 1.5rem;
                width: 1.5rem;
                transition: transform 200ms;
            }
        }

        /* Smooth text appearance and disappearance */
        .details {
            opacity: 0;
            /* Initially hidden */
            max-height: 0;
            /* Collapse the height */
            overflow: hidden;
            /* Hide overflowing content */
            transition: opacity 0.3s ease, max-height 0.3s ease;
            /* Smooth transitions */
            width: 60vw;
        }

        .details.visible {
            opacity: 1;
            /* Fully visible */
            max-height: 500vh;
            /* Adjust as needed */
            width: 60vw;
            img{
                width: 60vw;
            }
        }
        

    }

}

/* Rotate the arrow */
svg {
    transition: transform 0.3s ease;
    /* Smooth rotation */
}

svg.rotated {
    transform: rotate(180deg);
    /* Rotate 180 degrees */
}

.help-footer {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 0.5rem;
}

ul {
    padding-left: 1rem;

    li {
        list-style: disc;
    }
}
</style>
