function reduce(array, reducer, initialValue) {
    for(var i = 0; i < array.length; i++) {
      initialValue = reducer(initialValue, array[i]);
    }
    return initialValue;
}

//Return 15
var arr = [1,2,3,4,5];
var reducer = function (acc, curr) { return acc += curr};
console.log(reduce(arr, reducer, 0));