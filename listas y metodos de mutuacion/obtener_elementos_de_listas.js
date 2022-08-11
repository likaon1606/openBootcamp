// Cómo obtener una lista a partir de otra lista
// .slice()
const array = ["hola", 1, 2, 3, true, null, "adiós"];

// el metodo .slice() NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
console.log(array.slice(2, 5));//primer valor es el inicial y el segundo valor es donde terminará
                                //obtiene [2, 3, true]
// DESDE EL FINAL AL PRINCIPIO
const array2 = array.slice(2, -2)// va del final a la posición -2
console.log(array2);// [2, 3, true]