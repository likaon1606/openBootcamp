//Importar 1 a 1 las funciones del modulo matematicas
// import { suma, eleva, nombre } from './moduls/matematicas.js';

//Importar todas las funciones del modulo matematicas
import * as modulos from './moduls/matematicas.js'

//Import por defecto o por nomenclatura { valor, constante o funcion }
import getAutor, { libro } from './moduls/literatura.js';

const sum = modulos.suma(4, 12);
console.log(sum);

const potencia = modulos.eleva(2, 21);
console.log(potencia);

console.log(modulos.nombre);//matemáticas

console.log(getAutor());
console.log(libro);