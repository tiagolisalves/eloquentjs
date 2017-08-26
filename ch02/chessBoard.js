console.info(generateChessBoard(128));

function generateChessBoard(n){
    return Array.apply(null, {length : n}).map(function(element, index){
        return generateNSquares(n, index % 2);
    }).join('\n');
}

function generateNSquares(n, even){   
    if(even){
        return Array(n/2).join('# ');
    } else {
        return Array(n/2).join(' #');
    }
}
