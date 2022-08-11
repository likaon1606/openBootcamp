// CLASES
// Las variables dentro de una clase o un objeto se llaman atributos
// Las funciones se llaman métodos
// this, hace referencia al objeto en el cual se encuentra ya mismo
class Persona {
    nombre;
    edad;
    isDeveloper;
    constructor(nombre, edad, isDeveloper) {//metodo constructor para crear una clase
        this.nombre = nombre//así se declaran las variables o los atributos de las clases
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años `);
    }
}

//new crea un objeto de la clase que le pasemo, ej: Persona
const nueva_persona = new Persona("Gorka", 34, true)
console.log(nueva_persona);//Persona { nombre: 'Gorka', edad: 34, isDeveloper: true }
nueva_persona.saludo()

// DATO: Instanciación es una forma de inicializar una clase

let numero = 60 //inicializar
let persona_2 = new Persona("María", 34, false) // Instanciar

// Operador instanceof -> similar a typeof pero para clases

console.log(persona_2 instanceof Persona);//true si es una clase de tipo Persona y un false si no lo es

