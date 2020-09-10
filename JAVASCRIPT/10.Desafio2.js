var avgJesus = (189+120+103)/3;
var avgJuan = (123+94+123)/3;
var avgPedro = (97+134+105)/3;
console.log(avgJesus,avgJuan,avgPedro);

if (avgJesus > avgJuan && avgJesus > avgPedro) {
    console.log('Jesus\'s team wins with ' + avgJesus + ' points');
} else if (avgJuan > avgJesus && avgJuan > avgPedro) {
    console.log('Juan\'s team wins with ' + avgJuan + ' points');
} else if (avgPedro > avgJesus && avgPedro > avgJuan) {
    console.log('Pedro\'s team wins with ' + avgPedro + ' points');
} else {
    console.log('There is a draw');
}
