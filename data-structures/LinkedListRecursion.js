// Recursively handle Linked Lists
// This is an example to just demonstrate recursive functions
// operating on a linked list.

// In following functional programming principles, each 
// function returns a new linked list. Other examples
// in this repo demonstrate a more object-oriented approach
function Node(item, next) {
    this.item = item;
    this.next = next;   
}

function add(item, list) {
    return new Node(item, list);
}

function remove(item, list) {
    if (item === list.item)
        return list.next;
    return remove(item, list.next);
}

function search(item, list) {
    if (!list) return;
    if (item === list.item) 
        return item;
    search(item, list.next);
}

// adding 
var list    = new Node(1, null);
var list2   = add(2, list);
console.log('list2:', list2);

// removing
var removed = remove(2, list2);
console.log('removed:', removed);

// searching
console.log('search:', search(2, list2));
console.log('search:', search(4, list2));
