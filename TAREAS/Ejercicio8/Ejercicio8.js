// Crea un archivo JS que contenga las siguientes líneas
// - Una función sin parámetros que devuelva siempre "true"

function sinPar() {
    return true
}
console.log(sinPar());

// - Una función asíncrona que utilice un setTimeout y 
// pase por consola un "Hola soy una promesa" 
// 5 segundos después de haberse ejecutado

setTimeout(function () {
    console.log("Hola soy una persona");
},5000);

// - Una función generadora de índices pares automáticos

function* generatorId() {
    let id = 0;
    while(true) {
        id++
        if (id === 20) {
            return id
        }
        yield id
    }
}
const gen = generatorId();

console.log(gen.next());