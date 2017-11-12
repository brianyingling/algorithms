// MergeSort - a better algorithm for sorting 
// Can be O(n log n)

function MergeSort(items) {
    this.items = items;
}

MergeSort.prototype.merge = function(left, right) {
    var result = [];
    while (left.length && right.length) {
        if (left[0] < right[0])
            result.push(left.shift());
        else 
            result.push(right.shift());
    }

    while(left.length) {
        result.push(left.shift());
    }

    while(right.length) {
        result.push(right.shift());
    }
    return result;
}

MergeSort.prototype._sort = function(items) {
    if (items.length < 2)
        return items;
    var mid   = parseInt(items.length / 2);
    var left  = items.slice(0, mid);
    var right = items.slice(mid, items.length);
    return this.merge(this._sort(left), this._sort(right));
}

MergeSort.prototype.sort = function(items) {
    return this._sort(this.items);
}

var mergeSort = new MergeSort([9,8,7,6,5,4,3,2,1]);
console.log('sorted:', mergeSort.sort());