class Plants {
  setName(name) {
    this.name = name;
    return this;
  }

  lightAmountRequired(value) {
    this.light = value;
    return this;
  }

  soilNeeded(value) {
    this.soil = value;
    return this;
  }

  pets() {
    this.isToxic = false;
    return this;
  }

  noPets() {
    this.isToxic = true;
    return this;
  }

    clayPot() {
    this.potMaterial = 'clay';
    this.soil = 'drainage';
    return this;
  }
  
  ceramicPot() {
    this.potMaterial = 'ceramic';
    return this;
  }

  stylizedPot(value) {
    this.potDecoration = value;
    return this;
  }

  addExtras(value) {
    this.extras = value;
    return this;
  }
}

export default Plants ;
