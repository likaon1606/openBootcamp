// Inheritance - Herencia
class Persona {
    //protegiendo variables con "_"
    _nombre
    _edad
    constructor(nombre, edad) {
        this._nombre = nombre
        this._edad = edad
    }

    saludo() {
        console.log(`Hola soy ${this._nombre}, tengo ${this._edad} años.`);
    }
}
// con extends extiende la herencia de la clase Persona
class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {//le agregamos "lenguaje"
        //super() nos permite utilizar el constructor de la clase padre
        super(nombre, edad, lenguaje) 
        this.lenguaje = lenguaje
    }

    saludo() {//Override -> volver a definir algo que ya estaba definido
        super.saludo()//accedemos al método saludo de la clase padre
        console.log(`Y soy desarrollador de ${this.lenguaje}`);
    }
}    

const nuevodev = new Desarrollador("Gorka", 34, "Javascript")
console.log(nuevodev);//Desarrollador { nombre: 'Gorka', edad: 34, lenguaje: 'Javascript' }
nuevodev.saludo()

// Polimorfismo => poli muchos y morfismo es formas -> varias formas
//significa que las clases pueden tomar diferentes formas


