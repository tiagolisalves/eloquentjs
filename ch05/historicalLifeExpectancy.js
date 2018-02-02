var ancestry = JSON.parse(require('../resources/ancestry'))

//Top-down approach, functions are defined after their use
//Necessary side-effect in function to print the output
function printAverageAgePerCentury(ancestry){
    var averageAgePerCentury = getAverageAgePerCentury(ancestry);
    Object.keys(averageAgePerCentury).forEach(function(century){
        console.log(century.concat(": ").concat(averageAgePerCentury[century]))
    })
}

function getAverageAgePerCentury(ancestry){
    var agesPerCentury = getAgesPerCentury(ancestry); 
    return agesPerCentury.reduce(function(averageAgePerCentury, agePerCentury){
        if(averageAgePerCentury[agePerCentury.century]){
            averageAgePerCentury[agePerCentury.century] = [average(averageAgePerCentury[agePerCentury.century].concat(agePerCentury.age))];
            return averageAgePerCentury;
        } else {
            averageAgePerCentury[agePerCentury.century] = [agePerCentury.age];
            return averageAgePerCentury;
        }
    }, {})
}

function getAgesPerCentury(ancestry){
    return ancestry.map(function(person){
        return {
            century : whichCentury(person),
            age : person.died - person.born
        }
    })
}

function average(array){
    function plus(a,b){ return a + b}
    return array.reduce(plus) / array.length
}

function whichCentury(person){
    return Math.ceil(person.died / 100)
}

//--------------------------------//

printAverageAgePerCentury(ancestry);