import createPlantCard from "./modules/printPlant.js";

document.addEventListener("DOMContentLoaded", () => {
  const plantForm = document.getElementById("formPlants");
  const clearButton = document.querySelector(".clear");

  if (plantForm) {
    plantForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(plantForm);
      const plant = {
        lowLight: formData.get("lowLight"),
        directSunlight: formData.get("directSunlight"),
        hasPets: formData.get("hasPets"),
        overwater: formData.get("overwater"),
        somethingElse: formData.getAll("somethingElse"),
      };

      createPlantCard(plant);
    });
  }

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      if (plantForm) {
        plantForm.reset();
      }
      const container = document.getElementById("cardContainer");
      container.innerHTML = "";
    });
  }
});
