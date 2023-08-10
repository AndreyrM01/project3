import createPlantCard from "./printPlant.js";

function getFormData(formId) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const light = document.getElementById('lowLight').value;
    const sunlight = document.getElementById('directSunlight').value;
    const pets = document.getElementById('hasPets').value;
    const water = document.getElementById('overwater').value;
    const extrasInputs = document.querySelectorAll('input[name="somethingElse"]:checked');
    const extras = Array.from(extrasInputs).map(input => input.value);

    const formData = {light, sunlight, pets, water, extras};
    return formData;
  });
}

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

export default getFormData;