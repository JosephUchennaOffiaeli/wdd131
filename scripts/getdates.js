// getdates.js
// Dynamically update the footer with the current year and last modified date.

const currentYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

if (lastModifiedElement) {
    lastModifiedElement.textContent = `Page last modified: ${document.lastModified}`;
}
