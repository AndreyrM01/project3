// class Publisher {
//   constructor() {
//     this.subscribers = [];
//   }

//   subscribe(observer) {
//     this.subscribers.push(observer);
//   }

//   unsubscribe(observer) {
//     this.subscribers = this.subscribers.filter((sub) => sub !== observer);
//   }

  // publish(data) {
  //   this.subscribers.forEach((sub) => sub(data));
  // }
// }

// export default Publisher;
class Publisher {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => {
      observer.update(data);
    });
  }
  
  publish(data) {
    this.subscribers.forEach((sub) => sub(data));
  }

}

export default Publisher;