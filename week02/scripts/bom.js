// Book of Mormon Application - Event Handling
// Declare variables that hold references to the input, button, list elements, and counter
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const counter = document.querySelector('#chapter-count');

// Set the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Function to update the chapter counter
function updateCounter() {
  const count = list.children.length;
  counter.textContent = `Chapters added: ${count}`;
}

// Function to add a chapter (reusable for both button click and Enter key)
function addChapter() {
  // Check to make sure the input is not blank and we haven't reached the limit
  if (input.value.trim() !== '') {
    // Check if we already have 10 chapters (limit to top 10)
    if (list.children.length >= 10) {
      alert('You can only add up to 10 favorite chapters.');
      input.focus();
      return;
    }

    // Create a li element that will hold each entry's chapter title and an associated delete button
    const li = document.createElement('li');

    // Create a delete button
    const deleteButton = document.createElement('button');

    // Populate the li element variable's textContent with the input value
    li.textContent = input.value;

    // Set the delete button's textContent to ❌
    deleteButton.textContent = '❌';

    // Add aria-label for accessibility (screen readers)
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // Append the delete button to the li element
    li.append(deleteButton);

    // Append the li element to the unordered list in your HTML
    list.append(li);

    // Update the counter
    updateCounter();

    // Add an event listener to the delete button that removes the li element when clicked
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      updateCounter();
      input.focus();
    });

    // Change the input value to an empty string to clean up the interface for the user
    input.value = '';

    // After processing, the focus (active cursor) should be sent to the input element
    input.focus();
  } else {
    // If input is blank, just focus back to the input field
    input.focus();
  }
}

// Create a click event listener for the Add Chapter button
button.addEventListener('click', addChapter);

// Add keyboard support - allow Enter key to add chapters
input.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addChapter();
  }
});

// The application interface is now set up and ready for the next activity
// where we will add event handling to make it fully functional.