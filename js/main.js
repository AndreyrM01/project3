import plantsInfo from './modules/handlePlants.js';
import renderPlant from './modules/printPlant.js';

const initPlant = async () => {
  const plant = await plantsInfo();
  renderPlant(plant);
};

initPlant();

document.addEventListener('DOMContentLoaded', () => {
  const plantForm = document.getElementById('plant-form');
  const clearButton = document.querySelector('.clear');
  
  if (plantForm) {
    plantForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Evitar el envío del formulario
    
      const formData = new FormData(plantForm);
      const plant = {
        name: formData.get('plantName'),
        soil: formData.get('soilType'),
        // Agrega otras propiedades según tu formulario
      };
    
      renderPlant(plant);
    });
  }
  
  if (clearButton) {
    clearButton.addEventListener('click', () => {
      if (plantForm) {
        plantForm.reset();
      }
      const container = document.getElementById('card-container');
      container.innerHTML = '';
    });
  }
});

const getYourPlantButton = document.getElementById('getYourPlant');
const form = document.getElementById('formPlants');

getYourPlantButton.addEventListener('click', (event) => {
  event.preventDefault();

  // Recopilar los datos del formulario
  const light = form.querySelector('input[name="light"]:checked').value;
  const sunlight = form.querySelector('input[name="sunlight"]:checked').value;
  const pets = form.querySelector('input[name="pets"]:checked').value;
  const water = form.querySelector('input[name="water"]:checked').value;
  const style = form.querySelector('input[name="style"]:checked').value;

  const extras = [];
  const checkboxes = form.querySelectorAll('input[name="somethingElse"]:checked');
  checkboxes.forEach((checkbox) => {
    extras.push(checkbox.value);
  });

  // Crear el objeto de datos de planta usando la notación de propiedad abreviada
  const plantData = {
    light,
    sunlight,
    pets,
    water,
    style,
    extras
  };

  // Generar y mostrar la tarjeta de planta
  renderPlant(plantData);
});