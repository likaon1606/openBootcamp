//actorial-for.js -> Este archivo debe calcular el 
//factorial de 10 utilizando un solo bucle for
let num = 1;
// for (i = 1; i <= 10; i++) {
//     num *= i;
//     console.log(num);
// }
//factorial-while.js -> Este archivo debe calcular 
//el factorial de 10 utilizando un bucle while
let i = 1;
// while (i <= 10) {
//     num *= i;
//     i++;
//     console.log(num);
// }

// factorial-break.js -> Este archivo debe calcular el 
//factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

while (true) {
    if (i <= 10) {
        i++;
        num *= i;
        console.log(num);
    }
    if (num === 3628800) {
        break;
    }
}
