import createPlantCard from './modules/printPlant.js';
import getFormData from './modules/form.js';

document.addEventListener('DOMContentLoaded', () => {
  createPlantCard();

  const plantForm = document.getElementById('formPlants');
  const submitButton = plantForm.querySelector("[type='submit']");
  const clearButton = document.querySelector('.clear');

  if (plantForm) {
    plantForm.addEventListener('submit', (event) => {
      event.preventDefault();

      submitButton.disabled = true;

      getFormData('formPlants', (formData) => {
        createPlantCard(formData);

        submitButton.disabled = false;
      });
    });
  }

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      if (plantForm) {
        plantForm.reset();
      }

      const container = document.getElementById('cardContainer');
      container.innerHTML = '';
      submitButton.disabled = false;
    });
  }
});

