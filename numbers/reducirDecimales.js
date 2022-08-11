//toFixed limita el numero de decimales, pero lo convierte en string

let a = 0.1
let b = 0.2
let resul = a + b 
console.log(typeof(resul.toFixed(1)));//0.3, lo convierte en string, por eso hay que convertirlo a number

//toPrecision() tambien devuelve un string

let x = 1234.567890
console.log(x.toPrecision(7));