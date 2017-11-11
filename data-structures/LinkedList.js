function Node(item, next) {
    this.item = item;
    this.next = next;
}

function LinkedList() {
    this.length = 0;
    this.head;
}

LinkedList.prototype.search = function(item) {
    var currentNode = this.head;
    while (currentNode) {
        console.log('current:', currentNode.item);
        if (item === currentNode.item)
            return item;
        currentNode = currentNode.next;
    }
}

LinkedList.prototype.add = function(item) {
    var node = new Node(item, this.head);
    this.head = node;
    this.length++;
}

LinkedList.prototype.remove = function(item) {
    var currentNode = this.head;
    var prev;
    while (currentNode) {
        if  (item === currentNode.item && currentNode === this.head) {
            this.head = this.head.next;
            this.length--;
        }
        else if (item === currentNode.item && currentNode) {
            prev.next = currentNode.next;
            this.length--;
        }
        prev = currentNode;
        currentNode = currentNode.next;
    } 
}

var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
console.log('list:', list);

list.remove(2);
// list.remove(1);
// list.remove(3);
console.log('list:', list);

console.log(list.search(1));
console.log(list.search(3));
