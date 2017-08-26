printTriangle(loopingTriangleDummie);


/**
 * You have to make sure that the index of the inner loop matches with the index outer loop
 * The easiest to form to read is to put the indexes from 1 to 7 with minus equal on the conditions
 * You have to create variables to store the final result and each line;
 */
function loopingTriangleDummie(){
    var line, result = "";    
    for (var index = 1; index <= 7; index++) {
        line = "";
        for (var jindex = 1; jindex <= index; jindex++) {
            line += '#';                 
        }
        result += line + "\n";                
    }
    return result;

}

/**
 * Show options to return ranges from 1 to 7;
 * @param {*} choice 
 */
function spread(n, choice){
    return {
        "fromKeys" : (function(){
            return Array.from(Array(n).keys()).map(function(i){
                return i + 1;
            });
        })(),
        "apply" : (function(){
            return Array.apply(null, {length: n}).map(function(i, index){
                return index + 1;
            });
        })(),
        "spreadKeys" : (function(){
            return [...Array(n).keys()].map(function(i){
                return i + 1;
            });
        })(),
        "for" : (function(){
            var a = [];
            for (var index = 1; index <= n; index++) {
                a.push(index);                
            }
            return a;
        })()
    }[choice];
}

function loopingTriangleFunctional(){
    return  spread(7, "for")
            .map(function(n){
                return Array(n + 1).join('#');
            }).join('\n');
}

function printTriangle(loopingFn){
    console.info(loopingFn());
}


