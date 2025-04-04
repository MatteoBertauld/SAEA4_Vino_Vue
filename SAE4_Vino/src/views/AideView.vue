<script setup>
import { LucideChevronsDown, LucideChevronsUp } from 'lucide-vue-next';
import '../assets/js/aide.js'
</script>

<template>
    <div class="legalContainer">
        <div class="legalContent">
            <h1>Foire aux Questions</h1>
            <hr />

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
                        <p>Appuyer sur le bouton « Tous nos Séjours » représenté sur l'image ci-dessus par un encadré.
                        </p>
                    </div>
                </div>


                <div class="accordeon-item">
                    <div class="click" tabindex="0"></div>
                    <p class="titre">
                        <span class="text">Comment visualiser mon panier ?</span>
                        <svg data-icon="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </p>
                    <div class="details">
                        <img src="../assets/images/aide/02_visualiser_panier.png">
                        <p>Cliquer sur le bouton « Panier » mis en évidence en rouge sur l'image ci-dessus.</p>
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
                            en
                            évidence en jaune sur l'image ci-dessus.</p>
                        <img src="../assets/images/aide/03_filtre_sejour2.png">
                        <p><b>Deuxième étape :</b> Une fois le filtre sélectionné, cliquez dessus puis choisissez
                            l'option
                            souhaitée parmi celles disponibles dans la liste (encadrée en jaune).</p>
                        <p><b>Troisième étape :</b> Cliquez sur le bouton « Filtrer », mis en évidence en rouge sur
                            l'image
                            ci-dessus, pour valider vos filtres et ainsi filtrer les séjours selon vos préférences. </p>
                    </div>
                </div>


                <div class="accordeon-item">
                    <div class="click" tabindex="0"></div>
                    <p class="titre">
                        <span class="text">Comment ajouter un séjour au panier ?</span>
                        <svg data-icon="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </p>
                    <div class="details">
                        <img src="../assets/images/aide/04_ajouter_sejour1.png">
                        <p><b>Première étape : </b>Sélectionner le séjour qui vous fait plaisir en cliquant sur le
                            bouton «
                            Découvrir » encadrée en
                            rouge :</p>
                        <p><b>Deuxième étape : </b>Vous trouverez sur cette page toutes les informations à propos de ce
                            séjour.
                        </p>
                        <p><b>Troisième étape : </b>Si vous souhaitez réservez ce séjour, cliquez sur le bouton «
                            Personnaliser
                            ou offrir » :
                        </p>
                        <img src="../assets/images/aide/04_ajouter_sejour2.png">
                        <p><b>Quatrième étape : </b>Vous trouverez sur cette page toutes les informations à propos de ce
                            séjour.
                        </p>
                        <p><b>Cinquième étape : </b>Si vous souhaitez réservez ce séjour, cliquez sur le bouton «
                            Personnaliser
                            ou offrir » encadrée en
                            rouge :</p>
                        <p><b>Sixième étape : </b>Renseignez les détails de votre séjour (dates de départ, nombre de
                            personnes,
                            nombre de chambres
                            l’hôtel, …) :
                        </p>
                        <img src="../assets/images/aide/04_ajouter_sejour3.png">
                        <p><b>Septième étape : </b>Si vous souhaitez offrir le cadeau à une tierce personne, cochez la
                            case «
                            Offrir le séjour » de la rubrique « cadeau ».</p>
                        <p><b>Huitième étape : </b>Une fois que vous avez renseignez tous les détails, vous pouvez
                            ajouter ce
                            séjour dans votre panier grâce au bouton « Ajouter au Panier » présent en bas de page.</p>
                    </div>
                </div>
                <div class="accordeon-item">
                    <div class="click" tabindex="0"></div>
                    <p class="titre">
                        <span class="text">Comment valider mon panier afin de passer une commande ?</span>
                        <svg data-icon="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </p>
                    <div class="details">
                        <p><b>Première étape : </b>Pour valider votre panier, cliquez sur le bouton « Passer au Paiement
                            »
                            encadré en rouge :</p>
                        <img src="../assets/images/aide/05_valider_panier1.png">
                        <p><b>Deuxième étape : </b>Renseigner ensuite votre adresse de facturation, vous pouvez la
                            modifier en
                            appuyant sur le bouton « Modifier mes adresses » encadré en jaune puis renseigner vos
                            informations
                            bancaires. Vous pouvez cocher la case « Enregistrer les informations de la carte bancaire »
                            encadrée
                            en vert afin de ne pas ressaisir vos informations à chaque paiement.
                        </p>
                        <p><b>Troisième étape : </b>Enfin cliquer sur le bouton « Confirmer » encadré en rouge afin de
                            confirmer votre commande.
                        </p>
                        <img src="../assets/images/aide/05_valider_panier2.png">
                    </div>
                </div>
                <div class="accordeon-item">
                    <div class="click" tabindex="0"></div>
                    <p class="titre">
                        <span class="text">Comment aller sur la page « Mon Compte » ?</span>
                        <svg data-icon="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </p>
                    <div class="details">
                        <img src="../assets/images/aide/06_mon_compte1.png">
                        <p>Depuis la page d’accueil, cliquer sur le bouton mis en évidence en rouge sur l'image
                            ci-dessus afin
                            d’accéder à la page « Mon Compte » (connectez-vous à votre compte si ce n’est pas encore
                            fait).</p>
                    </div>
                </div>
                <div class="accordeon-item">
                    <div class="click" tabindex="0"></div>
                    <p class="titre">
                        <span class="text">Comment visualiser mes commandes ?</span>
                        <svg data-icon="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </p>
                    <div class="details">
                        <img src="../assets/images/aide/07_visualiser_commande1.png">
                        <p><b>Première étape : </b>Depuis la page « Mon Compte » cliquez sur le bouton « Mes Commandes »
                            mis en
                            évidence en violet afin d’accéder à vos adresses.</p>
                        <img src="../assets/images/aide/07_visualiser_commande2.png">
                        <p><b>Deuxième étape : </b>Depuis la page commande vous pourrez voir le nombre de commandes que
                            vous
                            avez déjà effectuées ainsi que leurs états le prix et le type de paiement.</p>
                        <p><b>Troisième étape : </b>Vous pouvez aussi appuyer sur le bouton « Détails » encadrer en
                            rouge sur
                            l’image ci-dessus afin de voir les paramètres de la commande choisis et le détail du
                            paiement.</p>
                    </div>
                </div>

                <div class="accordeon-item">
                    <div class="click" tabindex="0"></div>
                    <p class="titre">
                        <span class="text">Comment modifier mon carnet d’adresse ?</span>
                        <svg data-icon="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </p>
                    <div class="details">
                        <img src="../assets/images/aide/08_modifier_adresse1.png">
                        <p><b>Première étape : </b>Depuis la page « Mon Compte » cliquez sur le bouton « Mes Adresses »
                            mis en
                            évidence en violet afin d’accéder à vos adresses.</p>
                        <img src="../assets/images/aide/08_modifier_adresse2.png">
                        <p><b>Légende :</b></p>
                        <ul>
                            <li>Dans l’encadré jaune vous trouvez l’une de vos adresses enregistrées sur notre site
                                ainsi que
                                les différentes options possibles.</li>
                            <li>Le bouton surligné en bleu vous permet de modifier les informations de votre adresse.
                            </li>
                            <li>Le bouton surligné en vert vous permet de supprimer votre adresse. </li>
                            <li>Le bouton surligné en violet vous permet d’ajouter une nouvelle adresse.</li>
                        </ul>
                    </div>

                </div>
                <div class="accordeon-item">
                    <div class="click" tabindex="0"></div>
                    <p class="titre">
                        <span class="text">Comment rédiger un avis / mettre un séjour en favoris ?</span>
                        <svg data-icon="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </p>
                    <div class="details">
                        <img src="../assets/images/aide/09_avis_favoris.png">
                        <p><b>Première étape : </b>Être connecté à votre compte client et être sur la page de
                            description d'un
                            séjour.</p>
                        <p><b>Rédiger un avis : </b>Appuyer sur le bouton « Écrire un avis » surligné en bleu.</p>
                        <p><b>Ajouter aux favoris : </b>Appuyer sur le bouton « Ajouter aux favoris » surligné en vert.
                        </p>
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
                        <p>Ensuite, aller dans l'onglet sécurité de votre compte.</p>
                        <img src="../assets/images/aide/A2F_1.png">
                        <p>Appuyer sur le bouton « Activer l'A2F ».</p>
                        <img src="../assets/images/aide/A2F_2.png">
                        <p>Insérer ensuite le code de 6 chiffres reçu par SMS et appuyer de nouveau sur le bouton «
                            Activer
                            l'A2F »</p>
                        <img src="../assets/images/aide/A2F_3.png">
                        <p>Après cela, l'authentification à deux facteurs est activée.</p>
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


hr {
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
        }

        .details.visible {
            opacity: 1;
            /* Fully visible */
            max-height: 200px;
            /* Adjust as needed */
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