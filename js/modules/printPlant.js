import { generatePlantData } from "./plantsConfig.js";
import getFormData from "./form.js";

function createPlantCard() {
  const cardContainer = document.getElementById("cardContainer");

  getFormData("formPlants", (formData) => {
    cardContainer.innerHTML = "";

    const selectedPlant = generatePlantData(formData);

    if (selectedPlant) {
      const card = document.createElement("div");
      card.classList.add("plant-card");

      let plantImageSrc = "";

      // Set the image source based on the selected plant
      if (selectedPlant.name === "Peace Lily") {
        plantImageSrc = "../../images/plants/plant-peace-lily.png";
      } else if (selectedPlant.name === "Boston Fern") {
        plantImageSrc = "../../images/plants/plant-boston-fern.png";
      } else if (selectedPlant.name === "Aloe Vera") {
        plantImageSrc = "../../images/plants/plant-aloe-vera.png";
      } else {
        plantImageSrc = `../../images/plants/plant-${selectedPlant.name.toLowerCase()}.png`;
      }

      let extrasImageSrc = "";
      if (Array.isArray(selectedPlant.extras)) {
        extrasImageSrc = `/images/extras/${selectedPlant.extras.join('-').toLowerCase()}.png`;
      }

      let potImageSrc = "";
      if (selectedPlant.pot.material) {
        const potMaterial = selectedPlant.pot.material
          .toLowerCase()
          .replace(" ", "-");
        const potDecoration = selectedPlant.pot.decoration;

        switch (potDecoration) {
          case "minimalism":
            potImageSrc = `/images/pots/simple-${potMaterial}-pot.png`;
            break;
          case "addDecoration":
            potImageSrc = `/images/pots/simple-${potMaterial}-pot-decorated.png`;
            break;
          case "aLotDecoration":
            potImageSrc = `/images/pots/painted-${potMaterial}-pot-decorated.png`;
            break;
          default:
            break;
        }
      }

      let soilImageSrc = "";
      switch (selectedPlant.soilType.toLowerCase()) {
        case "composted soil":
          soilImageSrc = "/images/soil/soil-composted.png";
          break;
        case "fertilized soil":
          soilImageSrc = "/images/soil/soil-fertilized.png";
          break;
        default:
          soilImageSrc = "/images/soil/soil-standard.png";
          break;
      }

      card.innerHTML = `
        <div class="card_container">
          <div class="plantTitle">
            <h2 class="card_title">Discover the perfect plant for you is ...</h2>
            <p class="firstTitle">${selectedPlant.name}</p>
          </div>
          <div class="imagesContainer">
          <img src="${plantImageSrc}" alt="${
            selectedPlant.name
          }" class="img plant">
          <img src="${extrasImageSrc}" alt="" class="img extras">
          <img src="${soilImageSrc}" alt="${
            selectedPlant.soilType
          }" class="img soil">
          <img src="${potImageSrc}" alt="" class="img pot">
          </div>
          <ul class="cardInfo">
            <li><p class="pInfo">Name: <span>${
              selectedPlant.name.charAt(0).toUpperCase() +
              selectedPlant.name.substring(1)
            }</span> </p></li>
            <li><p class="pInfo">Soil: <span>${
              selectedPlant.soilType.charAt(0).toUpperCase() +
              selectedPlant.soilType.substring(1)
            }</span> </p></li>
            <li><p class="pInfo">Pot Material: <span>${
              selectedPlant.pot.material.charAt(0).toUpperCase() +
              selectedPlant.pot.material.substring(1)
            }</span> </p></li>
            <li><p class="pInfo">Decoration: <span>${
              selectedPlant.pot.decoration.charAt(0).toUpperCase() +
              selectedPlant.pot.decoration.substring(1)
            }</span></p></li>
            <li><p class="pInfo">Extras: <span>${
              Array.isArray(selectedPlant.extras)
                ? selectedPlant.extras
                    .map(
                      (extra) =>
                        `${extra.charAt(0).toUpperCase()}${extra.substring(1)}`,
                    )
                    .join(", ")
                : ""
            }</span> </p></li>
          </ul>
        </div>
        <a href="../../customizePlant.html" class="btn get-plants customize" id="customize" >Customize!</a>
      `;

      cardContainer.appendChild(card);
    }
  });
}

export default createPlantCard;
