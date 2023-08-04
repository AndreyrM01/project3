// import handlePlantSelection from './modules/handlePlants.js';
// import createDynamicCard from './modules/printPlant.js';

// document.addEventListener("DOMContentLoaded", () => {
//   const getPlantsButton = document.querySelector(".get-plants");
//   const cardContainer = document.getElementById("card-container");

//   getPlantsButton.addEventListener("click", () => {
//     const selectedAnswers = handlePlantSelection(); // Obtener las respuestas seleccionadas
//     createDynamicCard(selectedAnswers); // Crear el HTML del card con las respuestas seleccionadas
//   });  
// });

// createDynamicCard();
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formPlants");
  const getBtn = document.getElementById("getYourPlant");
  const clearBtn = document.querySelector(".clear");
  const cardContainer = document.getElementById("card-container");

  function getSelectedOption(name) {
    const selection = form.querySelector(`input[name="${name}"]:checked`);
    return selection ? selection.value : null;
  }

  function getRecommendedPlantType(place) {
    if (place === "Inside, with some indirect light") {
      return "Low Light Plants";
    } else if (place === "Inside, with a lot indirect light") {
      return "Medium Light Plants";
    } else if (place === "Ouside") {
      return "Outdoor Plants";
    }
    return "";
  }

  function getPlantRecommendation() {
    const placeSelection = getSelectedOption("light");
    const sunlightSelection = getSelectedOption("sunlight");
    const petsSelection = getSelectedOption("pets");
    const waterSelection = getSelectedOption("water");
    const styleSelection = getSelectedOption("style");
    const extrasSelections = Array.from(document.querySelectorAll('input[name="somethingElse"]:checked')).map(el => el.value);

    if (!placeSelection || !sunlightSelection || !petsSelection || !waterSelection || !styleSelection) {
      // Handle error or show a message to the user
      return;
    }

    const recommendedPlantType = getRecommendedPlantType(placeSelection);
    const recommendedPlants = plantData[recommendedPlantType]; // Assuming 'plantData' is still available

    const randomIndex = Math.floor(Math.random() * recommendedPlants.length);
    const recommendedPlant = recommendedPlants[randomIndex];

    const recommendation = `
      <div class="plant-info">
        <h2>Plant Recommendation</h2>
        <p>Name: ${recommendedPlant.name}</p>
        <p>Soil Type: ${recommendedPlant.soilType}</p>
        <p>Pot Details: ${recommendedPlant.potMaterial} pot with ${recommendedPlant.potStyle} decorations, ${recommendedPlant.potColor} color</p>
        <p>Extras: ${recommendedPlant.extras.join(", ")}</p>
      </div>
    `;

    cardContainer.innerHTML = recommendation;
  }

  function clearForm() {
    form.reset();
    cardContainer.innerHTML = "";
  }

  getBtn.addEventListener("click", getPlantRecommendation);
  clearBtn.addEventListener("click", clearForm);
});
