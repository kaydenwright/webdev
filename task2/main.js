function setMainPadding() {
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    if (header && main) {
        const headerHeight = header.offsetHeight;
        // Add a small buffer (e.g., 20px) to the padding for extra space
        main.style.paddingTop = `${headerHeight + 20}px`;
    }
}

// Set padding on initial load, ensuring all content (like images) has loaded
window.addEventListener('load', setMainPadding);

// Recalculate padding on window resize
window.addEventListener('resize', setMainPadding);
