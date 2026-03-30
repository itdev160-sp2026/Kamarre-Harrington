const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 89.99,
    category: "electronics",
    image: "https://via.placeholder.com/300x200?text=Headphones"
  },
  {
    id: 2,
    name: "Classic T-Shirt",
    description: "Comfortable cotton t-shirt for everyday wear.",
    price: 24.99,
    category: "clothing",
    image: "https://via.placeholder.com/300x200?text=T-Shirt"
  },
  {
    id: 3,
    name: "JavaScript Basics",
    description: "A beginner-friendly book for learning JavaScript.",
    price: 19.99,
    category: "books",
    image: "https://via.placeholder.com/300x200?text=Book"
  },
  {
    id: 4,
    name: "Smart Watch",
    description: "Track fitness, notifications, and daily activity easily.",
    price: 129.99,
    category: "electronics",
    image: "https://via.placeholder.com/300x200?text=Smart+Watch"
  },
  {
    id: 5,
    name: "Denim Jacket",
    description: "Stylish denim jacket perfect for casual outfits.",
    price: 59.99,
    category: "clothing",
    image: "https://via.placeholder.com/300x200?text=Denim+Jacket"
  }
];

const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const resultsCount = document.getElementById("resultsCount");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");

function generateProductCard(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <span class="product-category">${product.category}</span>
      </div>
    </div>
  `;
}

function displayProducts(productList) {
  productGrid.innerHTML = "";

  if (productList.length === 0) {
    productGrid.innerHTML = `
      <div class="no-results">
        <h2>No products found</h2>
        <p>Try changing your search or filter.</p>
      </div>
    `;
    resultsCount.textContent = "Showing 0 products";
    return;
  }

  productList.forEach(function (product) {
    productGrid.innerHTML += generateProductCard(product);
  });

  resultsCount.textContent = `Showing ${productList.length} product${productList.length !== 1 ? "s" : ""}`;
}

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;

  const filteredProducts = products.filter(function (product) {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  displayProducts(filteredProducts);
}

function clearFilters() {
  searchInput.value = "";
  categoryFilter.value = "all";
  displayProducts(products);
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
clearFiltersBtn.addEventListener("click", clearFilters);

displayProducts(products);