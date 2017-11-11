
// Stacks are linked lists with first-in, first-out (FIFO) operability.
// The classic example is to think of a pancake. Adding a pancake adds one
// to the top of the stack. Removing one takes the first one off the top.

function Node(item, next) {
    this.item = item;
    this.next = next;
}

function Stack() {
    this.length = 0;
    this.head;
}

Stack.prototype.peek = function() {
    return this.head;
}

Stack.prototype.push = function(item) {
    if (!this.head) {
        this.head = new Node(item, null);
    } else {
        var next = this.head;
        this.head = new Node(item, next);
    }
    this.length++;
}

Stack.prototype.pop = function() {
    var popped = this.head;
    this.head = this.head && this.head.next;
    this.length ? this.length-- : null;
    return popped && popped.item;
}

var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log('stack:', stack);

// should be 4
var popped = stack.pop();
console.log('popped:', popped);
console.log('stack:', stack);

// should be 3
var popped = stack.pop();
console.log('popped:', popped);
console.log('stack:', stack);

// should be 2
var popped = stack.pop();
console.log('popped:', popped);
console.log('stack:', stack);

// should be 1
var popped = stack.pop();
console.log('popped:', popped);
console.log('stack:', stack);

// should be empty
var popped = stack.pop();
console.log('popped:', popped);
console.log('stack:', stack);

// adding items again
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log('stack:', stack);