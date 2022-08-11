const persona = {
    nombre: "Gorka",
    edad: 34,
    isDeveloper: true,
    saludo: function() {
        console.log("Hola");
    }
}

//console.log(persona);
persona.saludo()

const otraPersona = {
    nombre: "Miguel",
    edad: 15,
    isDeveloper: false,
    saludo: function() {
        console.log("Hola");
    }
}

otraPersona.saludo()

// Función factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {// aqui devolvemos el objeto, por eso las llaves {}
        nombre,// es lo mismo que escribir nombre: nombre
        edad,
        isDeveloper,
        saludo: function() {
            console.log("Hello");
        }
    }
}

const nueva_persona = creaPersona("Ariel", 42, true)
console.log(nueva_persona);

const nueva_persona2 = creaPersona("Jazmín", 36, false)
console.log(nueva_persona2);
