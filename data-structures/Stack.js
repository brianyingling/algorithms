
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
    return this.head && this.head.item;
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

console.log('peek:', stack.peek());


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


// function isBalanced(str) {
//     var OPEN = '(';
//     var CLOSE = ')';
//     var stack = new Stack();
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i];
//         if (!stack.length) {
//             if (char === CLOSE)     
//                 return false;
//             else if (char === OPEN) 
//                 stack.push(char);
//         }
//         else {
//             if (char === stack.peek())
//                 stack.push(char);
//             else if (stack.peek() === OPEN && char === CLOSE)
//                 stack.pop();
//         }
//     }
//     return !stack.length;
// }

function isBalanced(str) {
    var stack = new Stack();
    var open = {
        '[' : ']',
        '{' : '}',
        '(' : ')'
    };
    var closed = {
        ']': true,
        '}': true,
        ')': true
    };
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (open[char]) {
            stack.push(char);
        } 
        else if (closed[char]) {
            if (open[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
}
