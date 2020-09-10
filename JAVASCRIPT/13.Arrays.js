/*
* Arrays
*/

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue'); //Agrega al final del arreglo
john.unshift('Mr.'); //Agrega al incio del arreglo
console.log(john);
john.pop(); //Elimina el ultimo elemento
john.pop();
john.shift(); //Elimina el primer elemento
console.log(john);
console.log(john.indexOf(23));
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
