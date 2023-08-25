// import storage from "./localStorage.js";
// import Card from "./previewOptions.js";
// import potChange from "./potChanges.js";

// function createCustomizableCard() {
//   const cardContainer = document.getElementById("newCardContainer");

//   if (!cardContainer) {
//     return;
//   }

//   const card = new Card(cardContainer);

//   const originalCard = storage.getItem("originalCard");

//   if (originalCard) {
//     let cardElement = cardContainer.querySelector(".custom-card");

//     if (!cardElement) {
//       cardElement = document.createElement("div");
//       cardElement.classList.add("custom-card");
//       cardElement.innerHTML = originalCard;
//       cardContainer.appendChild(cardElement);
//     }

//     const selectedPlant = JSON.parse(storage.getItem("selectedPlant"));
//     const plantImageSrc = storage.getItem("plantImageSrc");
//     const extrasImageSrc = storage.getItem("extrasImageSrc");
//     const soilImageSrc = storage.getItem("soilImageSrc");
//     const potImageSrc = storage.getItem("potImageSrc");

//     const h2Element = cardElement.querySelector(".card_title");
//     h2Element.textContent = "Preview";

//     if (selectedPlant) {
//       const firstTitleElement = cardElement.querySelector(".firstTitle");
//       firstTitleElement.textContent = selectedPlant.name;

//       const plantImageElement = cardElement.querySelector(".img.plant");
//       plantImageElement.src = plantImageSrc;
//       plantImageElement.alt = selectedPlant.name;

//       const extrasImageElement = cardElement.querySelector(".img.extras");
//       extrasImageElement.src = extrasImageSrc;

//       const soilImageElement = cardElement.querySelector(".img.soil");
//       soilImageElement.src = soilImageSrc;
//       soilImageElement.alt = selectedPlant.soilType;

//       const potImageElement = cardElement.querySelector(".img.pot");
//       potImageElement.src = potImageSrc;

//       // Update card info
//       const cardInfoElement = cardElement.querySelector(".cardInfo");
//       cardInfoElement.innerHTML = `
//         <li><p class="pInfo">Name: <span>${selectedPlant.name}</span></p></li>
//         <li><p class="pInfo">Soil: <span>${selectedPlant.soilType}</span></p></li>
//         <li><p class="pInfo">Pot Material: <span>${selectedPlant.pot.material}</span></p></li>
//         <li><p class="pInfo">Decoration: <span>${selectedPlant.pot.decoration}</span></p></li>
//         <li><p class="pInfo">Extras: <span>${selectedPlant.extras.join(", ")}</span></p></li>
//       `;
//     }
//   }

//   function handleInputChange(event) {
//     const { name } = event.target;
  
//     if (card && card.update) {
//       if (name === "clay" || name === "ceramic") {
//         const selectedMaterial = name === "clay" ? "Clay" : "Ceramic";
        
//         potChange.notify({ type: 'material', value: selectedMaterial });
//       }
//     }
//   }
  
//   const inputElements = document.querySelectorAll('input[type="radio"], select');

//   inputElements.forEach((inputElement) => {
//     inputElement.addEventListener('change', handleInputChange);
//   });
// }

// export function setupCustomizeCard() {
//   window.addEventListener("DOMContentLoaded", () => {
//     createCustomizableCard();

//     const customizeButton = document.getElementById("customize");
//     if (customizeButton) {
//       customizeButton.addEventListener("click", () => {
//         const cardElement = document.querySelector(".card_container");
//         storage.setItem("originalCard", cardElement.innerHTML);
//       });
//     }
//   });
// }

// export default createCustomizableCard;

// import storage from "./localStorage.js";
// import Card from "./previewOptions.js";

// function createCustomizableCard() {
//   const cardContainer = document.getElementById("cardContainer");

//   const originalCard = storage.getItem("originalCard");

//   if (originalCard) {
//     let cardElement = cardContainer.querySelector(".custom-card");
//     if (!cardElement) {
//       cardElement = document.createElement("div");
//       cardElement.classList.add("custom-card");
//       cardElement.innerHTML = originalCard;
//       cardContainer.appendChild(cardElement);
//     }

//     const selectedPlant = JSON.parse(storage.getItem("selectedPlant"));
//     const plantImageSrc = storage.getItem("plantImageSrc");
//     const extrasImageSrc = storage.getItem("extrasImageSrc");
//     const soilImageSrc = storage.getItem("soilImageSrc");
//     const potImageSrc = storage.getItem("potImageSrc");

//     const h2Element = cardElement.querySelector(".card_title");
//     h2Element.textContent = "Preview";

//     const firstTitleElement = cardElement.querySelector(".firstTitle");
//     firstTitleElement.textContent = selectedPlant.name;

//     const plantImageElement = cardElement.querySelector(".img.plant");
//     plantImageElement.src = plantImageSrc;
//     plantImageElement.alt = selectedPlant.name;

//     const extrasImageElement = cardElement.querySelector(".img.extras");
//     extrasImageElement.src = extrasImageSrc;

//     const soilImageElement = cardElement.querySelector(".img.soil");
//     soilImageElement.src = soilImageSrc;
//     soilImageElement.alt = selectedPlant.soilType;

