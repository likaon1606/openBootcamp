// Métodos avanzados
// .map() .filter() .reduce()
// .map()
const array = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"]

const val = array.forEach(v => {
    console.log(v)
    return 4
});
console.log(val);//undefined

const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)// console.log(indice);// 0, 1, 2, 3, 4
console.log(newArray);// [ '1 - San Sebastián','2 - Madrid','3 - Barcelona','4 - Alicante','5 - Bilbao' ]

// .filter()
const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad:28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29 }
]
// true para objetos que quiero pasar y false para objetos que NO quiero pasar
//manera NO eficiente
// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad > 30) {
//         return true
//     } else {
//         return false
//     }
// })

//manera eficiente
const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores);// [ { nombre: 'Leire', edad: 35 }, { nombre: 'Gorka', edad: 34 } ]

//Pasar todos los nombres excepto "Miguel"
const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel")
console.log(nuevaLista);

// .reduce() obtener un algo a partir de una lista
const valores = [3, 56, 23, 5, 90, 100]
const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
console.log(acumulado);//3
console.log(cur);// 56, 23, 5, 90, 100
console.log(i); // 1, 2, 3, 4, 5
console.log(arrayOriginal);// [3, 56, 23, 5, 90, 100]
return acumulado + cur
})
console.log(suma);//277
