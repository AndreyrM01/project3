import Plants from './plants.js';
import separatePlantsByLight from './plantsConfig.js';

const getFormData = async () => {
  const lightAmount = document.querySelector('input[name="light"]:checked').id;
  const toxicPlant = document.querySelector('input[name="sunlight"]:checked').id;
  const waterAmount = document.querySelector('input[name="water"]:checked').id;
  const soil = document.querySelector('input[name="style"]:checked').id;
  const potStyle = document.querySelector('input[name="pets"]:checked').id;
  const extras = [...document.querySelectorAll('input[name="somethingElse"]:checked')].map(el => el.id);

  return {
    lightAmount,
    toxicPlant,
    waterAmount,
    soil,
    potStyle,
    extras
  };
};

const setPlantName = ({ lightAmount, toxicPlant, waterAmount }) => {
  const name = separatePlantsByLight[lightAmount][toxicPlant][waterAmount === 'overwater' ? 'overwater' : 'default'];
  return name;
};

const renderResult = (name) => {
  const resultContainer = document.getElementById('result-container');
  const resultPlaceholder = document.createElement('p');
  resultPlaceholder.textContent = name;
  resultContainer.innerHTML = '';
  resultContainer.appendChild(resultPlaceholder);
  resultContainer.style.display = 'block';
};

const plantsInfo = async () => {
  const data = await getFormData();
  const plant = new Plants();
  const name = setPlantName(data);

  plant.setName(name);
  plant.lightAmount(data.lightAmount);
  plant.soilType(data.soil);
  plant.potStyle(data.potStyle);

  if (data.toxicPlant === 'non_toxic') {
    plant.withPets();
  } else {
    plant.noPets();
  }

  if (data.waterAmount === 'overwater') {
    plant.inClayPot();
  } else {
    plant.inCeramicPot();
  }

  if (data.extras.length) {
    plant.addExtras(data.extras);
  }

  renderResult(name);

  return plant;
};

document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.addEventListener('click', plantsInfo);
});
