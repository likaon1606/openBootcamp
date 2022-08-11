// Crea un nuevo proyecto de Node
// - Crea un fichero index.html (utiliza el comando "!")
// - Crea un fichero index.js
// - Integra el fichero index.js en el html
// - En el fichero index.js:
// - Crea una variable con tu nombre
let name = "Ariel"
// - Crea una variable con tu apellido
let lastName = "Fuentes"
// - Crea un objeto con tu nombre y tu apellido
let obj = {name, lastName}
// - Almacena el objeto anterior en la SessionStorage
JSON.parse(sessionStorage.getItem(obj));
// - Almacena el objeto anterior en la LocalStorage
JSON.parse(localStorage.getItem(obj));
// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
document.cookie = "ArielFuentes;expires=" 
+ new Date().setHours(00,2,0,0)
// - Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies

// - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo

// - Observa cómo la SessionStorage está vacía

// - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador

// - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado

//...............................................
//Otra solución

const nombre = "Gorka"
const apellido = "Villar"

const datos = {
    nombre,
    apellido
}

// sessionStorage.setItem("datos", JSON.stringify(datos))
// localStorage.setItem("datos", JSON.stringify(datos))

const now = new Date()
// document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`