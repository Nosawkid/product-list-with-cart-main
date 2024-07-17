"use strict";
import { desserts, dessertHtml, cartHtml, confirmationHtml } from "./data.js";
const cart = [];

// Container that holds all the desserts
const dessertsContainer = document.querySelector("#desserts-container");
const cartDisplay = document.querySelector("#cart-items-display");
const confirmBtn = document.querySelector("#confirm-oder-btn");
const modal = document.querySelector("#modal");
const confirmationContainer = document.querySelector("#confirmation-container");
const newOrderBtn = document.querySelector("#new-oder-btn");

// Functions

// Add to cart

const addToCart = (e) => {
  const itemId = Number(e.currentTarget.getAttribute("data-id"));
  const item = desserts.find((el) => el.id === itemId);
  const existing = cart.find((el) => el.id === item.id);
  if (!existing) {
    cart.push({
      ...item,
      count: 1,
    });
  } else {
    existing.count++;
  }

  updateCart();
};

// TotalPriceCalc
const totalPriceCalculator = () =>
  cart.reduce((acc, obj) => acc + obj.count * obj.dessertPrice, 0);

// Total Price Display

const totalPriceDisplay = () => {
  const priceContainer = document.querySelector(
    "#total-price-details-container"
  );

  if (cart.length === 0) {
    priceContainer.classList.add("hidden");
  }

  priceContainer.classList.remove("hidden");

  if (cart.length === 0) {
    priceContainer.classList.add("hidden");
  }
};

// Decrement Item
const decrementItem = (id) => {
  const existing = cart.find((el) => el.id === id);
  if (existing.count === 1) {
    removeItem(existing.id);
    return updateCart();
  }
  existing.count--;
  updateCart();
};

// Remove item
function removeItem(id) {
  const index = cart.findIndex((item) => item.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
  }
  cartDisplay.innerHTML = "";
  updateCart();
}

// Render Cart
const renderCart = (item) => {
  const cartItem = document.createElement("div");
  cartItem.className = "flex items-center justify-between px-5 border-b-2 pb-5";
  cartItem.innerHTML = cartHtml(item);
  cartItem
    .querySelector("img[data-close]")
    .addEventListener("click", () => removeItem(item.id));
  cartDisplay.appendChild(cartItem);
  const decrement = cartItem.querySelector("#decrement");
  decrement.addEventListener("click", () => decrementItem(item.id));
};

// Confirm Items

const confirmOrder = () => {
  confirmationContainer.innerHTML = "";
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: smooth scrolling behavior
  });
  cart.forEach((el, index) => {
    confirmationContainer.innerHTML += confirmationHtml(el);
  });
  modal.classList.remove("hidden");
  document.querySelector("main").classList.add("blur-2xl");
};

// Rendering all items
desserts.forEach((dessert, index) => {
  dessertsContainer.innerHTML += dessertHtml(dessert);
});

// Adding items to cart
const dessertContainerBtns = document.querySelectorAll("#cart-btn-cover");
dessertContainerBtns.forEach((btn, index) => {
  btn.addEventListener("click", addToCart);
});

function updateCart() {
  totalPriceDisplay();
  cartDisplay.innerHTML = "";

  document.querySelector(
    "#total-price-checkout"
  ).textContent = `$${totalPriceCalculator()}`;

  const itemCount = document.querySelector("#item-count");
  itemCount.textContent = `(${cart.length})`;
  cart.forEach((item) => {
    renderCart(item);
  });
}

confirmBtn.addEventListener("click", confirmOrder);

document.querySelector("main").addEventListener("dblclick", () => {
  if (modal.classList.contains("hidden")) {
    return;
  }
  modal.classList.add("hidden");
  confirmationContainer.innerHTML = "";
  document.querySelector("main").classList.remove("blur-2xl");
});

newOrderBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});
