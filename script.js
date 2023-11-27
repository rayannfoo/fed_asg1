// Function to toggle between Rose Quartz and Serenity
function toggleColors() {
    var body = document.body;
    var currentColor = body.style.backgroundColor;

    // Toggle between Rose Quartz and Serenity
    body.style.backgroundColor = currentColor === "rgb(250, 216, 214)" ? "#91A8D0" : "#FAD8D6";
}

// Initialize an empty cart array
let cart = [];

// Function to add an item to the cart
function addToCart(item) {
    cart.push(item);
    alert('Item added to cart!');
    console.log('Cart:', cart);
}

function viewCart() {
    const cartDisplay = document.getElementById('cart-display');
    if (cartDisplay) {
        if (cart.length === 0) {
            alert('Cart is empty!');
        } else {
            alert(`Cart Contents:\n${cart.join('\n')}`);
        }
    }
}