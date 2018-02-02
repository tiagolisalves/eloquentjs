function flattening(arrayOfArrays){
    return arrayOfArrays.reduce(function(arrayFinal, array){
        return arrayFinal.concat(array);
    }, []);
}

console.log(flattening([[1, 2, 3], [4, 5], [6]]));