//LISTAS O ARRAYS SON LO MISMO
let var1 = 45
let array = [1, "hola", false, { id: 5 }, null, undefined, var1]//tambien podemos pasarles variables
console.log(array);//[ 1, 'hola', false, { id: 5 }, null, undefined, 45 ]

//ACCEDER A LOS VALORES DE UNA LISTA O ARRAY
console.log( array[1] );//acceso al primer elemento

//INTRODUCIR NUEVOS VALORES EN LAS LISTAS
//.push .unshift() => mutan el valor del array
//.push() introduce valores al final del array
array.push("final")
console.log(array);

//valores al principio con .unshift()
array.unshift("principio")
console.log(array);

//Metodos para eliminar valores en los arrays
const array2 = [ 1, 3, "hola", false]

//.pop() .shift() => mutan el valor del array
// .pop() elimina valores al final
array2.pop()
console.log(array2); //elimina el ultimo que es false
// .shift() elimina valores al inicio
array2.shift()
console.log(array2);//elimina el 1 que es el primer elemento

// metodo para eliminar, modificar o añadir valores en los array
// .splice(x, y ,z)
const array3 = [1, 2, 3, 4, 5, 6]

//eliminar
array3.splice(2, 1)//el primer valor es el indice y el segundo son cuantos valores alimina a partir de esa posición
console.log(array3);

// Añadir valores .splice(indice, 0, valores)
array3.splice(2, 0, "hola", 123)//añade los valores a partir de la posicion 2
console.log(array3);

// Modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, "adios")//se modifica el "hola" por "adios"
console.log(array3);
