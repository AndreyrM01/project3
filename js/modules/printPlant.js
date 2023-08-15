import { generatePlantData }  from "./plantsConfig.js";
import getFormData from "./form.js";

function createPlantCard() {
  const cardContainer = document.getElementById('cardContainer');

  getFormData('formPlants', (formData) => {
    const selectedPlant = generatePlantData(formData);

    if (selectedPlant) {
      const card = document.createElement('div');
      card.classList.add('plant-card');

      let plantImageSrc = '';

      // Set the image source based on the selected plant
      if (selectedPlant.name === 'Peace Lily') {
        plantImageSrc = '../../images/plants/plant-peace-lily.png';
      } else if (selectedPlant.name === 'Boston Fern') {
        plantImageSrc = '../../images/plants/plant-boston-fern.png';
      } else if (selectedPlant.name === 'Aloe Vera') {
        plantImageSrc = '../../images/plants/plant-aloe-vera.png';
      } else {
        plantImageSrc = `../../images/plants/plant-${selectedPlant.name.toLowerCase()}.png`;
      }

      let extrasImageSrc = '';
      let potImageSrc = '';

      if (Array.isArray(selectedPlant.extras)) {
        extrasImageSrc = `/images/extras/${selectedPlant.extras.join('-').toLowerCase()}.png`;
      }
  
        if (selectedPlant.pot.material) {
          potImageSrc = `/images/pots/simple-${selectedPlant.pot.material.toLowerCase().replace(' ', '-')}-pot.png`;
        }

     card.innerHTML = `
        <h2>Discover the perfect plant for you is ...</h2>
        <p>Name: ${selectedPlant.name}</p>
        <img src="${plantImageSrc}" alt="${selectedPlant.name}">
        <img src="${extrasImageSrc}" alt="">
        <img src="${potImageSrc}" alt="">
        <p>Name: ${selectedPlant.name}</p>
        <p>Soil: ${selectedPlant.soil}</p>
        <p>Pot Material: ${selectedPlant.pot.material}</p>
        <p>Pot Decoration: ${selectedPlant.pot.decoration}</p>
        <p>Extras: ${selectedPlant.extras}</p>
      `;

      cardContainer.appendChild(card);
    }
  });
}

export default createPlantCard;
