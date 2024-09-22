const donationButton = document.getElementById("btn-donation");
const historyButton = document.getElementById("btn-history");
const historySection = document.getElementById("history-section");
const cards = document.getElementById("cards");

// Toggle Button Donate
document.getElementById("btn-donation").addEventListener("click", function () {
  // donationButton.classList.add("bg-primary-color");
  // donationButton.classList.remove("btn-outline");

  // historyButton.classList.remove("bg-primary-color");
  // historyButton.classList.add("btn-outline");
  historySection.classList.add("hidden");
  cards.classList.remove("hidden");
  activeButton("btn-donation");
  disableButton("btn-history");
});
// Toggle Button History
document.getElementById("btn-history").addEventListener("click", function () {
  // historyButton.classList.add("bg-primary-color");
  // historyButton.classList.remove("btn-outline");
  // donationButton.classList.remove("bg-primary-color");
  // donationButton.classList.add("btn-outline");

  cards.classList.add("hidden");
  historySection.classList.remove("hidden");

  activeButton("btn-history");
  disableButton("btn-donation");
});

// Noakhali card
document
  .getElementById("noakhli-donate-now")
  .addEventListener("click", function () {
    const donateAmount = getInputValueById("input-noakhali");
    // if (donateAmount === "number") {
    //   alert("Please Type valid amount ");
    //   document.getElementById("noakhli-donate-now").onclick = null;
    //   document.getElementById("noakhli-donate-now").removeAttribute("onclick");

    //   return;
    // }

    const cardAmount = getTextValueById("amount-noakhali");
    const mainBalance = getTextValueById("main-balance");

    const totalDonateAmount = cardAmount + donateAmount;
    document.getElementById("amount-noakhali").innerText = totalDonateAmount;
    document.getElementById("input-noakhali").value = "";

    document.getElementById("main-balance").innerText =
      mainBalance - donateAmount;
  });

document
  .getElementById("feni-donate-now")
  .addEventListener("click", function () {
    const donateAmount = getInputValueById("input-feni");
    const cardAmount = getTextValueById("amount-feni");
    const mainBalance = getTextValueById("main-balance");

    const totalDonateAmount = cardAmount + donateAmount;
    document.getElementById("amount-feni").innerText = totalDonateAmount;
    document.getElementById("input-feni").value = "";

    document.getElementById("main-balance").innerText =
      mainBalance - donateAmount;
  });
document
  .getElementById("quota-donate-now")
  .addEventListener("click", function () {
    const donateAmount = getInputValueById("input-quota");
    const cardAmount = getTextValueById("amount-quota");
    const mainBalance = getTextValueById("main-balance");

    const totalDonateAmount = cardAmount + donateAmount;
    document.getElementById("amount-quota").innerText = totalDonateAmount;
    document.getElementById("input-quota").value = "";

    document.getElementById("main-balance").innerText =
      mainBalance - donateAmount;
  });
