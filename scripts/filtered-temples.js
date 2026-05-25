const yearOutput = document.getElementById('copyright-year');
const modifiedOutput = document.getElementById('last-modified');
const menuToggle = document.getElementById('menu-toggle');
const primaryNav = document.getElementById('primary-nav');

if (yearOutput) {
  yearOutput.textContent = new Date().getFullYear();
}

if (modifiedOutput) {
  modifiedOutput.textContent = document.lastModified;
}

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', function () {
    const isOpen = primaryNav.classList.toggle('open');
    menuToggle.textContent = isOpen ? '✕' : '☰';
    menuToggle.setAttribute('aria-expanded', isOpen.toString());
  });
}
