class Publisher {
  constructor() {
    this.subscribers = [];
  }

  subscribe(observer) {
    this.subscribers.push(observer);
  }

  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter((sub) => sub !== observer);
  }

  publish(data) {
    this.subscribers.forEach((sub) => sub(data));
  }
}

export default Publisher;
