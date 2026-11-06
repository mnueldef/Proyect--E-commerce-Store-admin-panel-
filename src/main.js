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

      // Actualizamos el DOM llamando a la función
      updateCartCounter();
    }
  }
});