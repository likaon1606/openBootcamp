// Funciones de tipo flecha - funciones anónimas () => {}

const array = [1, 5, 6, 2, 7, 12, 8, 92]

//Obtener el doble de cada numero del array
// .map(valor, indice, arrayOriginal) acepta 3 valores
// const array2 = array.map(function(valor) {
//     return valor * 2
// })

//Funcion anónima porque no se le está asignando ningún nombre
const array2 = array.map((valor) => valor * 2)
console.log(array2);//[ 2, 10, 12, 4, 14, 24, 16, 184 ]

//definir funcion tipo flecha es mejor guardarla en una constante

// const dobleValor = valor => {
//     return valor * 2
// }

//ATENCION!!
//Lass funciones flecha solo se pueden acceder después de que se han declarado
//mientras que lass funciones normales, se pueden acceder desde cualquier parte del código

const dobleValor = valor => valor * 2
console.log(dobleValor(7));//14

console.log(doble(6));//12

const array3 = array.map(dobleValor)
console.log(array3);//[ 2, 10, 12, 4, 14, 24, 16, 184 ]

function doble(valor) {
    return valor * 2
}
 