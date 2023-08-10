import { generatePlantData } from "./plantsConfig.js";

function getPlanName(plantName) {
  let foundPlant = null;

  Object.values(generatePlantData).some((lightGroup) => {
    foundPlant = lightGroup.find((plant) => plant.name === plantName);
    return !!foundPlant;
  });
  

  return foundPlant;
}

const createPlantCard = () => {
  generatePlantData((plantData) => {
    const cardContainer = document.getElementById('cardContainer');
    const plantName = plantData.name;

    const selectedPlant = getPlanName(plantName);

    if (selectedPlant) {
      const card = document.createElement('div');
      card.classList.add('plant-card');

      card.innerHTML = `
        <h2>Discover the perfect plant for you!</h2>
        <img src="${plantData.images.plant}" alt="${plantData.name}">
        <p>Name: ${plantData.name}</p>
        <p>Soil: ${plantData.soil}</p>
        <p>Pot: ${selectedPlant.potMaterial}</p>
        <p>Color: ${selectedPlant.potColor}</p>
        <p>Extra: ${selectedPlant.extras.join(', ')}</p>
      `;

      cardContainer.appendChild(card);
    }
  });
};

export default createPlantCard;