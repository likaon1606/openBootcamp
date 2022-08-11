// Crea un nuevo fichero JS que contenga las siguientes líneas
// - Una clase llamada "Estudiante" que tenga:
class Estudiante {
    // - Una variable llamada nombre
    nombre;
    // - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
    asignaturas;

    constructor(nombre, asignaturas) {
        this.nombre = nombre
        this.asignaturas = asignaturas
    }
    // - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
    obtenDatos() {
        console.log(`Hola soy ${this.nombre}, y estudio los leguajes de: ${this.asignaturas}`);
    }
}

// - Crea una nueva instancia de "Estudiante"
const nuevoE = new Estudiante("Ariel", "Javascript, HTML, CSS")
console.log(nuevoE);

// - Haz la llamada al método obtenDatos
nuevoE.obtenDatos()

//..............................
//MANERA MAS CORTA DE RESOLVERLO
//..............................

class Estudiante {
    nombre = "Gorka"
    asignaturas = ["Javascript", "HTML", "CSS"]

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

const estudiante = new Estudiante()

console.log(estudiante.obtenDatos())