/**
 * You are developing a small utility for a teacher to analyze student marks stored in an array. 
 
📌 Requirements 
- Store student marks in an array. 
- Calculate total and average marks using array methods. 
- Display pass/fail result based on average. 
- Use let/const appropriately. 
- Use arrow functions for calculations. 
- Display output using template literals. 
 
🛠️ Technical Constraints 
- Must use array methods like reduce() and map(). 
- Use only ES6+ syntax. 
- No external libraries. 
- All logic must be inside modular JavaScript file.
 */

// studentMarks.js

// Store student marks
const marks = [78, 85, 62, 90, 74];

const formattedMarks = marks.map(mark => Number(mark));

// Calculate total using reduce
const totalMarks = formattedMarks.reduce(
  (accumulator, current) => accumulator + current,
  0
);

// Calculate average
const averageMarks = totalMarks / formattedMarks.length;

// Determine pass/fail (pass if average >= 40)
const result = averageMarks >= 40 ? "PASS" : "FAIL";

// Display output using template literals
const output = `
Student Marks Report
Marks: ${formattedMarks.join(", ")}
Total: ${totalMarks}
Average: ${averageMarks.toFixed(2)}
Result: ${result}
`;

console.log(output);

export { marks, totalMarks, averageMarks, result };