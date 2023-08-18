class Stack {
    constructor() {
        this.items = [];
    }
    
    push(item) {
        this.items.push(item);
    }
    
    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
}
const myStack = new Stack();

myStack.push(5);
myStack.push(10);
myStack.push(15);

console.log(myStack.pop());  // Outputs: 15
console.log(myStack.peek()); // Outputs: 10
console.log(myStack.size()); // Outputs: 2
console.log(myStack.isEmpty()); // Outputs: false

