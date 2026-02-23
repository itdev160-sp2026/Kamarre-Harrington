let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

console.log("Operator precedence:", a + b * 2);
console.log("With parentheses:", (a + b) * 2);

let num = 5;
let str = "5";
let other = 10;

console.log("== comparison:", num == str);
console.log("=== comparison:", num === str);
console.log("Greater than:", other > num);
console.log("Less than:", num < other);
console.log("Greater or equal:", num >= 5);
console.log("Less or equal:", num <= 4);

let isAdult = true;
let hasID = false;

console.log("AND (&&):", isAdult && hasID);
console.log("OR (||):", isAdult || hasID);
console.log("NOT (!):", !isAdult);

let age = 20;
console.log("Compound condition:", age >= 18 && age <= 65);

let score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}

console.log("Letter grade:", grade);

let dayOfWeek = 2;

switch (dayOfWeek) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

// Part F: Display a Message
document.getElementById("output").textContent =
  "JavaScript operators and control flow demo loaded successfully!";