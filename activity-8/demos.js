console.log("=== Part A: Async JavaScript Demo ===");

// setTimeout example
console.log("Start");

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

// Promise example
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 1000);
});

myPromise.then(result => {
    console.log(result);
});

// Async/Await example
async function asyncExample() {
    try {
        let result = await myPromise;
        console.log("Async/Await:", result);
    } catch (error) {
        console.error(error);
    }
}

asyncExample();

console.log("=== Part B: Fetch API Demo ===");

// Fetch with .then()
fetch("https://dummyjson.com/quotes/random")
    .then(response => response.json())
    .then(data => console.log("Fetch with then:", data))
    .catch(error => console.error("Fetch error:", error));

// Fetch with async/await
async function fetchQuoteDemo() {
    try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        const data = await response.json();
        console.log("Fetch with async/await:", data);
    } catch (error) {
        console.error(error);
    }
}

fetchQuoteDemo();