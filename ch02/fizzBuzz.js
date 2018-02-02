console.info(fizzBuzz(100));

function fizzBuzz(numbers){
    return range(numbers).map(function(n){
        if(n % 3 == 0 && n % 5 == 0){
            return "FizzBuzz";
        } else if (n % 3 === 0){
            return "Fizz";
        } else if (n % 5 === 0){
            return "Buzz";
        } else {
            return n;
        }
    }).join('\n');  
}

function range(numbers){
    return Array.apply(null, {length: numbers}).map(function(element, index){
        return index + 1;
    });
}
