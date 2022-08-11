//LISTAS, ARRAY O ARREGLO
const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(1, "hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];//lista de listas

// console.log(lista);
// console.log(lista2);
// console.log(lista3);
// console.log(lista4);

//OBJETOS
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Gorka", "Raul", "Zaid"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32,
    },
    "altura-tarjeta": 4, //se puede definir nombre de las keys entre "", pero solo para una necesidad especifica
}
movil.año = 2019;
movil.marca = "Samsung";//re asignacion de valores en objetos

console.log(movil.tarjeta.marca);
console.log(movil.año);
console.log(movil.marca);

//FECHAS
//Librerías de apoyo Moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);//utilizando milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() +1; //se pone mas uno porque empieza desde el cero, asi obtenemos febrero
const anyo = ahora.getFullYear();

console.log(dia, mes, anyo);

