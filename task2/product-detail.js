// We need the product data. For now, we will duplicate the array.
// A more advanced site would load this from a shared file or an API.
const products = [
    {
        id: 1,
        name: 'Health Potion',
        category: 'potion',
        description: 'A bubbling red liquid that restores 50 health points. Brewed with the finest mountain herbs and a touch of morning dew.',
        price: 10,
        image: 'images/health.jpg'
    },
    {
        id: 2,
        name: 'Mana Potion',
        category: 'potion',
        description: 'A swirling blue elixir to replenish 100 mana points. Tastes like lightning.',
        price: 15,
        image: 'images/mana.jpg'
    },
    {
        id: 3,
        name: 'Elixir of Strength',
        category: 'potion',
        description: 'Temporarily doubles your physical strength for ten minutes. Do not consume more than one per day.',
        price: 25,
        image: 'images/strength.jpg'
    },
    {
        id: 4,
        name: 'Scroll of Fireball',
        category: 'spell',
        description: 'A single-use scroll that unleashes a powerful fireball. Simply read the incantation. Aiming is your responsibility.',
        price: 50,
        image: 'images/fire.jpg'
    },
    {
        id: 5,
        name: 'Book of Teleportation',
        category: 'spell',
        description: 'Contains the complete ritual to teleport to any previously visited location. Requires intense focus.',
        price: 200,
        image: 'images/teleport.jpg'
    },
    {
        id: 6,
        name: "Dragon's Tooth Dagger",
        category: 'artifact',
        description: 'A razor-sharp blade forged from a dragon\'s tooth. It is unnaturally light and never needs sharpening.',
        price: 150,
        image: 'images/dagger.jpg'
    },
    {
        id: 7,
        name: 'Elven Cloak',
        category: 'artifact',
        description: 'Woven from moon-spider silk, this cloak grants the wearer near-invisibility in natural surroundings.',
        price: 175,
        image: 'images/cloak.jpg'
    },
    {
        id: 8,
        name: 'Bag of Holding',
        category: 'artifact',
        description: 'A small, plain-looking satchel that opens into an extradimensional space. Can hold up to 500 pounds.',
        price: 250,
        image: 'images/bag.jpg'
    }
];

window.addEventListener('DOMContentLoaded', () => {
    // 1. Get Product ID from URL
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));

    // 2. Find the Product
    const product = products.find(p => p.id === productId);

    // 3. Populate the Page
    if (product) {
        document.title = `Magic Matters | ${product.name}`;

        const container = document.getElementById('product-detail-container');
        container.innerHTML = `
            <div class="back-button-container">
                <a href="products.html" class="button back-button">&larr; Back to Products</a>
            </div>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h1 class="product-name">${product.name}</h1>
                <p class="product-price">${product.price} Gold</p>
                <p class="product-description">${product.description}</p>
                <button class="button add-to-cart-btn">Add to Cart</button>
            </div>
        `;

        // --- Add to Cart Logic ---
        const addToCartBtn = container.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', () => {
            // 1. Get cart from localStorage or create an empty array
            const cart = JSON.parse(localStorage.getItem('cart')) || [];

            // 2. Find if product is already in cart
            const existingProductIndex = cart.findIndex(item => item.id === product.id);

            if (existingProductIndex > -1) {
                // If yes, increment quantity
                cart[existingProductIndex].quantity += 1;
            } else {
                // If no, add new product with quantity 1
                cart.push({ id: product.id, quantity: 1 });
            }

            // 3. Save updated cart back to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Update the visual cart counter in the header
            updateCartCounter();

            // 4. Provide user feedback
            addToCartBtn.textContent = 'Added!';
            addToCartBtn.disabled = true;
            setTimeout(() => {
                addToCartBtn.textContent = 'Add to Cart';
                addToCartBtn.disabled = false;
            }, 2000); // Revert after 2 seconds
        });

    } else {
        // If product not found, show an error message
        const container = document.getElementById('product-detail-container');
        container.innerHTML = '<h1>Product not found!</h1><p>Sorry, we could not find the magical item you were looking for. <a href="products.html">Return to all products</a>.</p>';
    }
});