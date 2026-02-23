// ==============================
// Part A: DOM Selection
// ==============================

// getElementById
const greetingMessage = document.getElementById("greeting-message");
const greetingImage = document.getElementById("greeting-image");

// querySelector
const cardContainer = document.querySelector(".card-container");

// querySelectorAll
const buttons = document.querySelectorAll(".controls button");

// Log to console
console.log("Greeting Message:", greetingMessage);
console.log("Greeting Image:", greetingImage);
console.log("Card Container:", cardContainer);
console.log("All Buttons:", buttons);

// ==============================
// Part B: Content Modification
// ==============================

greetingMessage.textContent = "Welcome to Your Dynamic Greeting Card!";

// Demonstrating innerHTML
document.getElementById("output").innerHTML = 
    "<p>This content was added using <strong>innerHTML</strong>.</p>";

console.log("textContent vs innerHTML demonstrated.");

// ==============================
// Part C: Attribute Modification
// ==============================

console.log("Original Image Source:", greetingImage.getAttribute("src"));

// Change alt text
greetingImage.setAttribute("alt", "Dynamic Greeting Card Image");

console.log("Updated alt attribute:", greetingImage.getAttribute("alt"));

// ==============================
// Greeting Data
// ==============================

const greetings = [
    {
        message: "Happy Birthday! 🎉",
        image: "https://picsum.photos/400/250?random=2"
    },
    {
        message: "Happy Holidays! ❄️",
        image: "https://picsum.photos/400/250?random=3"
    },
    {
        message: "Thank You So Much! 🙏",
        image: "https://picsum.photos/400/250?random=4"
    }
];

// ==============================
// Part D: Greeting Functions
// ==============================

function birthdayGreeting() {
    greetingMessage.textContent = greetings[0].message;
    greetingImage.setAttribute("src", greetings[0].image);
    console.log("Birthday greeting selected.");
}

function holidayGreeting() {
    greetingMessage.textContent = greetings[1].message;
    greetingImage.setAttribute("src", greetings[1].image);
    console.log("Holiday greeting selected.");
}

function thankYouGreeting() {
    greetingMessage.textContent = greetings[2].message;
    greetingImage.setAttribute("src", greetings[2].image);
    console.log("Thank You greeting selected.");
}

function randomGreeting() {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    greetingMessage.textContent = greetings[randomIndex].message;
    greetingImage.setAttribute("src", greetings[randomIndex].image);
    console.log("Random greeting selected:", greetings[randomIndex]);
}

// ==============================
// Part E: Personalize Feature
// ==============================

function personalizeGreeting() {
    const name = prompt("Enter your name:");
    
    if (name) {
        greetingMessage.textContent = `Have a wonderful day, ${name}! 🌟`;
        greetingImage.setAttribute("src", "https://picsum.photos/400/250?random=5");
        console.log("Personalized greeting created for:", name);
    } else {
        console.log("No name entered.");
    }
}