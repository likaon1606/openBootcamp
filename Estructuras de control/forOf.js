let lista = [ 1, 4, 6, 10, 22, 900];

//for of
for (valor of lista) {
    console.log(valor);
}

// for each
lista.forEach(valor => {
    console.log(valor);
})

// for...in adecuada para objetos
let persona = {
    nombre: "Ariel",
    apellido: "Fuentes",
    edad: 42,
    isDeveloper: true
}

for (propiedad in persona) {
    console.log(propiedad); //accede a las propiedades, NO al contenido
    console.log(persona[propiedad]);//para acceder al contenido de la propiedad, se debe llamar con []
}