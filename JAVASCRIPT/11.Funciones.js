/*****************************
* Functions
*/

function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJesus = calculateAge(1990);
var ageJuan = calculateAge(1948);
var agePedro = calculateAge(1969);
console.log(ageJesus, ageJuan, agePedro);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
    
}
yearsUntilRetirement(1990, 'Jesus');
yearsUntilRetirement(1948, 'Juan');
yearsUntilRetirement(1969, 'Pedro');



