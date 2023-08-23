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


