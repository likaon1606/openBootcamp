// Comparar si solo algunos elementos de la lista cumplen una condicion
// .some() devuelve true si por lo menos un elemento cumple la condición
const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2]

const res = array.some(valor => valor < 7)//true
console.log(res);//true

const existe = array.some(valor => valor === 90)
console.log(existe);//false porque no existe el valor en el array

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad:28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29 }
]

const existeMiguel = listaObjetos.some(persona => persona.nombre === "Miguel")
console.log(existeMiguel);//true porque Miguel existe en el array
const existeJuan = listaObjetos.some(persona => persona.nombre === "Juan")
console.log(existeJuan);//false porque Juan no existe en el array

// Cómo obtener una lista a partir de un objeto iterable
// .from() separa los caracteres de una lista
const str = "Hola soy Gorka"
const ar_str = Array.from(str)
console.log(ar_str);//[ 'H', 'o', 'l', 'a', ' ', 's', 'o', 'y', ' ', 'G', 'o', 'r', 'k', 'a' ]

// new Set([])
// permite almacenar valores únicos de cualquier tipo, ya sea valores primitivos o referencias a objetos.
const set = new Set([2, 3, "hola", 4])
const ar_set = Array.from(set)
console.log(ar_set);//[ 2, 3, 'hola', 4 ]

// .keys()
const keys = array.keys()
console.log(keys); //objeto de tipo iterador

const ar_keys = Array.from(keys)
console.log(ar_keys);// crea un array con los indices de cada valor
                    //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

