function fizzBuzz(numbers){
    return Array.apply(null, {length: numbers}).map(function(n, index){
        return index + 1;
    }).map(function(n){
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

console.log(fizzBuzz(100));