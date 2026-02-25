/*Store 5 subject marks in variables
Calculate total and average
Use if–else ladder to assign grade
Use ternary operator to check:
Pass (average ≥ 40) or Fail
Use loop to:
Print marks one by one
Count how many subjects scored above 75*/

let subject1 = [85, 78, 92, 88, 90];
let count=0;
let total = 0;
for (let i = 0; i < subject1.length; i++) {
    total += subject1[i];
    if (subject1[i] > 75) {
        count++;
    }
}
let average = total / subject1.length;

let grade = average >= 90 ? "A" :
            average >= 75 ? "B" :
            average >= 60 ? "C" :
            average >= 40 ? "D" : "F";
console.log(`Total Marks: ${total}, Average Marks: ${average.toFixed(2)}, Grade: ${grade}`);
let result = average >= 40 ? "Pass" : "Fail";
console.log(`no of subjects scored above 75: ${count}`);
console.log(`Result: ${result}`);