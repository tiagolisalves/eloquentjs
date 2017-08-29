function isEven(number) {
    if(number === 0){
        return true;
    } else if(number === 1 || number < 0){
        return false;
    } else {
        return isEven(number - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(1000));
console.log(isEven(10001));
console.log(isEven(-1));
