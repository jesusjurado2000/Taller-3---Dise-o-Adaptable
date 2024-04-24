const products = [
  { id: 1, name: "Toalla", price: 10, image: "https://icons.iconarchive.com/icons/hybridworks/yoritsuki/128/Oshibori-wet-hand-towel-icon.png" },
  { id: 2, name: "Jabon", price: 5, image: "https://icons.iconarchive.com/icons/robinweatherall/cleaning/128/bottles-icon.png" },
  { id: 3, name: "Cepillo", price: 3, image: "https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/128/Toothbrush-Flat-icon.png" }
];

const gallery = document.getElementById('gallery');
const cart = document.getElementById('cart');
const checkoutBtn = document.getElementById('checkoutBtn');

// Render products gallery
products.forEach(product => {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');
  productDiv.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button onclick="addToCart(${product.id})">Añadir al carrito</button>
  `;
  gallery.appendChild(productDiv);
});

// Cart functionality
let cartItems = [];

function renderCart() {
  cart.innerHTML = '';
  if (cartItems.length === 0) {
    cart.textContent = 'Tu carro esta vacio';
  } else {
    cartItems.forEach(item => {
      const cartItemDiv = document.createElement('div');
      cartItemDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
        <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${item.id}, this.value)">
        <button onclick="removeFromCart(${item.id})">Eliminar</button>
      `;
      cart.appendChild(cartItemDiv);
    });
  }
}
