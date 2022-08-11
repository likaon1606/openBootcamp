//Crea un nuevo proyecto de Node
// - Instala la dependencia Winston
// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

const fun = val => {
    if (typeof val === "number") {
        return val
    } throw new Error("Ingresar valor tipo numerico")
}


// - Registra el error en un archivo a través de un try...catch
const num = "sada"

try {
    const error = fun(num)
    console.log('Es verdadero');
    console.log(error);
} catch(e) {
    console.log(`El valor de e es ${e}`);
    console.log("Error");
} finally {
    console.log('Aprendiendo a canalizar errores');
}

