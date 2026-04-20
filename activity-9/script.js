const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const submitBtn = document.getElementById("submitBtn");
const formStatus = document.getElementById("formStatus");

/* =========================
   Part A: Validation Functions
========================= */

// Required validation
function isNotEmpty(value) {
    return value.trim() !== "";
}

// Email regex validation
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Message length validation
function isValidMessage(message) {
    return message.trim().length >= 10;
}

/* =========================
   Part B: Real-time Validation
========================= */

function validateName() {
    if (!isNotEmpty(nameInput.value)) {
        nameError.textContent = "Name is required";
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");
        return false;
    }
    nameError.textContent = "";
    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");
    return true;
}

function validateEmail() {
    if (!isNotEmpty(emailInput.value)) {
        emailError.textContent = "Email is required";
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        return false;
    } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = "Invalid email format";
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        return false;
    }
    emailError.textContent = "";
    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid");
    return true;
}

function validateMessage() {
    if (!isNotEmpty(messageInput.value)) {
        messageError.textContent = "Message is required";
        messageInput.classList.add("invalid");
        messageInput.classList.remove("valid");
        return false;
    } else if (!isValidMessage(messageInput.value)) {
        messageError.textContent = "Message must be at least 10 characters";
        messageInput.classList.add("invalid");
        messageInput.classList.remove("valid");
        return false;
    }
    messageError.textContent = "";
    messageInput.classList.add("valid");
    messageInput.classList.remove("invalid");
    return true;
}

// Enable/disable submit button
function updateSubmitState() {
    const isFormValid =
        validateName() &&
        validateEmail() &&
        validateMessage();

    submitBtn.disabled = !isFormValid;
}

// Event listeners for real-time validation
nameInput.addEventListener("input", updateSubmitState);
emailInput.addEventListener("input", updateSubmitState);
messageInput.addEventListener("input", updateSubmitState);

/* =========================
   Part C: Form Submission
========================= */

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isFormValid =
        validateName() &&
        validateEmail() &&
        validateMessage();

    if (!isFormValid) {
        formStatus.textContent = "Please fix errors before submitting.";
        formStatus.style.color = "red";
        return;
    }

    // Success
    formStatus.textContent = "Form submitted successfully!";
    formStatus.style.color = "green";

    // Log data
    console.log({
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    });

    // Reset form
    form.reset();
    submitBtn.disabled = true;

    // Remove validation styles
    [nameInput, emailInput, messageInput].forEach(input => {
        input.classList.remove("valid");
    });
});