// QUé son las funcones, cómo se declaran y cómo se utilizan.
// Bloques de codigo que se ejecutan con un fin específico

const nom = "Ari"

//saludar("Ariel")
saludar(nom)

function saludar(nombre) {//nombre se refiere al nombre del parametro, puede llamarse diferente a la constante "nom" o como queramos
    console.log(`Hola ${nombre}`);//Hola Ariel
}

//.............................

let nombre_2 = "Juan"
console.log(nombre_2);//Juan
despedir(nombre_2)
console.log(nombre_2);//Juan

function despedir(nombre) {
    nombre = "Diego"
    console.log(`Adiós ${nombre}`);//Adiós Diego
}

//le pasamos un objeto a la funcion

let persona = {nombre: "Juan", apellido: "González"}

//ATENCION!! si se cambia el contenido de un elemento de un objeto,
//se está mnodificando el objeto original y eso es fuente de errores

saludarPersona(persona)//tener cuidado porque está cambiando el objeto original
console.log(persona);//{ nombre: 'Juan', apellido: 'Villar' }

function saludarPersona(objeto) {
    objeto.apellido = "Villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);

}

saludar()

//.................................
//parametros opcionales con un valor por defecto

function imprimeNumero(numero = 7) {
    console.log(numero);
}

imprimeNumero()//si yo le paso un 9 por ejemplo, tomará el nueve, si no le paso nada tomará el valor por defecto que es 7

// valores indeterminados - factor de propagación
// ...parametros -> pasará todos los parametros que le indiquemos

function imprimir(...parametros) {
    console.log(parametros);//[ 1, 3, 9, 2, 'hola', { id: 9 } ]
}

imprimir(1, 3, 9, 2, "hola", { id: 9 })

//..................

function suma(...nums) {
    return nums.reduce((a, b) => a + b)//está sumando todos los valores dentro del array
}

const s = suma(1, 2, 3, 4)
console.log(s);//10

//...............

function multiplicar(a = 0, b = 0) {
    return a * b
}

console.log(multiplicar(4, 9));