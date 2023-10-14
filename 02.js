const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");

close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});

open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});

// Additional code for handling Craft and Buy buttons can be added here
document.querySelectorAll('.craft-button').forEach(function (button) {
    button.addEventListener('click', function () {
        alert('Crafting: ' + button.parentElement.querySelector('h2').textContent);
    });
});

document.querySelectorAll('.buy-button').forEach(function (button) {
    button.addEventListener('click', function () {
        alert('Adding to Cart: ' + button.parentElement.querySelector('h2').textContent);
    });
});
// JavaScript code to handle button clicks and update counts
document.addEventListener("DOMContentLoaded", function () {
  // Initialize buy and craft counts to 0
  let buyCount = 0;
  let craftCount = 0;

  // Function to update the buy count
  function updateBuyCount() {
    document.getElementById("buy-count").textContent = buyCount;
  }

  // Function to update the craft count
  function updateCraftCount() {
    document.getElementById("craft-count").textContent = craftCount;
  }

  // Add event listeners to Buy buttons
  const buyButtons = document.querySelectorAll(".buy-button");
  buyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      buyCount++; // Increment buy count
      updateBuyCount(); // Update the displayed count
    });
  });

  // Add event listeners to Craft buttons
  const craftButtons = document.querySelectorAll(".craft-button");
  craftButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      craftCount++; // Increment craft count
      updateCraftCount(); // Update the displayed count
    });
  });
});
function showSearchResults() {
    var userInput = document.getElementById("input").value;
    var searchResults = document.getElementById("search-results");

    // Clear the previous search results
    searchResults.innerHTML = "";

    // Perform your search logic or fetch results from an API here
    // For this example, let's simulate a list of products
    var products = ["Shoes", "Shirt", "Shorts", "Socks", "Hat", "Sandals"];

    // Filter products based on the user's input
    var filteredProducts = products.filter(function(product) {
      return product.toLowerCase().includes(userInput.toLowerCase());
    });

    // Display the filtered results
    filteredProducts.forEach(function(product) {
      var li = document.createElement("li");
      li.textContent = product;
      searchResults.appendChild(li);
    });
  }
  