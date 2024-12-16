// Load cart items from localStorage
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.getElementById('cart-item-list');
const cartTotal = document.getElementById('cart-total');

// Display cart items
function renderCart() {
    cartContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div>
                <span>${item.name}</span>
                <span>Quantity: ${item.quantity}</span>
                <span>Price: ₹${(item.price * item.quantity).toFixed(2)}</span>
            </div>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);

        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Remove item from cart
function removeFromCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    renderCart();
}

// Initialize the cart
renderCart();

// Checkout button action
document.getElementById('checkout-button').addEventListener('click', () => {
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    alert('Thank you for your purchase!');
    localStorage.removeItem('cart');
    location.reload();
});
