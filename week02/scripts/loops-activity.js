// JavaScript Loops Activity
// Variable declarations as given in the activity
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// Function to demonstrate all the loop examples
function runLoopExamples() {
  console.log('=== JavaScript Loops Activity ===');
  console.log('Variable declarations:');
  console.log('DAYS =', DAYS);
  console.log('LIMIT =', LIMIT);
  console.log('studentReport =', studentReport);
  console.log('');

  // 1. For loop - Print values below 30
  console.log('1. For loop - Values below 30:');
  for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }
  console.log('');

  // 2. While loop - Print values below 30
  console.log('2. While loop - Values below 30:');
  let i = 0;
  while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
    i++;
  }
  console.log('');

  // 3. ForEach loop - Print values below 30
  console.log('3. ForEach loop - Values below 30:');
  studentReport.forEach(function (item) {
    if (item < LIMIT) {
      console.log(item);
    }
  });
  console.log('');

  // 4. For...In loop - Print values below 30
  console.log('4. For...In loop - Values below 30:');
  for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }
  console.log('');

  // 5. Generate day names for next DAYS days
  console.log('5. Next', DAYS, 'day names starting from today:');
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const currentDayIndex = today.getDay();

  // Using for loop to generate future day names
  for (let i = 0; i < DAYS; i++) {
    const futureDayIndex = (currentDayIndex + i + 1) % 7; // +1 to start from tomorrow
    console.log(dayNames[futureDayIndex]);
  }
}

// Auto-run the examples when the page loads (optional)
// Uncomment the line below if you want the examples to run automatically
// runLoopExamples();

// You can also call runLoopExamples() manually in the browser console