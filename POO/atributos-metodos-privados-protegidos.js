class Persona {
    // Atributos privados con -> #
    // solo se acceden desde dentro de la clase
    #nombre
    #edad

    // variables Protegidas -> _
    // solo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true
    constructor(nom, edad) {//metodo constructor para crear una clase
        this.#nombre = nom//así se declaran las variables o los atributos de las clases
        this.#edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años `);
    }
    obtenNombre() { // Función getter -> porque nos permite acceder de forma controlada  a algún atributo protegido
        return this.#nombre
    }

    #obtenEdad() {
        return this.#edad
    }

    getEdad() {
        return this.#edad
    }

    setEdad(nuevaedad) {
        this.#edad = nuevaedad
    }
}

const persona = new Persona("Gorka", 70)
console.log(persona);

//Accediendo a los atributos, propiedades o métodos públicos

// console.log(persona.nombre);//Gorka
// persona.saludo()// aquí accedemos a la funcióin y se rellena con los valores definidos de la clase Persona
// console.log(persona.obtenNombre())//Gorka, así obtenemos la propiedad privada de la clase
// // console.log(persona.obtenEdad());
// console.log(persona._isDeveloper);

// Getter -> métodos que permiten obtener atributos o métodos privados o protegidos
// tienen que ser accesibles desde fuera, no tienen que ser ni privadas ni protegidas

const edad = persona.getEdad()
console.log(edad);


// Setter -> métodos que permiten cambiar el valor de alguno de los atributos privados o protegidos
// Quiero cambiar la edad de la persona
persona.setEdad(34)
console.log(persona.getEdad());//34 se cambió la edad del método privado

//ATENCION!!! Getter y Setter no dejan de ser métodos públicos porque se pueden accesar desde fuera
