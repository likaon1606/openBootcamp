/*- Una variable que contenga tu altura en centímetros (entero)
- Una variable que contenga tu altura en metros (número de coma flotante)
- Una variable que contenga tu peso en kilogramos (número de coma flotante)
- Una variable que contenga tu altura en metros redondeada hacia arriba
- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" 
es igual al máximo valor que se puede obtener en Javascript
*/

let alt = parseInt(179);
let alt2 = parseFloat(1.79)
let peso = parseFloat(85)
let altM = Math.round(alt2)
let altB = Math.floor(alt2)
let max_value_JS = Number.MAX_VALUE;
let max_value_JS2 = Number.MAX_VALUE + 1;
console.log(max_value_JS === max_value_JS2);//true