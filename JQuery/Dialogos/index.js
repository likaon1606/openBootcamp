const boton = document.querySelector("#btn")
console.log(boton);

boton.addEventListener("click", () => {
    //alert("Se ha hecho click")
    
    // confirm("¿Estás de acuerdo?") && console.log(("Ok"));//pasa un mensaje por pantalla y pide si aceptamos o rechazamos
    
    // confirm("¿Estás de acuerdo?") 
    // ? console.log("Ok") 
    // : console.log("No!!");
    const respuesta = confirm("¿Seguro?")
    if (respuesta) {
        console.log("Estás de acuerdo");
    } else {
        console.log("No estás de acuerdo");
    }
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cuál es tu nombre?")

    if (nombre) {
        console.log(`Tu nombre es ${nombre}`);
    } else {
        console.log("No haz introducido nada");
    }
})

const lista = [{
    nombre: "Gorka",
    edad: 34,
}, {
    nombre: "Julen",
    edad: 21
}, {
    nombre: "Amaia",
    edad: 30    
}]

//console.log(lista);
console.table(lista)