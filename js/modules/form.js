function getPlantData(callback) {
  const form = document.getElementById('formPlants');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const light = document.getElementById('lowLight').value;
    const sunlight = document.getElementById('directSunlight').value;
    const pets = document.getElementById('hasPets').value;
    const water = document.getElementById('overwater').value;
    const extrasInputs = document.querySelectorAll('input[name="somethingElse"]:checked');
    const extras = Array.from(extrasInputs).map(input => input.value);

    let plantsData = null;

    if (light === 'low' && pets === 'toxic') {
      if (water === 'overwater') {
        plantsData = {
          name: 'Peace Lily',
          light: 'low',
          isToxic: true,
          plantImage: '/images/plants/plant-peace-lily.png'
        };
      } else {
        plantsData = {
          name: 'Sansevieria',
          light: 'low',
          isToxic: true,
          plantImage: '/images/plants/plant-sansevieria.png'
        };
      }
    } else if (light === 'low' && pets === 'non_toxic') {
      plantsData = {
        name: 'Boston Fern',
        light: 'low',
        isToxic: false,
        plantImage: '/images/plants/plant-fern.png'
      };
    } else if (light === 'moderate' && pets === 'toxic') {
      if (water === 'overwater') {
        plantsData = {
          name: 'Peace Lily',
          light: 'moderate',
          isToxic: true,
          plantImage: '/images/plants/plant-peace-lily.png'
        };
      } else {
        plantsData = {
          name: 'Aglaonema',
          light: 'moderate',
          isToxic: true,
          plantImage: '/images/plants/plant-aglaonema.png'
        };
      }
    } else if (light === 'moderate' && pets === 'non_toxic') {
      plantsData = {
        name: 'Monstera',
        light: 'moderate',
        isToxic: false,
        plantImage: '/images/plants/plant-monstera.png'
      };
    } else if (light === 'high' && pets === 'toxic') {
      plantsData = {
        name: 'Aloe Vera',
        light: 'high',
        isToxic: true,
        plantImage: '/images/plants/plant-aloe-vera.png'
      };
    } else if (light === 'high' && pets === 'non_toxic') {
      plantsData = {
        name: 'Cactus',
        light: 'high',
        isToxic: false,
        plantImage: '/images/plants/plant-cactus.png'
      };
    }

    if (sunlight === 'direct') {
      plantsData.soilNeeded = 'Composted soil';
      plantsData.soilImage = '/images/soil/soil-composted.png';
    } else if (sunlight === 'indirect') {
      plantsData.soilNeeded = 'Fertilized soil';
      plantsData.soilImage = '/images/soil/soil-fertilized.png';
    }

    if (water === 'overwater') {
      plantsData.potMaterial = 'clay';
      plantsData.potImage = '/images/pots/simple-clay-pot.png';
    } else if (water === 'underwater' || water === 'normal') {
      plantsData.potMaterial = 'ceramic';
      plantsData.potImage = '/images/pots/simple-ceramic-pot.png';
    }

    if (extras.includes('pebbles') || extras.includes('moss-pole') || extras.includes('mini')) {
      plantsData.addExtras = true;
    }

    const plantData = {
      name: plantsData.name,
      soil: plantsData.soilNeeded,
      pot: {
        material: plantsData.potMaterial
      },
      extras: plantsData.addExtras ? extras : [],
      images: {
        plant: plantsData.plantImage,
        soil: plantsData.soilImage,
        pot: plantsData.potImage
      }
    };

    callback(plantData);
  });
}

export default getPlantData;
