// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const obj = {
    nombre: "Ariel",
    apellido: "Fuentes",
    edad: 42,
    altura: 1.79,
    eresDesarrollador: true
}

// - Una variable que obtenga tu edad a partir del objeto anterior

const edad = obj.edad
console.log(edad);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los 
// datos personales de tus dos mejores amig@s

const lista = [
    {
        nombre: "Ariel",
        apellido: "Fuentes",
        edad: 42,
        altura: 1.79,
        eresDesarrollador: true
    },
    {
        nombre: "Abraham",
        apellido: "Ruíz",
        edad: 45,
        altura: 1.75,
        eresDesarrollador: true
    },
    {
        nombre: "Horacio",
        apellido: "Maldonado",
        edad: 43,
        altura: 1.79,
        eresDesarrollador: false
    }
]

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const newList = lista.sort( (a, b) => b.edad - a.edad )
console.log(newList);