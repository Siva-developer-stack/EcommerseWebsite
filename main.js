// Example product data
const products = [
    { id: 1, name: 'Laptop', price: 19999 },
    { id: 2, name: 'Headphones', price: 1899 },
    { id: 3, name: 'Smartphone', price: 7999 },
    { id: 4, name: 'Keyboard', price: 599 },
];

// Display products on the homepage
const productList = document.getElementById('product-list');

products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.className = 'product';
    productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>₹${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productCard);
});

// Add product to the cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find((item) => item.id === productId);

    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === productId);

    if (existingProduct) {
        // If product exists, increase its quantity
        existingProduct.quantity += 1;
    } else {
        // If product doesn't exist, add it with quantity 1
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} has been added to the cart!`);
}
