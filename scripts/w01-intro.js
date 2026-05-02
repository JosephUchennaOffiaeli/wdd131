// w01-intro.js
// This script demonstrates JavaScript variables, data types, and output.

// JavaScript file extension: .js
// The external script is referenced in the HTML head with the defer attribute.

const courseName = 'WDD 131';
let userName = 'User Name';
let isLearningJS = true;
let currentYear = new Date().getFullYear();
let message = `Hello, ${userName}! Welcome to ${courseName} in ${currentYear}.`;
let description = 'JavaScript variables store values that can change or remain constant.';
let sentence = "You can use single quotes, double quotes, or backticks for strings.";
let exampleNull = null;
let exampleUndefined;

// Output using console and DOM manipulation.
console.log(message);
console.log(description);
console.log(sentence);
console.log('Null value:', exampleNull);
console.log('Undefined value:', exampleUndefined);

const outputElement = document.getElementById('js-output');

if (outputElement) {
    outputElement.innerHTML = `
        <p><strong>${message}</strong></p>
        <p>${description}</p>
        <p>${sentence}</p>
        <ul>
            <li>Data type of "101": string</li>
            <li>Data type of 101: number</li>
            <li>Data type of true: boolean</li>
            <li>Data type of null: object (JavaScript historical quirk)</li>
            <li>Data type of undefined: undefined</li>
        </ul>
        <p>const is used for values that should not be reassigned.</p>
        <p>let is used for variables that can be reassigned later.</p>
    `;
}

// Reassign a let variable example.
isLearningJS = false;
console.log('isLearningJS after reassignment:', isLearningJS);

// Attempting to reassign a const variable would cause an error:
// courseName = 'HTML 101'; // Uncaught TypeError: Assignment to constant variable.
