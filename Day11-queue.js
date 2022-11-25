const QueueFood = require("./Day11-modules");

const queue = new QueueFood();
queue.enqueue("Soto");
queue.enqueue("Bakso");
queue.enqueue("Coto");
queue.enqueue("Bakpao");
queue.enqueue("Mantau");
queue.executeQueue();
