import storage from "./localStorage.js";

function createCustomizableCard() {
  const cardContainer = document.getElementById("cardContainer");

  const originalCard = storage.getItem("originalCard");

  if (originalCard) {
    let card = cardContainer.querySelector(".custom-card");
    if (!card) {
      card = document.createElement("div");
      card.classList.add("custom-card");
      card.innerHTML = originalCard;
      cardContainer.appendChild(card);
    }

    const h2Element = card.querySelector(".card_title");
    h2Element.textContent = "Preview";
    h2Element.contentEditable = true;
    h2Element.addEventListener("input", () => {
      storage.setItem("originalCard", card.innerHTML);
    });
  }

  const cardElement = document.querySelector(".card_container");
  if (cardElement) {
    cardElement.classList.add("customized_card");
  }

  const imagesContainerElement = document.querySelector(".imagesContainer");
  if (imagesContainerElement) {
    imagesContainerElement.classList.add("containerImgCustomize");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createCustomizableCard();

  document.getElementById("cardContainer").addEventListener("click", (event) => {
    if (event.target.id === "customize") {
      const cardElement = document.querySelector(".card_container");
      storage.setItem("originalCard", cardElement.innerHTML);
    }
  });
});

export default createCustomizableCard;
