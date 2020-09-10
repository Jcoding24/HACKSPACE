/*
* Operador de predecencia
*/

var now = 2020;
var yearJesus = 1997;
var fullAge = 18;

// Operadores Multiples
var isFullAge = now - yearJesus >= fullAge; // true
console.log(isFullAge);

// Agrupando
var ageJesus = now - yearJesus;
var ageJuan = 35;
var average = (ageJesus + ageJuan) / 2;
console.log(average);

// asiganciones multiples
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// Mas operadores
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);

