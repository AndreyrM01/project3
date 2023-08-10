import Plants from "../plantsBuilder.js";

function getFromData(formId) {
  const form = document.getElementById(formId);
  const formData = new FormData(form);

  const data = {};
  formData.forEach((value, name) => {
    if (name in data) {
      if (!Array.isArray(data[name])) {
        data[name] = [data[name]];
      }
      data[name].push(value);
    } else {
      data[name] = value;
    }
  });
  
  return data;
}

function generatePlantData(callback) {
  const { light, sunlight, pets, water, style, somethingElse } = getFromData('formPlants');

  const plantsData = new Plants()
    .lightAmountRequired(light)
    .soilNeeded(sunlight === 'direct' ? 'Composted soil' : 'Fertilized soil')
    .addExtras(somethingElse && Array.isArray(somethingElse) && somethingElse.length > 0);

  if (light === 'low' && pets === 'toxic') {
    if (water === 'overwater') {
      plantsData.setName('Peace Lily').noPets().clayPot();
    } else {
      plantsData.setName('Sansevieria').noPets();
    }
  } else if (light === 'low' && pets === 'non_toxic') {
    plantsData.setName('Boston Fern').noPets();
  } else if (light === 'moderate' && pets === 'toxic') {
    if (water === 'overwater') {
      plantsData.setName('Peace Lily').noPets().ceramicPot();
    } else {
      plantsData.setName('Aglaonema').noPets().ceramicPot();
    }
  } else if (light === 'moderate' && pets === 'non_toxic') {
    plantsData.setName('Monstera').noPets().ceramicPot();
  } else if (light === 'high' && pets === 'toxic') {
    plantsData.setName('Aloe Vera').noPets().ceramicPot();
  } else if (light === 'high' && pets === 'non_toxic') {
    plantsData.setName('Cactus').noPets().ceramicPot();
  }

  const plantData = {
    name: plantsData.name,
    soil: plantsData.soil,
    pot: {
      material: plantsData.potMaterial,
      decoration: plantsData.potDecoration,
    },
    extras: plantsData.extras,
    images: {
      plant: plantsData.plantImage,
      soil: plantsData.soilImage,
      pot: plantsData.potImage,
    },
    style: style || 'minimalism',
  };
  callback(plantData);
}

export { generatePlantData, getFromData };
