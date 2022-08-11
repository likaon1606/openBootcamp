//COMPARAR LISTAS
// .every() si cumple una condición  los valores de una lista, acepta 2 parametros valor e indice
const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40]

//FORMA LARGA
// const resultado = array.every(valor => {
//     if (typeof valor === "number") {// true
//         return true
//     } else {
//         return false
//     }
// })
//FORMA CORTA
const resultado = array.every(valor => typeof valor === "number")
console.log(resultado);//true

//COMPARACION DE LISTAS
const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

console.log(ar1 === ar2);//false no se pueden comparar las listas de esta manera

const compararArrays = (array_1, array_2) => {
    if (array_1.lenght !== array_2.lenght) return false // para checar si tienen la misma longitud
    const res = array_1.every((valor, i) => valor === array_2[i])//comparamos si los valores en los indices de ar1 son iguales a los de ar2
    return res
}
console.log(compararArrays(ar1, ar2));//true

const ar3 = [1, 2, 3, 6]
console.log(compararArrays(ar1, ar3));//false