//     const potImageElement = cardElement.querySelector(".img.pot");
//     potImageElement.src = potImageSrc;

//     const cardInfoElement = cardElement.querySelector(".cardInfo");
//     cardInfoElement.innerHTML = `
//       <li><p class="pInfo">Name: <span>${selectedPlant.name}</span></p></li>
//       <li><p class="pInfo">Soil: <span>${selectedPlant.soilType}</span></p></li>
//       <li><p class="pInfo">Pot Material: <span>${selectedPlant.pot.material}</span></p></li>
//       <li><p class="pInfo">Decoration: <span>${selectedPlant.pot.decoration}</span></p></li>
//       <li><p class="pInfo">Extras: <span>${selectedPlant.extras.join(", ")}</span></p></li>
//     `;
//   }

//   const card = new Card('cardContainer');

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     const element = document.getElementById(name);
    
//     if (element) {
//     } else {
//     }
//   };

//   document.querySelectorAll('input[type="radio"], select').forEach((input) => {
//     input.addEventListener('change', handleInputChange);
//   });

//   return card;
// }

// document.addEventListener("DOMContentLoaded", () => {
//   createCustomizableCard();

//   document.getElementById("cardContainer").addEventListener("click", (event) => {
//     if (event.target.id === "customize") {
//       const cardElement = document.querySelector(".card_container");
//       storage.setItem("originalCard", cardElement.innerHTML);
//     }
//   });
// });

// export default createCustomizableCard;

import storage from "./localStorage.js";
import Card from "./previewOptions.js";
// import potChange from "./potChanges.js";

const fieldMappings = {
  clay: 'material',
  ceramic: 'material',
  decorationNo: 'decoration',
  decorationSi: 'decoration',
  colorNo: 'color',
  colorSi: 'color',
  basic: 'soil',
  premium: 'soil',
  drainage: 'soil',
  plants: 'plant',
  mossPole: 'extras',
  pebbles: 'extras',
  smallDecorative: 'extras'
};


function createCustomizableCard() {
  const cardContainer = document.getElementById("newCardContainer");

  if (!cardContainer) {
    return;
  }

  const card = new Card(cardContainer);

  const originalCard = storage.getItem("originalCard");

  if (originalCard) {
    let cardElement = cardContainer.querySelector(".custom-card");

    if (!cardElement) {
      cardElement = document.createElement("div");
      cardElement.classList.add("custom-card");
      cardElement.innerHTML = originalCard;
      cardContainer.appendChild(cardElement);
    }

    const selectedPlant = JSON.parse(storage.getItem("selectedPlant"));
    const plantImageSrc = storage.getItem("plantImageSrc");
    const extrasImageSrc = storage.getItem("extrasImageSrc");
    const soilImageSrc = storage.getItem("soilImageSrc");
    const potImageSrc = storage.getItem("potImageSrc");

    const h2Element = cardElement.querySelector(".card_title");
    h2Element.textContent = "Preview";

    if (selectedPlant) {
      const firstTitleElement = cardElement.querySelector(".firstTitle");
      firstTitleElement.textContent = selectedPlant.name;

      const plantImageElement = cardElement.querySelector(".img.plant");
      plantImageElement.src = plantImageSrc;
      plantImageElement.alt = selectedPlant.name;

      const extrasImageElement = cardElement.querySelector(".img.extras");
      extrasImageElement.src = extrasImageSrc;

      const soilImageElement = cardElement.querySelector(".img.soil");
      soilImageElement.src = soilImageSrc;
      soilImageElement.alt = selectedPlant.soilType;

      const potImageElement = cardElement.querySelector(".img.pot");
      potImageElement.src = potImageSrc;

      const cardInfoElement = cardElement.querySelector(".cardInfo");
      cardInfoElement.innerHTML = `
        <li><p class="pInfo">Name: <span>${selectedPlant.name}</span></p></li>
        <li><p class="pInfo">Soil: <span>${selectedPlant.soilType}</span></p></li>
        <li><p class="pInfo">Pot Material: <span>${selectedPlant.pot.material}</span></p></li>
        <li><p class="pInfo">Decoration: <span>${selectedPlant.pot.decoration}</span></p></li>
        <li><p class="pInfo">Extras: <span>${selectedPlant.extras.join(", ")}</span></p></li>
      `;
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
  
    if (card && card.update) {
      const fieldType = fieldMappings[name];
      if (fieldType) {
        card.update({ type: 'material', value });
      }
    }
  }
  
  const inputElements = document.querySelectorAll('input[type="radio"], select');

  inputElements.forEach((inputElement) => {
    inputElement.addEventListener('change', handleInputChange);
  });

  return card;
}

export function setupCustomizeCard() {
  window.addEventListener("DOMContentLoaded", () => {
    createCustomizableCard();

    const customizeButton = document.getElementById("customize");
    if (customizeButton) {
      customizeButton.addEventListener("click", () => {
        const cardElement = document.querySelector(".card_container");
        storage.setItem("originalCard", cardElement.innerHTML);
      });
    }
  });
}

export {
  createCustomizableCard, 
  fieldMappings,
};
