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
    this.subscribers = [];
  }

  subscribe(fn) {
    this.subscribers.push(fn);
  }
  
  publish(data) {
    this.subscribers.forEach((fn) => fn(data));
  }

}

export default Publisher;
