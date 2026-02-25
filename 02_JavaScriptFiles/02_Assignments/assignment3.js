
let number = 10; 
let positivity = number > 0 ? "Positive" : (number < 0 ? "Negative" : "Zero");
console.log(`The number ${number} is ${positivity}.`);  

if (number % 2 === 0) {
    console.log(`The number ${number} is Even.`);
} else {
    console.log(`The number ${number} is Odd.`);
}

console.log(`Numbers from 1 to ${number}:`);
for (let i = 1; i <= number; i++) {
    console.log(i);
}
  