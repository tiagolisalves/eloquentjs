function hasSubObjects(objA){
    return Object.keys(objA).filter(function(property){
       return typeof objA[property] === "object" && objA[property] !== null;       
    });
}

function parseToObject(value){    
    return typeof value === "object" ? value : {value : value};
}

function deepEqual(objA, objB){
   if(!hasSubObjects(objA)[0]){
        return Object.keys(objA).reduce(function(result, property){
            return result && objA[property] === (objB || {})[property]; 
        }, true);
    } else {
        return Object.keys(objA).reduce(function(result, property){
            return result && deepEqual(parseToObject(objA[property]), parseToObject(objB[property]));
        }, true);
    }
}


console.log(deepEqual({
    a : 4, 
    b : {
        f : 1,
        d :  {
            c : 1
        }
    },
    z : 5,
    s : {
        d :  {
            c : 4,
            s : {
                a : 3
            }
        }
    }
}, 
{
    a : 4, 
    b : {
        f : 1,
        d :  {
            c : 1
        }
    },
    z : 5,
    s : {
        d :  {
            c : 4,
            s : {
                a : 3
            }
        }
    }
}));