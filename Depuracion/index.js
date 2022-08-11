const persona = {
    nombre: "Ariel",
    edad: 34
}

console.log(persona);

function obtenDObleEdad(edad) {
    return 2 * edad
}

const dobleEdad = obtenDObleEdad(persona.edad)

console.log(dobleEdad);

function obtenArray(edad) {
    for (i = 0; i < 10; i++) {
        const numero = edad + i
        console.log(numero);
        // arrayNums.push()
        arrayNums = [...arrayNums, numero]
    }
    return arrayNums
}

const array = obtenArray(persona.edad)

console.log(array);
