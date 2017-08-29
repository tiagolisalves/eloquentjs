function countBs(text){    
    return text.split('').reduce(function(acc, char){
        if(char == 'B'){
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);
}

console.log(countBs("o texto está BB BB repleto de Bs"));