// function getFormData(formId, callback) {
//   const form = document.getElementById(formId);
//   form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const light = document.getElementById('lowLight').value;
//     const sunlight = document.getElementById('directSunlight').value;
//     const pets = document.getElementById('hasPets').value;
//     const water = document.getElementById('overwater').value;
//     const extrasInputs = document.querySelectorAll('input[name="somethingElse"]:checked');
//     const extras = Array.from(extrasInputs).map(input => input.value);

//     const formData = {light, sunlight, pets, water, extras};

//     callback(formData);
//   });
// }
// export default getFormData;

function getFormData(formId, callback) {
  const form = document.getElementById(formId);
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const light = formData.get("light");
    const sunlight = formData.get("sunlight");
    const pets = formData.get("pets");
    const water = formData.get("water");
    const extrasInputs = formData.getAll("somethingElse[]");
    const extras = Array.from(extrasInputs);

    const formDataObject = {
      light,
      sunlight,
      pets,
      water,
      extras,
    };

    callback(formDataObject);
  });
}
export default getFormData;
