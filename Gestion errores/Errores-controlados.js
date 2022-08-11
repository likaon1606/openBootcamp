// Errores controlados -> lanzando un error personalizado

const miFuncion = val => {
    if (typeof val === "number") {
        return val * 2
    }
    //return false;
    throw new Error("El valor debe ser de tipo número")//lanzamos el error personalizado
}

//const elDoble = (miFuncion("a1a"));
const numero = "8";

try {
    //código que puede fallar
    console.log("Está ejecutándose de manera correcta");
    const doble = miFuncion(numero)
    console.log(doble);//si se pasa un número, corre esta parte
} catch(e) {
    //En caso de que falle, quiero que ejecutes esto
    console.error(`El valor de e es ${e}`);
    console.error("ERROR!");//ERROR!
} finally {
    console.log("Esto se va a ejecutar siempre, hay o no error");
}

// Errores más comunes
// Internal Error, SyntaxError, TypeError, RangeError y ReferenceError



