// main.js
const restaurants = [
    { id: 1, name: "Burger Palace", description: "Las mejores hamburguesas" },
    { id: 2, name: "Pizza Paradise", description: "Auténtica pizza italiana" },
    { id: 3, name: "Sushi Sensation", description: "El mejor sushi de la zona" }
];

const menus = {
    1: [
        { id: 1, name: "Hamburguesa Clásica", price: 10.99 },
        { id: 2, name: "Hamburguesa Vegetariana", price: 12.99 },
        { id: 3, name: "Papas Fritas", price: 3.99 }
    ],
    2: [
        { id: 4, name: "Pizza Margherita", price: 14.99 },
        { id: 5, name: "Pizza Pepperoni", price: 15.99 },
        { id: 6, name: "Pizza Vegetariana", price: 13.99 }
    ],
    3: [
        { id: 7, name: "Sushi Variado", price: 18.99 },
        { id: 8, name: "Sashimi", price: 16.99 },
        { id: 9, name: "Tempura", price: 12.99 }
    ]
};

function initApp() {
    showSection('inicio');
    loadRestaurants();
    updateUI(null);
}

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function loadRestaurants() {
    const restaurantList = document.getElementById('restaurant-list');
    restaurantList.innerHTML = '';
    restaurants.forEach(restaurant => {
        const restaurantElement = document.createElement('div');
        restaurantElement.innerHTML = `
            <h2>${restaurant.name}</h2>
            <p>${restaurant.description}</p>
            <button onclick="loadMenu(${restaurant.id})">Ver Menú</button>
        `;
        restaurantList.appendChild(restaurantElement);
    });
}

function loadMenu(restaurantId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    const menuItems = menus[restaurantId];
    
    document.getElementById('restaurant-name').textContent = restaurant.name;
    
    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = '';
    menuItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>Precio: $${item.price.toFixed(2)}</p>
            <button onclick="addToCart({id: ${item.id}, name: '${item.name}', price: ${item.price}})">
                Añadir al Carrito
            </button>
        `;
        menuList.appendChild(itemElement);
    });
    
    showSection('menu');
}