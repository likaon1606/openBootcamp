// CASOS ESPECIFICOS - breack, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (i = 0; i < lista.length; i++) {
    
    if (lista[i] === 3) {
        continue;//continue vuelve arriba y no lo imprime
    }
    
    console.log(lista[i]);// 1, 2, 3, 4, 5, 6, 7, 8

    if (lista[i] > 5) {//detenemos el bucle cuando se cumpla la condicion
        break;//se sale del bucle
    }
}


// Cuál es el ámbito de un bucle
//es el alcance de una variable dentro de un bucle, solo esta en el scope
