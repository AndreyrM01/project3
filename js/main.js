import getPlantData from "./modules/form.js";
import renderPlant from "./modules/printPlant.js";

const initPlant = async () => {
  const plant = await getPlantData();
  renderPlant(plant);
};

initPlant();

document.addEventListener("DOMContentLoaded", () => {
  const plantForm = document.getElementById("plant-form");
  const clearButton = document.querySelector(".clear");

  if (plantForm) {
    plantForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Evitar el envío del formulario

      const formData = new FormData(plantForm);
      const plant = {
        name: formData.get("plantName"),
        soil: formData.get("soilType"),
      };

      renderPlant(plant);
    });
  }

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      if (plantForm) {
        plantForm.reset();
      }
      const container = document.getElementById("card-container");
      container.innerHTML = "";
    });
  }
});

