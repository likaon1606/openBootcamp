// UNIR 2 LISTAS .concat(lista2)
const lista1 = ["hola", 2, false, null]
const lista2 = ["adiós", 8, true, undefined]

console.log((lista1.concat(lista2)));//[ 'hola', 2, false, null, 'adiós', 8, true, undefined ]

const lista3 = lista1.concat(lista2)
console.log(lista3);//[ 'hola', 2, false, null, 'adiós', 8, true, undefined ]

//FACTOR DE PROPAGACION (LISTAS Y OBJETOS) ...ARRAY U OBJETO
// cómo unir dos listas con el factor de propagación
console.log(...lista3);//loguea por separado los elementos hola 2 false null adiós 8 true undefined

const lista4 = [...lista1, ...lista2]
console.log(lista4);// [ 'hola', 2, false, null, 'adiós', 8, true, undefined ]

//ERROR!! MAL ENTENDIDO EL CONCEPTO DEL FACTOR DE PROPAGACION
const lista5 = [lista1, lista2]
console.log(lista5);// se obtiene una lista de 2 arrays [ [ 'hola', 2, false, null ], [ 'adiós', 8, true, undefined ] ]


