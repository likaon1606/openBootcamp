// Iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined]

//Forma antigua y poco eficiente
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// FORMA MODERNA ES6 MAS EFICIENTE .forEach()
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19]

arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor);
})
console.log(suma);//205 suma todos los valores

// Busqueda de un valor dentro de una lista
// .find()
//Encontrar el elemento 90
const variable = array.find(valor => {
    if (valor === 90) {
        return true
    }
})
console.log(variable);//90

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad:28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29 }
]
// FORMA NO EFICIENTE
// const objeto = listaObjetos.find(o => {
//     if (o.nombre === "Miguel") {
//         return true
//     }
// })
//FORMA EFICIENTE
const objeto = listaObjetos.find(o => o.nombre === "Miguel")
console.log(objeto.edad);//28

const { edad } = listaObjetos.find(o => o.nombre === "Amaia")
console.log(edad);//29