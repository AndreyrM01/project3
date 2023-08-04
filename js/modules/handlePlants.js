import Plants from './plants.js';
import getPlanName from './plantsConfig.js';

const getFormData = async () => {
  const lightInput = document.querySelector('input[name="light"]:checked');
  const sunlightInput = document.querySelector('input[name="sunlight"]:checked');
  const waterInput = document.querySelector('input[name="water"]:checked');
  const soilInput = document.querySelector('input[name="soil"]:checked');
  const potStyleInput = document.querySelector('input[name="potStyle"]:checked');
  const extrasInputs = document.querySelectorAll('input[name="extras"]:checked');

  if (
    !lightInput ||
    !sunlightInput ||
    !waterInput ||
    !soilInput ||
    !potStyleInput ||
    extrasInputs.length === 0
  ) {
    return null;
  }

  const data = {
    lightAmount: lightInput.value,
    toxicPlant: sunlightInput.value,
    waterAmount: waterInput.value,
    soil: soilInput.value,
    potStyle: potStyleInput.value,
    extras: [...extrasInputs].map((input) => input.value),
  };

  return data;
};

const setPlantName = ({ lightAmount, toxicPlant, waterAmount }) => {
  if (!lightAmount || !toxicPlant || !waterAmount) {
    return null;
  }

  const plantData = getPlanName[lightAmount][toxicPlant];
  const nameKey = waterAmount === 'overwater' ? 'overwater' : 'default';
  const name = plantData[nameKey];

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
  const formData = await getFormData();

  if (!formData) {
    return;
  }
  const name = setPlantName(formData);

  const plant = new Plants();

  plant.setName(name);
  plant.lightAmount = formData.lightAmount; // Corrección aquí
  plant.soilType(formData.soil);
  plant.potStyle(formData.potStyle);

  if (formData.toxicPlant === 'non_toxic') {
    plant.withPets();
  } else {
    plant.noPets();
  }

  if (formData.waterAmount === 'overwater') {
    plant.inClayPot();
  } else {
    plant.inCeramicPot();
  }

  if (formData.extras.length) {
    plant.addExtras(formData.extras);
  }

  renderResult(name);
};

export default plantsInfo;