console.log("===== ARRAY AND OBJECT DEMONSTRATIONS =====");

// Arrays using literal notation and Array constructor
const fruits = ["apple", "banana", "orange"];
const numbers = new Array(10, 20, 30, 40);

console.log("Literal array:", fruits);
console.log("Constructor array:", numbers);

// Array methods: push, pop, shift, unshift
fruits.push("grape");
console.log("After push:", fruits);

fruits.pop();
console.log("After pop:", fruits);

fruits.shift();
console.log("After shift:", fruits);

fruits.unshift("mango");
console.log("After unshift:", fruits);

// Array iteration with for loop
console.log("For loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`Index ${i}: ${fruits[i]}`);
}

// Array iteration with for...of
console.log("For...of loop:");
for (const fruit of fruits) {
  console.log(fruit);
}

// Array iteration with forEach
console.log("forEach:");
fruits.forEach(function (fruit, index) {
  console.log(`Item ${index + 1}: ${fruit}`);
});

// Array method map
const upperCaseFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});
console.log("map result:", upperCaseFruits);

// Array method filter
const longFruits = fruits.filter(function (fruit) {
  return fruit.length > 5;
});
console.log("filter result:", longFruits);

// Object literal notation
const product = {
  id: 1,
  name: "Laptop",
  price: 899.99,
  category: "electronics"
};

console.log("Object:", product);

// Object property access
console.log("Dot notation:", product.name);
console.log("Bracket notation:", product["price"]);

// Add, modify, and delete object properties
product.brand = "TechPro";
console.log("After adding brand:", product);

product.price = 799.99;
console.log("After modifying price:", product);

delete product.category;
console.log("After deleting category:", product);

// Arrays of objects
const items = [
  { id: 1, name: "Laptop", price: 899.99, category: "electronics" },
  { id: 2, name: "T-Shirt", price: 19.99, category: "clothing" },
  { id: 3, name: "Book", price: 14.99, category: "books" },
  { id: 4, name: "Headphones", price: 59.99, category: "electronics" }
];

// filter with array of objects
const electronicsItems = items.filter(function (item) {
  return item.category === "electronics";
});
console.log("Filtered electronics:", electronicsItems);

// map with array of objects
const itemNames = items.map(function (item) {
  return item.name;
});
console.log("Mapped item names:", itemNames);

// reduce with array of objects
const totalPrice = items.reduce(function (total, item) {
  return total + item.price;
}, 0);
console.log("Reduced total price:", totalPrice.toFixed(2));