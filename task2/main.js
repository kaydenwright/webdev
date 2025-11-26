function setMainPadding() {
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    if (header && main) {
        const headerHeight = header.offsetHeight;
        // Add a small buffer (e.g., 20px) to the padding for extra space
        main.style.paddingTop = `${headerHeight + 20}px`;
    }
}

function updateCartCounter() {
    const cartCounter = document.getElementById('cart-counter');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartCounter) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCounter.textContent = totalItems;
        // Optional: show/hide counter if empty
        cartCounter.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
}

// Set padding and update counter on initial load
window.addEventListener('load', () => {
    setMainPadding();
    updateCartCounter();
});

// Recalculate padding on window resize
window.addEventListener('resize', setMainPadding);
