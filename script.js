document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.querySelector(".cart-items");
    const checkoutButton = document.querySelector(".checkout");
    
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const product = button.closest(".product");
            const productId = product.dataset.id;
            const productName = product.querySelector("h3").innerText;
            
            const existingItem = cartItemsList.querySelector(`li[data-id="${productId}"]`);
            if (existingItem) {
                const quantityElement = existingItem.querySelector(".quantity");
                const quantity = parseInt(quantityElement.innerText) + 1;
                quantityElement.innerText = quantity;
            } else {
                const item = document.createElement("li");
                item.dataset.id = productId;
                item.innerHTML = `
                    ${productName} <span class="quantity">1</span>
                    <button class="remove-from-cart">Eliminar</button>
                `;
                cartItemsList.appendChild(item);
            }
        });
    });
    
    // Event listener para eliminar artículos
    cartItemsList.addEventListener("click", function(event) {
        if (event.target.classList.contains("remove-from-cart")) {
            const item = event.target.closest("li");
            item.remove();
        }
    });
    
    checkoutButton.addEventListener("click", function() {
        let message = "Pedido:\n";
        const items = cartItemsList.querySelectorAll("li");
        let totalPrice = 0;
        items.forEach(item => {
            const productName = item.innerText.split(" ")[0];
            const quantity = parseInt(item.querySelector(".quantity").innerText);
            message += `${productName}: ${quantity}\n`;
            totalPrice += quantity * getProductPrice(productName);
        });
        message += `Total a pagar: $${totalPrice}`;
        console.log(message);
        // Reemplaza '123456789' con el número de WhatsApp del hotel
        /*const hotelWhatsAppNumber = "123456789";
        const url = `https://wa.me/${hotelWhatsAppNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");*/
    });
});

function getProductPrice(productName) {
    // Aquí puedes agregar lógica para obtener el precio de cada producto
    // Por ahora, solo devolvemos precios fijos para los productos de ejemplo
    const prices = {
        "Agua": 2,
        "Toalla": 15,
        "Jabón": 5,
        "Cepillo": 2,
        "Medias": 10,
        "Camisa": 20
    };
    return prices[productName];
}
