const button = document.getElementById("new-quote-btn");
const quoteContainer = document.getElementById("quote-container");
const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");

// Fetch Quote
async function getQuote() {
    showLoading();
    hideError();

    try {
        const response = await fetch("https://dummyjson.com/quotes/random");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        displayQuote(data.quote, data.author);

    } catch (error) {
        showError("Failed to fetch quote. Check your internet connection.");
        console.error(error);
    } finally {
        hideLoading();
    }
}

// Display Quote
function displayQuote(quote, author) {
    quoteContainer.innerHTML = `
        <p>"${quote}"</p>
        <h4>- ${author}</h4>
    `;

    quoteContainer.classList.remove("show");
    void quoteContainer.offsetWidth; // reset animation
    quoteContainer.classList.add("show");
}

// UI Controls
function showLoading() {
    loading.classList.remove("hidden");
}

function hideLoading() {
    loading.classList.add("hidden");
}

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.remove("hidden");
}

function hideError() {
    errorDiv.classList.add("hidden");
}

// Event Listener
button.addEventListener("click", getQuote);

// Load initial quote
getQuote();