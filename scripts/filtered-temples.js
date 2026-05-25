// Complete required Temple Data Array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Abia, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/temples/images/aba-nigeria-temple-lds-273999-mobile.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/temples/images/manti-temple-768171-mobile.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/temples/images/payson-utah-temple-exterior-1416671-mobile.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2022, May, 22",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/temples/images/yigo-guam-temple-2-mobile.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://content.churchofjesuschrist.org/temples/images/salt-lake-temple-37256.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/temples/images/washington_dc_temple_exterior2.jpeg"
  },
  {
    templeName: "Frankfurt Germany",
    location: "Friedrichsdorf, Germany",
    dedicated: "1987, August, 28",
    area: 32895,
    imageUrl: "https://content.churchofjesuschrist.org/temples/images/frankfurt-germany-temple-lds-84740-mobile.jpg"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // Metadata script setups
  const yearOutput = document.getElementById('copyright-year');
  const modifiedOutput = document.getElementById('last-modified');
  if (yearOutput) yearOutput.textContent = new Date().getFullYear();
  if (modifiedOutput) modifiedOutput.textContent = document.lastModified;

  // Hamburger Menu toggle processing
  const menuToggle = document.getElementById('menu-toggle');
  const primaryNav = document.getElementById('primary-nav');
  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = primaryNav.classList.toggle('open');
      menuToggle.textContent = isOpen ? '✕' : '☰';
      menuToggle.setAttribute('aria-expanded', isOpen.toString());
    });
  }

  // Render original home screen cards list
  createTempleCards(temples);
  initFilterActions();
});

// Primary Rendering Function utilizing strict template literal notation mapping
function createTempleCards(filteredTemples) {
  const container = document.getElementById("gallery-container");
  container.innerHTML = ""; // Clear active structure elements

  filteredTemples.forEach(temple => {
    // Extends dynamic rendering parameters matching layout previews
    const card = `
      <figure class="temple-card">
        <figcaption>
          <h3>${temple.templeName}</h3>
          <p><span>Location:</span> ${temple.location}</p>
          <p><span>Dedicated:</span> ${temple.dedicated}</p>
          <p><span>Size:</span> ${temple.area.toLocaleString()} sq ft</p>
        </figcaption>
        <img src="${temple.imageUrl}" alt="Architectural rendering of ${temple.templeName}" loading="lazy">
      </figure>
    `;
    container.innerHTML += card;
  });
}

// Event logic parsing using array method filtering
function initFilterActions() {
  const headerTitle = document.getElementById("gallery-header");
  const navLinks = document.querySelectorAll("#primary-nav a");

  function resetActiveLink(targetLink) {
    navLinks.forEach(link => link.classList.remove("active"));
    targetLink.classList.add("active");
  }

  document.getElementById("home-filter").addEventListener("click", (e) => {
    e.preventDefault();
    headerTitle.textContent = "Home Gallery (All Temples)";
    resetActiveLink(e.target);
    createTempleCards(temples);
  });

  document.getElementById("old-filter").addEventListener("click", (e) => {
    e.preventDefault();
    headerTitle.textContent = "Historic Architecture (Built Before 1900)";
    resetActiveLink(e.target);
    const oldList = temples.filter(t => {
      const year = parseInt(t.dedicated.split(",")[0]);
      return year < 1900;
    });
    createTempleCards(oldList);
  });

  document.getElementById("new-filter").addEventListener("click", (e) => {
    e.preventDefault();
    headerTitle.textContent = "Modern Architecture (Built After 2000)";
    resetActiveLink(e.target);
    const newList = temples.filter(t => {
      const year = parseInt(t.dedicated.split(",")[0]);
      return year > 2000;
    });
    createTempleCards(newList);
  });

  document.getElementById("large-filter").addEventListener("click", (e) => {
    e.preventDefault();
    headerTitle.textContent = "Large Scale Temples (Over 90,000 sq ft)";
    resetActiveLink(e.target);
    const largeList = temples.filter(t => t.area > 90000);
    createTempleCards(largeList);
  });

  document.getElementById("small-filter").addEventListener("click", (e) => {
    e.preventDefault();
    headerTitle.textContent = "Small Scale Temples (Under 10,000 sq ft)";
    resetActiveLink(e.target);
    const smallList = temples.filter(t => t.area < 10000);
    createTempleCards(smallList);
  });
}