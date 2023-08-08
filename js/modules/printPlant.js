// Import the necessary functions
import getPlantData from './form.js';
import getPlanName from './plantsConfig.js';

const createPlantCard = () => {
  getPlantData((plantData) => {
    const plantName = plantData.name;

    // Get plant configuration by light
    const separatePlantsByLight = getPlanName();

    // Find the plant in the configuration using array iteration
    let selectedPlant = null;
    const lightGroups = Object.values(separatePlantsByLight);
  
    lightGroups.some((lightGroup) => {
      selectedPlant = lightGroup.find((plant) => plant.name === plantName);
      return selectedPlant;
    });

    // Create a card with the data of the selected plant
    if (selectedPlant) {
      const cardContainer = document.getElementById('cardContainer');

      const card = document.createElement('div');
      card.classList.add('plant-card');

      card.innerHTML = `
        <h2>Discover the perfect plant for you!</h2>
        <img src="${plantData.images.plant}" alt="${plantData.name}">
        <p>Name: ${plantData.name}</p>
        <p>Soil: ${selectedPlant.soilType}</p>
        <p>Pot: ${selectedPlant.potMaterial}</p>
        <p>Color: ${selectedPlant.potColor}</p>
        <p>Extra: ${selectedPlant.extras.join(', ')}</p>
      `;

      cardContainer.appendChild(card);
    }
  });
};

export default createPlantCard;
