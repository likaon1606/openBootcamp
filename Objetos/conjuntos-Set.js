// Sets o conjuntos (en castellano)
//Es un conjunto de valores no ordenados únicos, no permiten almacenar valores que ya existen
const array = [1,2,3,4,5,6,1,2,5]

//creando un nuevo conjunto o Set
const miSet = new Set(array)
console.log(miSet);//Set { 1, 2, 3, 4, 5 }

// Añadir valores .add()
// No añade valores duplicados
miSet.add(9)
console.log(miSet);//Set { 1, 2, 3, 4, 5, 6, 9 } añadió el 9

// Eliminar valores dentro del conjunto
// .delete()

miSet.delete(1)
console.log(miSet);//Set { 2, 3, 4, 5, 6, 9 }

//Eliminar todos los valores del set
// .clear()
// miSet.clear()
// console.log(miSet);// Set {}, set vacío, se elimino todo

// .has() similar a .include()
// para buscar un elemento
console.log(miSet.has(4));// true, contiene ese valor el set

//conocer el tamaño del Set
// .size es una propiedad y no un método
console.log(miSet.size);// 6, valores únicos

// iteración dentro de los valores del Set
miSet.forEach(valor => {
    console.log(valor);// 2,3,4,5,9
})

const it_miSet = miSet.values()
console.log(it_miSet);// {[Iterator]}

const ar_miSet = [...miSet]
console.log((ar_miSet));//[ 2, 3, 4, 5, 6, 9 ]