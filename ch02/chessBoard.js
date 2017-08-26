
console.info(generateChessBoard(16));

function generateChessBoard(n){
    return spread(n).map(function(element, index){
        return generateSquares(n, index % 2);
    }).join('\n');
}

function spread(n){
    var a = [];
    for (var index = 1; index <= n; index++) {
        a.push(index);        
    }
    return a;
}

function generateSquares(n, even){   
    if(even){
        return Array(n/2).join('# ');
    } else {
        return Array(n/2).join(' #');
    }
}
