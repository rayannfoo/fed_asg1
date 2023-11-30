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

function checkCart() {
    if (cart.length === 0) {
        alert('Cart is empty. Please add items before proceeding to checkout.');
        // Prevent the default behavior of the link (going to checkout.html)
        event.preventDefault();
    }
}

/* dropdown for members page */

function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}

/*closes the dropdown if user */

// Add event listener to the document body
document.addEventListener('click', function(event) {
    var dropdown = document.querySelector('.dropdown');
    var targetElement = event.target;

    // Check if the clicked element is not within the dropdown
    if (!dropdown.contains(targetElement)) {
        // Close the dropdown if it's currently open
        if (dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
        }
    }
});