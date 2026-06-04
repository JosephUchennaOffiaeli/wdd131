const products = [
    { id: "fc1888c6", name: "Flux Capacitor" },
    { id: "fc2050q1", name: "Power Laces" },
    { id: "jm1235s1", name: "Time Machine" }
];

// Logic for Index Page
const selectElement = document.getElementById("product");
if (selectElement) {
    products.forEach(p => {
        let opt = document.createElement("option");
        opt.value = p.id;
        opt.textContent = p.name;
        selectElement.appendChild(opt);
    });

    document.querySelector('form').addEventListener('submit', () => {
        let count = parseInt(localStorage.getItem('reviewCount') || 0);
        localStorage.setItem('reviewCount', count + 1);
    });
}

// Logic for Review Page
const display = document.getElementById("review-count");
if (display) {
    display.textContent = localStorage.getItem('reviewCount') || 0;
}