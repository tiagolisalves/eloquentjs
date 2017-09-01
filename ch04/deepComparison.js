function getSubObjects(objA){
    return Object.keys(objA).filter(function(property){
       return typeof objA[property] === "object" && objA[property] !== null;       
    });
}

function deepEqual(objA, objB){
   if(!getSubObjects(objA)[0]){
        return Object.keys(objA).reduce(function(result, property){
            return result && objA[property] === (objB || {})[property]; 
        }, true);
    } else {
        return getSubObjects(objA).reduce(function(result, property, index){
            return result && deepEqual(objA[getSubObjects(objA)[index]], (objB || {})[getSubObjects(objA)[index]]);
        }, true);
    }
}


console.log(deepEqual({
    a : 1, 
    b : {
        f : 1,
        d :  {
            c : 1
        }
    },
    x : {
        d :  {
            c : 4,
            s : {
                a : 3
            }
        }
    }
}, 
{
    a : 1, 
    b : {
        f : 1,
        d :  {
            c : 1
        }
    },
    s : {
        d :  {
            c : 4,
            s : {
                a : 3
            }
        }
    }
}));