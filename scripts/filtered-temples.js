// 1. Array of Temple Objects - Extracted directly from your original local image inventory
const temples = [
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "images/temples/salt_lake_temple.jpg"
  },
  {
    templeName: "Nauvoo Illinois",
    location: "Nauvoo, Illinois, United States",
    dedicated: "2002, June, 27",
    area: 54000,
    imageUrl: "images/temples/nauvoo_illinois_temple.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/temples/washington_dc_temple.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 30",
    area: 72000,
    imageUrl: "images/temples/san_diego_temple.jpg"
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl: "images/temples/laie_hawaii_temple.jpg"
  },
  {
    templeName: "Jordan River Utah",
    location: "South Jordan, Utah, United States",
    dedicated: "1981, November, 16",
    area: 148236,
    imageUrl: "images/temples/jordan_river_utah_temple.jpg"
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 143969,
    imageUrl: "images/temples/st_george_utah_temple.jpg"
  },
  {
    templeName: "Mesa Arizona",
    location: "Mesa, Arizona, United States",
    dedicated: "1927, October, 23",
    area: 75000,
    imageUrl: "images/temples/mesa_arizona_temple.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "images/temples/rome_italy_temple.jpg"
  }
];

// 2. Initialize application on document mount ready state
document.addEventListener("DOMContentLoaded", () => {
  // Set structural footer timestamps
  const yearOutput = document.getElementById('copyright-year');
  const modifiedOutput = document.getElementById('last-modified');
  if (yearOutput) yearOutput.textContent = new Date().getFullYear();
  if (modifiedOutput) modifiedOutput.textContent = document.lastModified;

  // Manage Hamburger Navigation Bar Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const primaryNav = document.getElementById('primary-nav');
  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = primaryNav.classList.toggle('open');
      menuToggle.textContent = isOpen ? '✕' : '☰';
      menuToggle.setAttribute('aria-expanded', isOpen.toString());
    });
  }

  // Initial display setup (Renders all temples when the home page first loads)
  createTempleCards(temples);
  setupFilters();
});

// 3. Card Generation Loop (Utilizes clean template literals and lazy-loading)
function createTempleCards(filteredTemples) {
  const container = document.getElementById("gallery-container");
  container.innerHTML = ""; // Clear out previous screen cards

  filteredTemples.forEach(temple => {
    const card = `
      <figure class="temple-card">
        <figcaption>
          <h3>${temple.templeName}</h3>
          <p><span>Location:</span> ${temple.location}</p>
          <p><span>Dedicated:</span> ${temple.dedicated}</p>
          <p><span>Size:</span> ${temple.area.toLocaleString()} sq ft</p>
        </figcaption>
        <img src="${temple.imageUrl}" alt="Beautiful architectural display of the ${temple.templeName}" loading="lazy">
      </figure>
    `;
    container.innerHTML += card;
  });
}

// 4. Functional Filter Event Routines (Uses .filter array methods)
function setupFilters() {
  const headerTitle = document.getElementById("gallery-header");
  const navLinks = document.querySelectorAll("#primary-nav a");

  function resetActiveState(clickedLink) {
    navLinks.forEach(link => link.classList.remove("active"));
    clickedLink.classList.add("active");
  }

  // HOME FILTER
  document.getElementById("home-filter").addEventListener("click", (e) => {
    e.preventDefault();
    headerTitle.textContent = "Explore LDS temple architecture";
    resetActiveState(e.target);
    createTempleCards(temples);
  });

  // OLD FILTER (Built before 1950)
  document.getElementById("old-filter").addEventListener("click", (e) => {
    e.preventDefault();
    headerTitle.textContent = "Old Temples (Built Before 1950)";
    resetActiveState(e.target);
    const oldTemples = temples.filter(t => {
      const year = parseInt(t.dedicated.split(",")[0]);
      return year < 1950;
    });
    createTempleCards(oldTemples);
  });

  // NEW FILTER (Built after 2000)
  document.getElementById("new-filter").addEventListener("click", (e) => {
    e.preventDefault();
    headerTitle.textContent = "New Temples (Built After 2000)";
    resetActiveState(e.target);
    const newTemples = temples.filter(t => {
      const year = parseInt(t.dedicated.split(",")[0]);
      return year > 2000;
    });
    createTempleCards(newTemples);
  });

  // LARGE FILTER (Area greater than 90,000 sq ft)
  document.getElementById("large-filter").addEventListener("click", (e) => {
    e.preventDefault();
    headerTitle.textContent = "Large Scale Temples (Over 90,000 sq ft)";
    resetActiveState(e.target);
    const largeTemples = temples.filter(t => t.area > 90000);
    createTempleCards(largeTemples);
  });

  // SMALL FILTER (Area less than 10,000 sq ft)
  document.getElementById("small-filter").addEventListener("click", (e) => {
    e.preventDefault();
    headerTitle.textContent = "Small Scale Temples (Under 50,000 sq ft)";
    resetActiveState(e.target);
    const smallTemples = temples.filter(t => t.area < 50000);
    createTempleCards(smallTemples);
  });
}