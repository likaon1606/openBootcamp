// Funciones asincronas

function miAsin() {
    // Hace una llamada a una base de datos externa
    // Puede darnos algún error
}

// Promesas ->

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    // Si está todo correcto
    if (i !== 0) {
        return resolve()
    } else {
        reject()
    }
})
// consumir las promesas
// controla los exitos y los rechazos de la funcion
miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))// si se ejecuta correctamente usa este
    .catch(() => console.log("Error"))// si no se ejecuta correctamente usa "Error" o el mensaje que queramos
    .finally(() => console.log("Yo me ejecuto siempre"))



