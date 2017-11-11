// This is an example of BubbleSort -- the worst form of sorts.
// This is fine to use for small collections but with any substantial
// dataset you should use something else, since this is O(n^2) time.


function BubbleSort(collection) {
    this.collection = collection;
}

BubbleSort.prototype.sort = function() {
    var sorting = true;
    while (sorting) {
        sorting = false;
        for (var i = 0; i < this.collection.length; i++) {
            var j = i + 1;
            if (this.collection[i] > this.collection[j]) {
                var temp = this.collection[j];
                this.collection[j] = this.collection[i];
                this.collection[i] = temp;
                sorting = true;
            }
        }
    }
    return this.collection;
}

var bubbleSort = new BubbleSort([2,9,4,7,3,8,1]);
console.log('sorted:', bubbleSort.sort());