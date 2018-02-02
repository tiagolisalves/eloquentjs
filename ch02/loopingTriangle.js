console.info(loopingTriangle(7));

function loopingTriangle(n){
    return  rangeFromKeys(n)
            .map(function(n){
                return Array(n + 1).join('#');
            }).join('\n');
}

//Diferent functional options for get ranges from 1 to n

function rangeFromKeys(n){
    return  Array.from(Array(n).keys())
            .map(function(i){
                return i + 1;
            });            
}

function rangeApply(n){
    return  Array.apply(null, {length: n})
            .map(function(i, index){
                return index + 1;
            });
}

function rangeSpreadKeys(n){
    return  [...Array(n).keys()]
            .map(function(i){
                return i + 1;
            });
}

function printTriangle(loopingFn){
    console.info(loopingFn());
}


