// Dynamic date modifier script injection
document.addEventListener("DOMContentLoaded", () => {
    const modificationDisplay = document.getElementById("last-modified");
    
    if (modificationDisplay) {
        // Formats and displays the date the document file system data was updated
        modificationDisplay.textContent = `Last Modified: ${document.lastModified}`;
    }
});