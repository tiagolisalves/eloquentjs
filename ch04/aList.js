function arrayToList(array){
    if(array.length === 1){
        return {
            value: array[0],
            rest: null
        }
    } else {
        return {
            value : array[0], 
            rest: arrayToList(array.slice(1, array.length))
        };    
    }
}

function listToArray(list){
    if(!list.rest){
        return [list.value];
    } else {
        return [].concat(list.value).concat(listToArray(list.rest));
    }
}

function prepend(value, rest){
    return {
        value : value, 
        rest : rest
    };
}

function nth(list, number){    
    if(number === 0){
        return list.value;
    } else if(!list.rest){
        return undefined;
    } else {
        return nth(list.rest, number - 1);
    }
}

console.log(JSON.stringify(arrayToList([10, 20]), null, 4));
console.log(listToArray(arrayToList([10, 20, 30 , 40])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));