const restaurants = [
    { id: 1, name: "donde tavo", description: "Las mejores hamburguesas" },
    { id: 2, name: "sr.gourmet", description: "Auténtica pizza italiana" },
    { id: 3, name: "dogger", description: "El mejor sushi de la zona" },
    { id: 4, name: "sato", description: "Comida japonesa tradicional" },
    { id: 5, name: "caffeto", description: "Café y postres artesanales" },
    { id: 6, name: "pimientos", description: "Tapas y cocina mediterránea" },
    { id: 7, name: "donde juan", description: "Parrilla colombiana" },
    { id: 8, name: "cafeteria coliseo", description: "Bocadillos rápidos y bebidas" },
    { id: 9, name: "dary", description: "Desayunos saludables" }
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
    ],
    4: [
        { id: 10, name: "Ramen", price: 14.99 },
        { id: 11, name: "Gyozas", price: 7.99 },
        { id: 12, name: "Té Verde", price: 2.99 }
    ],
    5: [
        { id: 13, name: "Café Americano", price: 3.99 },
        { id: 14, name: "Cheesecake", price: 5.99 },
        { id: 15, name: "Capuchino", price: 4.99 }
    ],
    6: [
        { id: 16, name: "Ensalada Mediterránea", price: 9.99 },
        { id: 17, name: "Paella", price: 18.99 },
        { id: 18, name: "Tortilla Española", price: 6.99 }
    ],
    7: [
        { id: 19, name: "Churrasco", price: 20.99 },
        { id: 20, name: "Arepas", price: 3.99 },
        { id: 21, name: "Mazamorra", price: 4.99 }
    ],
    8: [
        { id: 22, name: "Sándwich Mixto", price: 7.99 },
        { id: 23, name: "Jugos Naturales", price: 3.99 },
        { id: 24, name: "Galletas", price: 2.99 }
    ],
    9: [
        { id: 25, name: "Avena con Frutas", price: 5.99 },
        { id: 26, name: "Huevos Revueltos", price: 4.99 },
        { id: 27, name: "Tostadas Integrales", price: 3.99 }
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
