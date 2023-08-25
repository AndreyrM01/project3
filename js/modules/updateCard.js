import Card  from "./previewOptions.js"; 

function initializeCardUpdater() {
  const card = new Card("customCard");

  function updateCard() {
    const potMaterial = document.querySelector('input[name="clay"]:checked')
      ? "Clay"
      : "Ceramic";
    const potDecoration = document.querySelector('input[name="decoration"]:checked')
      ? "Si"
      : "No";
    const potColor = document.querySelector('input[name="color"]:checked')
      ? "Si"
      : "No";

    card.update({ type: "material", value: potMaterial });
    card.update({ type: "decoration", value: potDecoration });
    card.update({ type: "color", value: potColor });
  }

  const customizeForm = document.getElementById("customizeForm");
  if (customizeForm) {
    customizeForm.addEventListener("change", updateCard);
  }
}

export default initializeCardUpdater;