// import Publisher from "./Publisher.js";

// const potChange = new Publisher();

// const handlePotMaterialChange = (event) => {
//   const newMaterial = event.target.value;
//   potChange.publish({ type: 'material', value: newMaterial });
// }

// const handlePotColor = (event) => {
//   const newColor = event.target.value;
//   potChange.publish({ type: 'color', value: newColor });
// }

// const handlePotDecoration = (event) => {
//   const newDecoration = event.target.value;
//   potChange.publish({ type: 'decoration', value: newDecoration });
// }

// const handleInputChange = (event) => {
//   const { name, value } = event.target;
//   potChange.publish({ type: name, value });
// }

// document.querySelectorAll('input[type="radio"], select').forEach((input) => {
//   input.addEventListener('change', handleInputChange);
// });

// document.getElementById('clay').addEventListener('change', handlePotMaterialChange);
// document.getElementById('ceramic').addEventListener('change', handlePotMaterialChange);

// document.getElementById('decorationNo').addEventListener('change', handlePotDecoration);
// document.getElementById('decorationSi').addEventListener('change', handlePotDecoration);

// document.getElementById('colorNo').addEventListener('change', handlePotColor);
// document.getElementById('colorSi').addEventListener('change', handlePotColor);

// document.getElementById('redButton').addEventListener('change', handlePotColor);
// document.getElementById('pinkButton').addEventListener('change', handlePotColor);
// document.getElementById('greenButton').addEventListener('change', handlePotColor);
// document.getElementById('purpleButton').addEventListener('change', handlePotColor);

// export default potChange;

import Publisher from "./Publisher.js";
import { createCustomizableCard, fieldMappings } from "./previewCard.js";

const potChange = new Publisher();
let card;

function handleInputChange(event) {
  const { name, value } = event.target;

  if (fieldMappings[name]) {
    potChange.publish({ type: fieldMappings[name], value });
  }
}

function handlePotMaterialChange(event) {
  const newMaterial = event.target.value;

  if (card) {
    card.update({ type: 'material', value: newMaterial });
  }
}

document.getElementById('clay').addEventListener('change', (event) => {
  handlePotMaterialChange(event);
  handleInputChange(event);
});

document.getElementById('ceramic').addEventListener('change', (event) => {
  handlePotMaterialChange(event);
  handleInputChange(event);
});

createCustomizableCard();

export default potChange;









// const handlePotColor = (event) => {
//   const newColor = event.target.value;
//   potChange.publish({ type: 'color', value: newColor });
// }

// const handlePotDecoration = (event) => {
//   const newDecoration = event.target.value;
//   potChange.publish({ type: 'decoration', value: newDecoration });
// }

// const handleInputChange = (event) => {
//   const { name, value } = event.target;
//   potChange.publish({ type: name, value });
// }

// document.querySelectorAll('input[type="radio"], select').forEach((input) => {
//   input.addEventListener('change', handleInputChange);
// });


// document.getElementById('decorationNo').addEventListener('change', handlePotDecoration);
// document.getElementById('decorationSi').addEventListener('change', handlePotDecoration);

// document.getElementById('colorNo').addEventListener('change', handlePotColor);
// document.getElementById('colorSi').addEventListener('change', handlePotColor);

// document.getElementById('redButton').addEventListener('change', handlePotColor);
// document.getElementById('pinkButton').addEventListener('change', handlePotColor);
// document.getElementById('greenButton').addEventListener('change', handlePotColor);
// document.getElementById('purpleButton').addEventListener('change', handlePotColor);