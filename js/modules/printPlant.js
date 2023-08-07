const createPlantCard = (plant = {}) => {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('plant-card');

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('plant-card__header');
  cardHeader.innerHTML = `
    <h2 class="plant-card__header-title">${
      plant.name ? plant.name : 'Unknown Plant'
    }</h2>
    <p class="plant-card__header-text">Discover the perfect plant for you!</p>`;
  cardContainer.appendChild(cardHeader);

  const cardImages = document.createElement('div');
  cardImages.classList.add('plant-card__images');
  
  let imagesHTML = `
  <img class="plant-card__image plant-card__image--plant" src="/images/plants/plant-${plant.name ? plant.name : 'default'}.png" alt="">
  <img class="plant-card__image plant-card__image--soil" src="/images/soil/soil-${plant.soil ? plant.soil : 'default'}.png" alt="">
  <img class="plant-card__image plant-card__image--pot" src="/images/pots/${plant.potDecoration ? plant.potDecoration : 'default'}-${plant.potMaterial ? plant.potMaterial : 'default'}-pot.png" alt="">`;

  if (plant.extras && plant.extras.length > 0) {
    plant.extras.forEach((element) => {
      imagesHTML += `<img class="plant-card__image plant-card__image--extra" src="/images/extras/${element}.png" alt="">`;
    });
  }
  cardImages.innerHTML = imagesHTML;
  cardContainer.appendChild(cardImages);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('plant-card__info');
  cardInfo.innerHTML = `
    <h3 class="plant-card__info-title">Details</h3>
    <ul>
      <li>Name: ${plant.name ? plant.name : 'Unknown Plant'}</li>
      <li>Soil: ${plant.soil ? `${plant.soil} soil` : 'Unknown Soil'}</li>
      <li>Pot: ${plant.potDecoration ? plant.potDecoration : 'Unknown'} ${plant.potMaterial ? plant.potMaterial : 'Unknown'} pot</li>
    </ul>`;

  if (plant.extras && plant.extras.length > 0) {
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
  if (!container) {
    return;
  }

  container.innerHTML = '';

  const plantCard = createPlantCard(plant);
  container.appendChild(plantCard);
};

export default renderPlant;
