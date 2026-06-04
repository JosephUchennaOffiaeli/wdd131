const products = [
    { id: "fc1888c6", name: "Flux Capacitor" },
    { id: "fc2050q1", name: "Power Laces" },
    { id: "jm1235s1", name: "Time Machine" }
];

const selectElement = document.getElementById("product");
if (selectElement) {
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', () => {
        let numReviews = parseInt(localStorage.getItem('reviewCount')) || 0;
        localStorage.setItem('reviewCount', numReviews + 1);
    });
}

const countDisplay = document.getElementById("review-count");
if (countDisplay) {
    countDisplay.textContent = localStorage.getItem('reviewCount') || 0;
}