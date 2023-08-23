class Card {
  constructor(elementId) {
    this.cardElement = document.getElementById(elementId);
  }

  update(update) {
    switch (update.type) {
      case 'material':
        this.updateMaterial(update.value);
        break;
      case 'color':
        this.updateColor(update.value);
        break;
      case 'decoration':
        this.updateDecoration(update.value);
        break;
      default:
    }
  }

  updateMaterial(material) {
    this.cardElement.querySelector('.material').textContent = material;
    this.updatePotImage();
  }

  updateColor(color) {
    this.cardElement.querySelector('.color').textContent = color;
    this.updatePotImage();
  }

  updateDecoration(decoration) {
    this.cardElement.querySelector('.decoration').textContent = decoration;
    this.updatePotImage();
  }

  updatePotImage() {
    const material = this.cardElement.querySelector('.material').textContent;
    const color = this.cardElement.querySelector('.color').textContent;
    const decoration = this.cardElement.querySelector('.decoration').textContent;

    let potImageSrc = '';

    if (decoration === 'unpainted') {
      potImageSrc = `/images/pots/${material}-simple-unpainted.png`;
    } else {
      potImageSrc = `/images/pots/${material}-decorated-${color}.png`;
    }

    this.cardElement.querySelector('.pot-image').src = potImageSrc;
  }
}

export default Card;