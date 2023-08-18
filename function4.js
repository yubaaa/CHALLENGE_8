class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(item) {
        this.items.push(item);
    }
    
    dequeue() {
        if (!this.isEmpty()) {
            return this.items.shift();
        }
    }
    
    front() {
        return this.items[0];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
}
const myQueue = new Queue();

myQueue.enqueue(5);
myQueue.enqueue(10);
myQueue.enqueue(15);

console.log(myQueue.dequeue()); // Outputs: 5
console.log(myQueue.front());   // Outputs: 10
console.log(myQueue.size());    // Outputs: 2
console.log(myQueue.isEmpty()); // Outputs: false