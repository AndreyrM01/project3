// En "previewMain.js"
import { createCustomizableCard } from "./modules/previewCard.js";
import potChange from "./modules/potChanges.js";
import initializeCardUpdater from "./modules/updateCard.js";

document.addEventListener("DOMContentLoaded", () => {
  initializeCardUpdater();
});

const card = createCustomizableCard();

potChange.subscribe(() => {
  card.update();
});

document.querySelectorAll('input[type="radio"], select').forEach((input) => {
  input.addEventListener('change', (event) => {
    const { name, value } = event.target;
    potChange.publish({ type: name, value });
  });
});
