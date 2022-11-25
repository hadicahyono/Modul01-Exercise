class QueueFood {
  constructor() {
    this.items = [];
  }
  enqueue(menu) {
    this.items.push(menu);
  }
  executeQueue() {
    new Promise((resolve, reject) => {
      for (let i = 0; i < this.items.length; i++) {
        const randomTime = Math.random() * 10000;

        setTimeout(() => {
          console.log(
            `QUEUE ${i + 1}. ${
              this.items[i]
            } is DONE. Process -> ${randomTime.toFixed()}ms`
          );
        }, randomTime);

        resolve(this);
      }
    });
  }
}

module.exports = QueueFood;
