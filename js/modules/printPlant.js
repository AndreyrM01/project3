const createPlantCard = (plant) => {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('plant-card');

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('plant-card__header');
  cardHeader.innerHTML = `
    <h2 class="plant-card__header-title">${plant.name}</h2>
    <p class="plant-card__header-text">Discover the perfect plant for you!</p>`;
  cardContainer.appendChild(cardHeader);

  const cardImages = document.createElement('div');
  cardImages.classList.add('plant-card__images');
  let imagesHTML = `
    <img class="plant-card__image plant-card__image--plant" src="/src/assets/plants/plant-${plant.name}.png" alt="">
    <img class="plant-card__image plant-card__image--soil" src="/src/assets/soil/soil-${plant.soil}.png" alt="">
    <img class="plant-card__image plant-card__image--pot" src="/src/assets/pots/${plant.potDecoration}-${plant.potMaterial}-pot.png" alt="">`;

  if (plant.extras) {
    plant.extras.forEach((element) => {
      imagesHTML += `<img class="plant-card__image plant-card__image--extra" src="/src/assets/extra/${element}.png" alt="">`;
    });
  }
  cardImages.innerHTML = imagesHTML;
  cardContainer.appendChild(cardImages);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('plant-card__info');
  cardInfo.innerHTML = `
    <h3 class="plant-card__info-title">Details</h3>
    <table>
      <tr>
        <td>Name:</td>
        <td>${plant.name}</td>
      </tr>
      <tr>
        <td>Soil:</td>
        <td>${plant.soil} soil</td>
      </tr>
      <tr>
        <td>Pot:</td>
        <td>${plant.potDecoration} ${plant.potMaterial} pot</td>
      </tr>
    </table>`;
  if (plant.extras) {
    const extrasList = document.createElement('ul');
    extrasList.classList.add('plant-card__extras');
    plant.extras.forEach((element) => {
      const listItem = document.createElement('li');
      listItem.textContent = element;
      extrasList.appendChild(listItem);
    });
    cardInfo.appendChild(extrasList);
  }
  cardContainer.appendChild(cardInfo);

  return cardContainer;
};

const renderPlant = (plant) => {
  const container = document.querySelector('.plant-container');
  container.innerHTML = '';

  const plantCard = createPlantCard(plant);
  container.appendChild(plantCard);
};

export default renderPlant ;
