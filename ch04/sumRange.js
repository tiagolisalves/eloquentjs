function range(start, end) {            
    if(start === end){
        return end;
    } else if(start > end){
        return [];
    } else {
        return [start].concat(range(++start, end));
    } 
}

function sum(array){
    return array.reduce(function(acc, value){
        return acc + value;
    }, 0);
}

function rangeWithStep(start, end, step){
     if(start === end){
        return end;
    } else if(start > end){
        return [];
    } else {
        return [start].concat(rangeWithStep(step ? start + step : start + 1, end, step));
    } 
}


//Only for demonstration. With ES6 default parameters is not necessary the conditional for step.
function rangeWithStepDefault(start, end, step = 1){
     if(start === end){
        return end;
    } else if(start > end){
        return [];
    } else {
        return [start].concat(rangeWithStep(start + step, end, step));
    } 
}

console.log(rangeWithStepDefault(0, 10));