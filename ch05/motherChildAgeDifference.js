var ancestry = JSON.parse(require('../resources/ancestry'));

var byName = ancestry.reduce(function(byName, person){ 
  var personNamed = {};
  personNamed[person.name] = person;
  return Object.assign(byName, personNamed); //The creation of the object personName with Es6 Object initializers spec could become more concise: {[person.name] : person}
}, {});

function ageDifferenceFromMother(child){
  var mother = byName[child.mother] || {};  //short-circuit operator to sinalize that mother was not found;
  return child.born - mother.born;
}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

console.log(
average(ancestry.map(function(child){  
  return ageDifferenceFromMother(child);
}).filter(function(age){
    return age;//remove the average ages that are defined
  }))
);