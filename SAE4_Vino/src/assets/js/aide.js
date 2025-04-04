window.onload = () => {
    const clickElements = document.getElementsByClassName('click');

    Array.from(clickElements).forEach((clickElement) => {
        clickElement.addEventListener('click', () => {
            const parentItem = clickElement.closest('.accordeon-item');
            const detailsElement = parentItem?.getElementsByClassName('details')[0];
            const iconElement = parentItem?.querySelector('svg'); // Target the SVG icon

            if (detailsElement) {
                // Toggle visibility of the details element
                const isVisible = detailsElement.classList.contains('visible');
                if (isVisible) {
                    detailsElement.classList.remove('visible');
                } else {
                    detailsElement.classList.add('visible');
                }

                // Rotate the arrow icon
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
};
