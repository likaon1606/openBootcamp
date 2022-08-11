//MODULOS: contiene codigo que se puede reutilizar en diferentes partes del código
//Formas de importar/exportar módulos
// antes de ECS6 -> CommonJs - require
//Import ES6 -> import

//............................
//FORMA ANTIGUA

// const moduloMatematicas = require("./moduls/matematicas.js");
// const factorial = moduloMatematicas.factorial; //podemos usarlo también de esta manera
// console.log(moduloMatematicas.eleva);

//..................................................
// ECMASCRIPT 6 -> FORMA ACTUAL DE IMPORTAR UN MODULO
const { factorial, suma } = require("./moduls/matematicas");

const fact = factorial(5)
console.log(fact);

const sum = suma( 12, 90)
console.log(sum);

// console.log(module);

