// Trabajando con OBJETOS

const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "González",
    isDeveloper: true,
    libros_favoritos: ["El método", "El código de la manifestación"],
    "4-juegos": [1,2,3,4]// tambien se puede definir keys con los "", solo se usa para nombres raros o especiales
}
console.log(obj.id);//4
console.log(obj["4-juegos"]);//[ 1, 2, 3, 4 ]

//acceder a propiedades a través de variables

const prop = "isDeveloper"
console.log(obj[prop]);//true

//Replicar un objeto, se copia la referencia en memoria,
//copia el mismo objeto y sus propiedades, si se hace un cambio, se cambia en el objeto original

const obj2 = obj;
console.log(obj2);//clona el obj

obj2.nombre = "Iñigo"
console.log(obj.nombre);//Iñigo

console.log(obj.nombre);//Iñigo, los cambios se reflejan en el otro objeto

let val1 = 4
let val2 = val1

val2 = 6
console.log(val1);//$
console.log(val2);//6, se reasigno el valor

//Duplicar un objeto dentro de otro objeto

const obj3 = { ...obj }

console.log(obj.nombre);//Iñigo
console.log(obj3.nombre);//Iñigo

obj3.nombre = "Gorka"
console.log(obj.nombre);//Iñigo
console.log(obj3.nombre);//Gorka, solo afecta al objeto que obj3

///////////////////
// Cómo ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
    { titulo: "Lo que el viento se llevó", anyo: 1939 },
    { titulo: "Titanic", anyo: 1997 },
    { titulo: "Moana", anyo: 2016 },
    { titulo: "El efecto mariposa", anyo: 2004 },
    { titulo: "Ted", anyo: 2012 }
]

console.log(listaPeliculas);

// .sort() -> muta el valor del array original

listaPeliculas.sort((a, b) => a.anyo - b.anyo)
console.log(listaPeliculas);//ordenamos la lista de objetos por anyo, 
//se puede por título o la key que queramos pero funciona mejor con if en titulo

