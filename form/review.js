const products = [
  { id: "fc1888c6", name: "flux capacitor" },
  { id: "fc2050q1", name: "power laces" },
  { id: "jm1235s1", name: "time machine" }
];

// Populate dropdown if element exists
const selectElement = document.getElementById("product");
if (selectElement) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
}

// Handle LocalStorage on submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', () => {
        let numReviews = localStorage.getItem('reviewCount') || 0;
        localStorage.setItem('reviewCount', parseInt(numReviews) + 1);
    });
}

// Display count on review.html
const countDisplay = document.querySelector('#review-count');
if (countDisplay) {
    countDisplay.textContent = localStorage.getItem('reviewCount') || 0;
}