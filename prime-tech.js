let cart = [];
let cartDrawer = document.getElementById("cartDrawer");
let cartBtn = document.getElementById("cartBtn");
let closeCart = document.getElementById("closeCart");
let cartItems = document.getElementById("cartItems");
let cartTotal = document.getElementById("cartTotal");
let cartCount = document.getElementById("cartCount");

cartBtn.onclick = () => cartDrawer.classList.add("cart-open");
closeCart.onclick = () => cartDrawer.classList.remove("cart-open");

function addToCart(name, price) {
    cart.push({ name, price });

    updateCartUI();
}

function updateCartUI() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        total += item.price;
        cartItems.innerHTML += `
            <div class="cart-item">
                <h4>${item.name}</h4>
                <p>$${item.price}</p>
                <hr>
            </div>
        `;
    });

    cartTotal.textContent = total;
    cartCount.textContent = cart.length;
}
