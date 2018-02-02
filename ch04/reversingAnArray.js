function reverseArray(array){
    return array.map(function(value, index, array){        
        return array[array.length - 1 - index];
    });
}

//Not functional because has the side effect of modify an external array
function reverseArrayInPlace(array){
    var reversedArray = reverseArray(array);
    array.forEach(function(element, index) {
        array[index] = reversedArray[index];
    });

    return array;

}

var array = [-1 ,0 ,3, 4 , '%'];

console.log(reverseArray(array));
console.log(array === reverseArray(array)); //For demonstrate that creates a new copy

console.log(reverseArrayInPlace(array));
console.log(array === reverseArrayInPlace(array)); //For demonstrate that is the same array