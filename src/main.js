const mainElement = document.querySelector("main");

inventory.forEach((item) => {
    mainElemtent.innerHTML += `
    <div class="item">
        <img src="${item.image}" alt="${item.title}">
        <h2>${item.title}</h2>
        <p>Price: $${item.price}</p>
        <button>Add to Cart</button>
    </div>
    `
})
