// BACK BUTTON

function goBack() {
  window.history.back();
}

// MOBILE BACK BUTTON SUPPORT

window.onpopstate = function () {
  console.log("Back button pressed");
};

// BUY BUTTON

const buyButton = document.querySelector(".buy");

buyButton.addEventListener("click", () => {
  alert("Buy Shares feature coming soon.");
});

// SELL BUTTON

const sellButton = document.querySelector(".sell");

sellButton.addEventListener("click", () => {
  alert("Sell Shares feature coming soon.");
});
