function countBs(text){    
    return text.split('')
        .filter(function(char){
            return char === 'B';
        })    
        .reduce(function(acc){       
            return acc + 1;        
        }, 0);
}

function countChar(text, charSelected){    
    return text.split('')
        .filter(function(char){
            return char === charSelected;
        })    
        .reduce(function(acc){       
            return acc + 1;        
        }, 0);
}



console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));