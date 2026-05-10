// Responsive Menu - JavaScript
// Get references to the menu button and navigation menu
const menuButton = document.getElementById('menu-button');
const navigationMenu = document.getElementById('navigation-menu');

// Set the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Create a click event listener for the hamburger menu button
menuButton.addEventListener('click', function() {
  // Toggle the 'open' class on both the button and the navigation menu
  menuButton.classList.toggle('open');
  navigationMenu.classList.toggle('open');
});

// Optional: Close menu when a link is clicked (better UX)
const navLinks = navigationMenu.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Only close on mobile (when menu button is visible)
    if (window.innerWidth < 768) {
      menuButton.classList.remove('open');
      navigationMenu.classList.remove('open');
    }
  });
});

// Optional: Close menu when window is resized to larger screen
window.addEventListener('resize', function() {
  if (window.innerWidth >= 768) {
    menuButton.classList.remove('open');
    navigationMenu.classList.remove('open');
  }
});
