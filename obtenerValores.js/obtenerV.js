//OPERADOR .valueOf() - Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3); //se le obliga a que el valor sea numérico
console.log(typeof(a + b));//number

//valueOf()
console.log(typeof(a.valueOf() + b.valueOf()));//number

let str = new String("Hola soy un string");
console.log(str);//[String: 'Hola soy un string']
console.log(str.valueOf());//Hola soy un string

//NaN (Not a  Number) - Infinity
let n = Number("adios");
console.log(n);//NaN
console.log(isNaN(n));//true

let numerador = 19;
let divisor = 0;

let divisor_2 = null;

console.log(numerador / divisor);//Infinity
console.log(numerador / divisor_2);//Infinity

let numero = "5.89";
let num2 = 17.2;

console.log(typeof numero);//string
console.log(numero + num2);//lo está concatenando porque es un string

console.log(Number(numero) + num2);//se transforma en numero con Number

//Números hexadecimales (base 16), no hay decimales en hexadecimal
let numHex = "0x3ab7";
console.log(parseInt(numHex));//15031, se convierte a numero entero

//obtener los valores máximo y mínimo
let min_precision = Number.EPSILON;//2.220446049250313e-16
let min_valor_JS = Number.MIN_VALUE;//5e-324
let max_valor_JS = Number.MAX_VALUE;//1.7976931348623157e+308

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);






