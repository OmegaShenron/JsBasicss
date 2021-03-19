//------------------------
var age = prompt('ingresa tu edad:');
if (age >= 18) {
    console.log('Ya tienes edad para manejar');
} else {
    var left = 18 - age;
    console.log('No tienes edad suficiente para manejar, te faltan ' + left + ' años para manejar');
}
//-----------------------
var myAge = 21;
if(myAge>age){
    var mayor=myAge-age;
    console.log('Soy '+mayor+' años mayor que tu');
}
else{
    var mayor=age-myAge
    console.log('Soy '+mayor+' años menor que tu');
}
if(myAge==age){
    console.log('Somos de la edad');
}
//----------------------
let a=4,b=3;
if(a>b)
    console.log(a+' Es mayor que '+b);
else
console.log(b+' Es mejor que '+ a);
//------------------------
let number= prompt('Ingresa un numero');
if (number%2==0) {
    alert("El numero introducido es par");
 } else {
    alert("El numero introducido es impar");
 }
 //------------------------
 let calificacion= prompt('Ingresa calificacion');
 if(calificacion>=80 && calificacion<=100){
     console.log('Tu calificacion es A');
 }
 if(calificacion>=70 && calificacion<=79){
    console.log('Tu calificacion es B');
}
if(calificacion>=60 && calificacion<=69){
    console.log('Tu calificacion es C');
}
if(calificacion>=50 && calificacion<=59){
    console.log('Tu calificacion es D');
}
if(calificacion>0 && calificacion<=49){
    console.log('Tu calificacion es F');
}
//----------
let mes = prompt('Ingresa el mes');
mes.toLocaleLowerCase();
if(mes=='septiembre' || mes=='octubre' || mes=='noviembre'){
    console.log('La estación del año es Otoño');
}
if(mes=='diciembre' || mes=='enero'|| mes=='febrero'){
    console.log('La estación del año es Invierno');
}
if(mes=='marzo' || mes=='abril' || mes=='mayo'){
    console.log('La estación del año es Primavera');
}
if(mes=='junio' || mes=='julio' || mes=='agosto'){
    console.log('La estación del año es Verano');
}