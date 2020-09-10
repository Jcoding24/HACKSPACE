/*****************************
* If / else 
*/

var firstName = 'Jesus';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massJuan = 78; // kg
var heightJuan = 1.69; // metros
var massJesus = 92;
var heightJesus = 1.95;
var BMIJuan = massJuan / (heightJuan * heightJuan);
var BMIJesus = massJesus / (heightJesus * heightJesus);
if (BMIJuan > BMIJesus) {
    console.log('Juan\'s BMI is higher than Jesus\'s.');
} else {
    console.log('Jesus\'s BMI is higher than Juan\'s.');
}
