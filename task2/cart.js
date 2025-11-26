// We need the product data to look up details from the IDs in the cart.
const products = [
    { id: 1, name: 'Health Potion', category: 'potion', description: 'A bubbling red liquid that restores 50 health points. Brewed with the finest mountain herbs and a touch of morning dew.', price: 10, image: 'images/health.jpg' },
    { id: 2, name: 'Mana Potion', category: 'potion', description: 'A swirling blue elixir to replenish 100 mana points. Tastes like lightning.', price: 15, image: 'images/mana.jpg' },
    { id: 3, name: 'Elixir of Strength', category: 'potion', description: 'Temporarily doubles your physical strength for ten minutes. Do not consume more than one per day.', price: 25, image: 'images/strength.jpg' },
    { id: 4, name: 'Scroll of Fireball', category: 'spell', description: 'A single-use scroll that unleashes a powerful fireball. Simply read the incantation. Aiming is your responsibility.', price: 50, image: 'images/fire.jpg' },
    { id: 5, name: 'Book of Teleportation', category: 'spell', description: 'Contains the complete ritual to teleport to any previously visited location. Requires intense focus.', price: 200, image: 'images/teleport.jpg' },
    { id: 6, name: "Dragon's Tooth Dagger", category: 'artifact', description: 'A razor-sharp blade forged from a dragon\'s tooth. It is unnaturally light and never needs sharpening.', price: 150, image: 'images/dagger.jpg' },
    { id: 7, name: 'Elven Cloak', category: 'artifact', description: 'Woven from moon-spider silk, this cloak grants the wearer near-invisibility in natural surroundings.', price: 175, image: 'images/cloak.jpg' },
    { id: 8, name: 'Bag of Holding', category: 'artifact', description: 'A small, plain-looking satchel that opens into an extradimensional space. Can hold up to 500 pounds.', price: 250, image: 'images/bag.jpg' }
];

document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-container');
    const cartSummary = document.getElementById('cart-summary');
    const cartTotalElem = document.querySelector('.cart-total');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        cartContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Your cart is currently empty.</p>';
            cartSummary.style.display = 'none';
            updateCartCounter();
            return;
        }

        cartSummary.style.display = 'block';
        let total = 0;

        cart.forEach(cartItem => {
            const product = products.find(p => p.id === cartItem.id);
            if (!product) return;

            const itemTotal = product.price * cartItem.quantity;
            total += itemTotal;

            const cartItemElem = document.createElement('div');
            cartItemElem.className = 'cart-item';
            cartItemElem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${product.name}</h3>
                    <p>${product.price} Gold</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus-btn" data-id="${product.id}">-</button>
                    <span class="quantity-text">${cartItem.quantity}</span>
                    <button class="quantity-btn plus-btn" data-id="${product.id}">+</button>
                </div>
                <div class="cart-item-total">
                    <p>${itemTotal} Gold</p>
                    <button class="remove-btn" data-id="${product.id}">Remove</button>
                </div>
            `;
            cartContainer.appendChild(cartItemElem);
        });

        cartTotalElem.textContent = `Total: ${total} Gold`;
        addEventListeners();
        updateCartCounter();
    }

    function addEventListeners() {
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', e => removeFromCart(parseInt(e.target.dataset.id)));
        });
        document.querySelectorAll('.plus-btn').forEach(button => {
            button.addEventListener('click', e => updateQuantity(parseInt(e.target.dataset.id), 1));
        });
        document.querySelectorAll('.minus-btn').forEach(button => {
            button.addEventListener('click', e => updateQuantity(parseInt(e.target.dataset.id), -1));
        });
    }

    function updateQuantity(productId, change) {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            cart[itemIndex].quantity += change;
            if (cart[itemIndex].quantity <= 0) {
                // If quantity is 0 or less, remove the item
                cart.splice(itemIndex, 1);
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    // Initial render
    renderCart();
});