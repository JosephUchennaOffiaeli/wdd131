// 1. Course Object Literal containing properties and a nested Array of Objects
const aCourse = {
  code: "WDD131",
  title: "Dynamic Web Fundamentals",
  credits: 2,
  sections: [
    { section: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
    { section: "002", enrolled: 80, instructor: "Sarah Gobble" }
  ]
};

// 2. Function to set basic course details in the header
function setCourseInformation(course) {
  const courseHeader = document.querySelector("#courseName");
  // Using dot notation and template literals to update the HTML text
  courseHeader.innerHTML = `${course.code} – ${course.title}`;
}

// 3. Function to render the section objects into HTML table rows
function renderSections(course) {
  const tbody = document.querySelector("#sections tbody");
  let rows = "";
  
  // Loop through the sections array
  for (const section of course.sections) {
    rows += `<tr>
      <td>${section.section}</td>
      <td>${section.enrolled}</td>
      <td>${section.instructor}</td>
    </tr>`;
  }
  
  // Inject the completed rows string into the DOM
  tbody.innerHTML = rows;
}

// 4. Initialize the functions on page load
document.addEventListener("DOMContentLoaded", () => {
    setCourseInformation(aCourse);
    renderSections(aCourse);
});