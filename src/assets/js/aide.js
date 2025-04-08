// Fonction pour initialiser les accordéons
export function initializeAccordion() {
    const clickElements = document.getElementsByClassName('click');

    Array.from(clickElements).forEach((clickElement) => {
        clickElement.addEventListener('click', () => {
            const parentItem = clickElement.closest('.accordeon-item');
            const detailsElement = parentItem?.getElementsByClassName('details')[0];
            const iconElement = parentItem?.querySelector('svg'); // Cibler l'icône SVG

            if (detailsElement) {
                // Alterner la visibilité de l'élément details
                const isVisible = detailsElement.classList.contains('visible');
                if (isVisible) {
                    detailsElement.classList.remove('visible');
                } else {
                    detailsElement.classList.add('visible');
                }

                // Alterner la rotation de l'icône fléchée
                if (iconElement) {
                    iconElement.classList.toggle('rotated');
                } else {
                    console.error("Icon element not found!");
                }
            } else {
                console.error("Details element not found!");
            }
        });
    });
}