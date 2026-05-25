// 1. Enhanced Course Object Literal with custom Methods (Functions inside the object)
const aCourse = {
  code: "WDD131",
  title: "Dynamic Web Fundamentals",
  credits: 2,
  sections: [
    { section: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
    { section: "002", enrolled: 80, instructor: "Sarah Gobble" }
  ],
  
  // Method to shift enrollment data numbers up or down
  changeEnrollment: function(sectionNum, isEnrolling) {
    // Find the specific section object matching the user input string
    const targetSection = this.sections.find(sec => sec.section === sectionNum);
    
    if (targetSection) {
      if (isEnrolling) {
        targetSection.enrolled++;
      } else {
        // Prevent negative enrollments
        if (targetSection.enrolled > 0) {
          targetSection.enrolled--;
        }
      }
      // Re-render the visual table view with updated values
      renderSections(this);
    } else {
      alert(`Section ${sectionNum} does not exist.`);
    }
  }
};

// 2. Set basic structural string information
function setCourseInformation(course) {
  const courseHeader = document.querySelector("#courseName");
  courseHeader.innerHTML = `${course.code} – ${course.title}`;
}

// 3. Render the dynamic table structure string layouts
function renderSections(course) {
  const tbody = document.querySelector("#sections tbody");
  let rows = "";
  
  for (const section of course.sections) {
    rows += `<tr>
      <td>${section.section}</td>
      <td>${section.enrolled}</td>
      <td>${section.instructor}</td>
    </tr>`;
  }
  tbody.innerHTML = rows;
}

// 4. Initialize elements and assign interactive event listeners
document.addEventListener("DOMContentLoaded", () => {
    // Initial display rendering
    setCourseInformation(aCourse);
    renderSections(aCourse);

    const sectionInput = document.getElementById("sectionNumber");
    const enrollBtn = document.getElementById("enrollStudent");
    const dropBtn = document.getElementById("dropStudent");

    // Event Listener for Enrolling a Student
    enrollBtn.addEventListener("click", () => {
        const secValue = sectionInput.value.trim();
        if (secValue) {
            aCourse.changeEnrollment(secValue, true);
        }
    });

    // Event Listener for Dropping a Student
    dropBtn.addEventListener("click", () => {
        const secValue = sectionInput.value.trim();
        if (secValue) {
            aCourse.changeEnrollment(secValue, false);
        }
    });
});