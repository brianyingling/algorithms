// Another sort algorithm that's suboptimal. Here
// a pointer iterates through the array backwards
// and will swap the items if they are out of order.
// This one is also O(n^2).

function InsertionSort(items) {
    this.items = items;
}

InsertionSort.prototype.sort = function() {
    for (var i = 0; i < this.items.length; i++) {
        var j = i;
        while (j > 0 && this.items[j-1] > this.items[j]) {
            var temp = this.items[j-1];
            this.items[j-1] = this.items[j];
            this.items[j] = temp;
            j--;
        }
    }
    return this.items;
}

var insertionSort = new InsertionSort([5,4,3,2,1,9,6,8,7]);
console.log('sorted:', insertionSort.sort());