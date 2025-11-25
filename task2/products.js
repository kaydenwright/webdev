const products = [
    {
        id: 1,
        name: 'Health Potion',
        category: 'potion',
        description: 'A bubbling red liquid that restores 50 health points.',
        price: 10,
        image: 'https://via.placeholder.com/280x200/ff0000/ffffff?text=Health+Potion'
    },
    {
        id: 2,
        name: 'Mana Potion',
        category: 'potion',
        description: 'A swirling blue elixir to replenish 100 mana points.',
        price: 15,
        image: 'https://via.placeholder.com/280x200/0000ff/ffffff?text=Mana+Potion'
    },
    {
        id: 3,
        name: 'Elixir of Strength',
        category: 'potion',
        description: 'Temporarily doubles your physical strength.',
        price: 25,
        image: 'https://via.placeholder.com/280x200/800080/ffffff?text=Strength+Elixir'
    },
    {
        id: 4,
        name: 'Scroll of Fireball',
        category: 'spell',
        description: 'A single-use scroll that unleashes a powerful fireball.',
        price: 50,
        image: 'https://via.placeholder.com/280x200/ff4500/ffffff?text=Fireball'
    },
    {
        id: 5,
        name: 'Book of Teleportation',
        category: 'spell',
        description: 'Contains the ritual to teleport to a known location.',
        price: 200,
        image: 'https://via.placeholder.com/280x200/4b0082/ffffff?text=Teleport'
    },
    {
        id: 6,
        name: "Dragon's Tooth Dagger",
        category: 'artifact',
        description: 'A razor-sharp blade forged from a dragon\'s tooth.',
        price: 150,
        image: 'https://via.placeholder.com/280x200/a9a9a9/000000?text=Dagger'
    },
    {
        id: 7,
        name: 'Elven Cloak',
        category: 'artifact',
        description: 'Grants the wearer near-invisibility in forests.',
        price: 175,
        image: 'https://via.placeholder.com/280x200/228b22/ffffff?text=Elven+Cloak'
    },
    {
        id: 8,
        name: 'Bag of Holding',
        category: 'artifact',
        description: 'A small satchel that can hold far more than its size would suggest.',
        price: 250,
        image: 'https://via.placeholder.com/280x200/8b4513/ffffff?text=Bag+of+Holding'
    }
];

// Get the container element where products will be displayed
const productGrid = document.getElementById('product-grid');

/**
 * Displays an array of products in the product grid.
 * @param {Array} productsToDisplay - The array of product objects to display.
 */
function displayProducts(productsToDisplay) {
    // Clear the grid first
    productGrid.innerHTML = '';

    // If no products, show a message
    if (productsToDisplay.length === 0) {
        productGrid.innerHTML = '<p>No products found for this category.</p>';
        return;
    }

    // Loop through the products and create a card for each
    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}">
            <p>${product.description}</p>
            <p class="price">${product.price} Gold</p>
            <button class="button">Add to Cart</button>
        `;
        
        productGrid.appendChild(productCard);
    });
}

// --- Initial Page Load ---
// Display all products when the page first loads.
window.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});

// --- Filtering Logic ---
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the filter category from the data attribute
        const filter = button.dataset.filter;

        // Remove 'active' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        button.classList.add('active');

        // Filter the products
        let filteredProducts;
        if (filter === 'all') {
            filteredProducts = products;
        } else {
            filteredProducts = products.filter(product => product.category === filter);
        }

        // Display the filtered products
        displayProducts(filteredProducts);
    });
});