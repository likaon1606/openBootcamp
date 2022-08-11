//ORDENAR LISTAS
// .sort() -> modifica el array y lo ordena
const array = [2, 5, 9, 15, 1, 2, 0 ,4]
console.log(array);

array.sort((a, b) => {// -1 invierte el orden del array
    if (a < b) {
        return -1
    } else if (a > b) {
        return +1
    } else {// a === b
        return 0
    }
})
console.log(array);//ordena de menor a mayor

const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546]

arrayNumerico.sort((a, b) => b - a)//lo ordena al reves de mayor a menor, invertir a - b para menor a mayor
console.log(arrayNumerico);

// Interesante en array de objetos
const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad:28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29 }
]
//MANERA NO FUNCIONAL
// listaObjetos.sort((a, b) => {
//     if (a.edad < b.edad) {
//         return -1
//     } else if (a.edad > b.edad) {
//         return +1
//     } else {
//         return 0
//     }
// })
//MANERA FUNCIONAL
listaObjetos.sort((a, b) => a.edad - b.edad)//retornar la division de a y b, si es negativa a es menor que b, si es positiva b es menor que a
console.log(listaObjetos);//[ { nombre: 'Lucía', edad: 3 },{ nombre: 'Miguel', edad: 28 },{ nombre: 'Amaia', edad: 29 },{ nombre: 'Gorka', edad: 34 },{ nombre: 'Leire', edad: 35 } ]
