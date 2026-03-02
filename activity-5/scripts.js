// Select elements
const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const buttons = document.querySelectorAll("button");
const resultDisplay = document.getElementById("result");

// Verify selections
console.log("Number 1 Input:", number1Input);
console.log("Number 2 Input:", number2Input);
console.log("Buttons:", buttons);
console.log("Result Display:", resultDisplay);

function logEventDetails(event) {
    console.log("Event Type:", event.type);
    console.log("Target:", event.target);
    console.log("Tag Name:", event.target.tagName);
    console.log("Button Text:", event.target.textContent);
    console.log("Current Target:", event.currentTarget);
}

function getInputValues() {
    const value1 = parseFloat(number1Input.value);
    const value2 = parseFloat(number2Input.value);

    if (isNaN(value1) || isNaN(value2)) {
        resultDisplay.textContent = "❌ Please enter valid numbers.";
        return null;
    }

    return { value1, value2 };
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "❌ Cannot divide by zero.";
    }
    return a / b;
}

buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {

        logEventDetails(event);

        // Clear previous result styling
        resultDisplay.textContent = "";

        const values = getInputValues();
        if (!values) return;

        let result;

        const operation = event.target.dataset.operation;

        if (operation === "add") {
            result = add(values.value1, values.value2);
        } else if (operation === "subtract") {
            result = subtract(values.value1, values.value2);
        } else if (operation === "multiply") {
            result = multiply(values.value1, values.value2);
        } else if (operation === "divide") {
            result = divide(values.value1, values.value2);
        }

        resultDisplay.textContent = "Result: " + result;

        // Visual feedback
        button.style.backgroundColor = "#28a745";

        setTimeout(function() {
            button.style.backgroundColor = "#007acc";
        }, 200);
    });
});