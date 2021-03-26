const arregloVacio = [];
const miArreglo = ['1', '2', '3', '4', '5'];
console.log(miArreglo.length);
console.log(miArreglo[0] + miArreglo[2] + miArreglo[4]);
//-----
const mixedDataTypes = ['1', 523, 'cepillo', 9019, 291, 'empleo', 213];
console.log(mixedDataTypes.length);
//------
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log('Numero de compañias: ' + itCompanies.length);
console.log('\n');

for (let i = 0; i < itCompanies.length; i++) {
    console.log('Nombre de compañia: ' + itCompanies[i]);
    console.log('\n');
}

//---------

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
var empresa = prompt('Qué empresa buscas en el arreglo: ');
empresa.toLocaleLowerCase;
itCompanies.toLocaleLowerCase;
var index = 0;
for (; index < itCompanies.length; index++) {
    if (empresa === itCompanies[index]) {
        console.log(itCompanies[index] + ' si pertenece al arreglo');
    }
    if (empresa != itCompanies[index]) {
        console.log('No pertence al arreglo');
    }
}
//------------
//Filter out companies which have more than one 'o' without the filter method
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log('Numero de compañias: ' + itCompanies.length);
console.log('\n');

for (let i = 0; i < itCompanies.length; i++) {
    console.log('Nombre de compañia: ' + itCompanies[i]);
    console.log(itCompanies[i].includes('o' && 'o'));
    console.log('\n');

}
//Sort the array using sort() method
itCompanies.sort();

//Reverse the array using reverse() method
itCompanies.reverse();
//Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
//Slice out the last 3 companies from the array
Console.log(itCompanies.slice(4, 7));
//Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(itCompanies.length / 2, itCompanies.length / 2));
//Remove the first IT company from the array
itCompanies.shift();
//Remove the middle IT company or companies from the array
itCompanies.splice(itCompanies.length / 2, itCompanies.length / 2);
//Remove the last IT company from the array
itCompanies.pop();
//Remove all IT companies
itCompanies.splice();
//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
console.log(countries);
console.log(webTechs);