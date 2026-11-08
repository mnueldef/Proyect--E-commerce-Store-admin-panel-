/***************** Logic cart ********/
let cart = [];
const updateCartCounter = () => {
  const cartCounter = document.querySelector("#cart-counter");
  if (cartCounter) {
    cartCounter.textContent = `Carrito (${cart.length})`;
  }
};
/******** generate items*******/
const mainElement = document.querySelector("main");
inventory.forEach((item) => {
    mainElement.innerHTML += `
    <div class="item">
        <h2>${item.title}</h2>
        <img src="${item.image}" alt="${item.title}">
        <p>Price: $${item.price}</p>
        <button class="btn-add" data-id="${item.id}">Add to Cart</button>
    </div>
    `
})
/*********************EVENTS*****************/

//capturar el id y procesar el click
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-add")) {
    const productId = Number(event.target.dataset.id);
    const selectedProduct = inventory.find((product) => product.id === productId);

    if (selectedProduct) {
      // Agregamos al arreglo cart
      cart.push(selectedProduct);

      updateCartCounter();
      renderCartItems();
    }
  }
});

//**********************ECOM 6***************
// Selección de elementos del DOM
const cartSidebar = document.querySelector("#cart-sidebar");
const cartBtn = document.querySelector("#cart-counter");
const closeCartBtn = document.querySelector("#close-cart-btn");

// Abrir el carrito al hacer clic en el botón del Header
cartBtn.addEventListener("click", () => {
  cartSidebar.classList.add("open");
});

// Cerrar el carrito al hacer clic en el botón 'X'
closeCartBtn.addEventListener("click", () => {
  cartSidebar.classList.remove("open");
});

const renderCartItems = () => {
  const cartItemsContainer = document.querySelector("#cart-items");
  
  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.title}">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.title}</h4>
        <span class="cart-item-price">$${item.price}</span>
      </div>
    </div>
  `).join("");
};