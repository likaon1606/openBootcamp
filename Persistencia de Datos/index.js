// localStorage son datos persistentes en el servidor y navegador

// localStorage.setItem("nombre", "Ariel")
// localStorage.setItem("nombre", "Miguel")

// console.log(localStorage.getItem("nombre"));

// localStorage.setItem("persona", JSON.stringify({nombre: "Ariel", edad: 42}))// JSON.stringify obtenemos los valores como un string
// console.log(JSON.parse(localStorage.getItem("persona")));// JSON.parse se obtienen los datos como un objeto

// JSON.stringify -> convierte un objeto/array en un String
//JSON.parse -> convierte un objeto/array convertido a través de stringify en un objeto de Javascript

// Eliminar un item de localStorage
localStorage.removeItem("nombre")


//.............................
// sessionStorage
// los métodos son iguales a localStorage
sessionStorage.setItem("nombre-sesion", "Ariel")

//..........................
/*----Cookies-----*/
//..........................

// crear una cookie
document.cookie = "nombreCookie=ArielCookie"

// Darle caducidad a una cookie
document.cookie = "nombreCaducidad=Nombre;expires=" 
+ new Date(2023, 0, 1).toUTCString()

console.log(document.cookie);
