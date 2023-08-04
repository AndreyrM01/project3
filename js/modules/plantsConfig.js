const getPlanName = () => {
  const separatePlantsByLight = {
    "Low_Light_Plants": [
      {
        name: "Sansevieria",
        soilType: "Toxic",
        potMaterial: "Clay",
        potStyle: "Simple",
        potColor: "Rose",
        extras: ['moss pole', 'Pebbles','Mini plants']
      },
      {
        name: "Boston Fern",
        soilType: "Non-Toxic",
        potMaterial: "Ceramic",
        potStyle: "Simple",
        potColor: "White",
        extras: ['moss pole', 'Pebbles','Mini plants']
      }
    ],
    "Medium_Light_Plants": [
      {
        name: "Aglaonema",
        soilType: "Toxic",
        potMaterial: "Ceramic",
        potStyle: "Simple",
        potColor: "Purple",
        extras: ['moss pole', 'Pebbles','Mini plants']
      },
      {
        name: "Monstera",
        soilType: "Non-Toxic",
        potMaterial: "Ceramic",
        potStyle: "Simple",
        potColor: "Orange",
        extras: ['moss pole', 'Pebbles','Mini plants']
      }
    ],
    "Outdoor_Plants": [
      {
        name: "Aloe Vera",
        soilType: "Toxic",
        potMaterial: "Ceramic",
        potStyle: "Simple",
        potColor: "Red",
        extras: ['moss pole', 'Pebbles','Mini plants']
      },
      {
        name: "Cactus",
        soilType: "Non-Toxic",
        potMaterial: "Ceramic",
        potStyle: "Simple",
        potColor: "Green",
        extras: ['moss pole', 'Pebbles','Mini plants']
      }
    ]
  };

  return separatePlantsByLight;
}

export default getPlanName;
