function Tree(parent, val, left, right) {
    this.parent = parent;
    this.left = left;
    this.right = right;
    this.val = val;
}

function search(tree, val) {
    if (!tree)              return null;
    if (!val)               return null;
    if (val === tree.val)   return tree;
    if (val > tree.val)     return search(tree.right, val);
    if (val < tree.val)     return search(tree.left, val);
}

function traverse(tree) {
    if (!tree) return;
    traverse(tree.left);
    console.log('traverse val:', tree.val);
    traverse(tree.right);
}

function max(tree) {
    if (!tree)          return;
    if (!tree.right)    return tree;
    return max(tree.right);
}

function min(tree) {
    if (!tree)      return;
    if (!tree.left) return tree;
    return min(tree.left);
}

function insert(tree, val, parent) {
    if (!tree) {
        var t = new Tree(parent, val, null, null);
        if (val < parent.val)
            parent.left = t;
        else 
            parent.right = t;
        return t;
    }
    if (val < tree.val)
        return insert(tree.left, val, tree);
    else 
        return insert(tree.right, val, tree);
}



// function insert(tree, val, parent) {
//     var newTree;

//     if (!tree) {
//         newTree = new Tree(parent, val, parent.left, parent.right);
//         tree = newTree;
//         return;
//     }
    
//     if (val < tree.val)
//         insert(tree.left, val, parent);
//     else 
//         insert(tree.right, val, parent);
// }

// function max(tree) {
//     if (!tree) return;
//     var max = tree;
//     while (max.right)
//         max = max.right;
//     return max;
// }

// function min(tree) {
//     if (!tree) return;
//     var min = tree;
//     while (min.left)
//         min = min.left
//     return min;
// }

var tree = new Tree(null, 2, null, null);
tree.left = new Tree(tree, 1, null, null);
tree.right = new Tree(tree, 3, null, null);


var find    = search(tree, 3);
var find2   = search(tree, 4);

console.log('find:', find);
console.log('find2:', find2);

console.log('find min:', min(tree));
console.log('find max:', max(tree));

console.log('traverse:', traverse(tree));

console.log('tree:', tree);
console.log('insert:', insert(tree, 4, null));
console.log('tree:', tree.right.right);



// Priority Queue -- TODO, this needs work

function Node(value, key, next) {
    this.value = value;
    this.key = key;
    this.next = next;
}

function PriorityQueue() {
    this.data = [];
    this.min;
}

PriorityQueue.prototype.insert = function(item, key) {
    this.data.push({item: item, key: key});
}

PriorityQueue.prototype.findMinimum = function() {
    var min;
    for (var i = 0; i < this.data.length-1; i++) {
        if (!min)
            min = data;
        else if (min.key > this.data[i].key)
            min = data;
    }
    return min;
}

PriorityQueue.prototype.findMaximum = function() {
    var max;
    for (var i = 0; i < this.data.length-1; i++) {
        if (!max) max = data;
        else if (max.key < this.data[i].key)
            max = data;
    }
    return max;
}

PriorityQueue.prototype.deleteMinimum = function() {
    var min;
    for (var i = 0; i < this.data.length-1; i++) {
        if (!min) min = i;
        else if (min.key > data.key) min = i;
    }
    this.data.splice(min, 0);
}

PriorityQueue.prototype.deleteMaximum = function() {
    var max;
    for (var i = 0; i < this.data.length-1; i++) {
        if (!max) max = i;
        else if (max.key < data.key) max = i;
    }
    this.data.splice(max, 0);
}




