/**
 * Store marks in a variable
Use if–else ladder to assign grade:
A (90+)
B (75–89)
C (60–74)
D (40–59)
F (<40)
Use ternary operator to check:
Pass or Fail
 */

let marks = 85;

let grade = marks >= 90 ? "A" :
            marks >= 75 ? "B" :
            marks >= 60 ? "C" :
            marks >= 40 ? "D" : "F";
console.log(`Marks: ${marks}, Grade: ${grade}`);

let result = marks >= 40 ? "Pass" : "Fail";
console.log(`Marks: ${marks}, Result: ${result}`);
