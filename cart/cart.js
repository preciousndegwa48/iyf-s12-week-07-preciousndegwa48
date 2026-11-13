const state = {
    products: [
        { id: 1, name: "Mandazi (pack of 6)", price: 120 },
        { id: 2, name: "Chapati (pack of 5)", price: 150 },
        { id: 3, name: "Tea leaves 250g", price: 180 },
    ],
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
    history: [],
};

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(state.cart));
}

function pushHistory() {
    state.history.push(JSON.parse(JSON.stringify(state.cart)));
}

function addToCart(id) {
    pushHistory();
    const found = state.cart.find((item) => item.productId === id);
    if (found) {
        found.quantity++;
    } else {
        state.cart.push({ productId: id, quantity: 1 });
    }
    saveCart();
    render();
}

function updateQuantity(id, qty) {
    pushHistory();
    if (qty <= 0) {
        state.cart = state.cart.filter((item) => item.productId !== id);
    } else {
        const item = state.cart.find((i) => i.productId === id);
        if (item) {
            item.quantity = qty;
        }
    }
    saveCart();
    render();
}

function getCartTotal() {
    return state.cart.reduce((total, item) => {
        const product = state.products.find((x) => x.id === item.productId);
        return total + product.price * item.quantity;
    }, 0);
}

function getCartCount() {
    return state.cart.reduce((count, item) => count + item.quantity, 0);
}

function render() {
    document.getElementById("cart-count").textContent = getCartCount();
    document.getElementById("cart-total").textContent = `KSh ${getCartTotal()}`;
    const list = document.getElementById("cart-list");
    list.innerHTML = "";
    state.cart.forEach((item) => {
        const product = state.products.find((x) => x.id === item.productId);
        const li = document.createElement("li");
        li.innerHTML = `${product.name} - KSh ${product.price} x <input type="number" value="${item.quantity}" min="0" data-id="${product.id}" /> <button data-remove="${product.id}">Remove</button>`;
        list.appendChild(li);
    });
}

document.getElementById("product-list").addEventListener("click", (event) => {
    if (event.target.dataset.add) {
        addToCart(Number(event.target.dataset.add));
    }
});

document.getElementById("cart-list").addEventListener("change", (event) => {
    if (event.target.dataset.id) {
        updateQuantity(Number(event.target.dataset.id), Number(event.target.value));
    }
});

document.getElementById("cart-list").addEventListener("click", (event) => {
    if (event.target.dataset.remove) {
        updateQuantity(Number(event.target.dataset.remove), 0);
    }
});

document.getElementById("clear-cart").addEventListener("click", () => {
    pushHistory();
    state.cart = [];
    saveCart();
    render();
});

document.getElementById("undo").addEventListener("click", () => {
    const prev = state.history.pop();
    if (prev) {
        state.cart = prev;
        saveCart();
        render();
    }
});

const prodList = document.getElementById("product-list");
state.products.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${product.name}</h3><p>KSh ${product.price}</p><button data-add="${product.id}">Add to Cart</button>`;
    prodList.appendChild(div);
});
render();
