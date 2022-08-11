// Trabajando con fechas

const fecha = new Date()//fecha ahora
console.log(fecha);//fecha de hoy

//Los meses inicializan en 0 (0 es Enero y 11 es Diciembre)
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192)
console.log(fecha2);//Fri Nov 20 1987 01:23:52 GMT-0600 (hora estándar central)

const fecha3 = new Date(1000000)// en milisegundos, pueden ser negativos
console.log(fecha3);//Wed Dec 31 1969 18:16:40 GMT-0600 (hora estándar central)

const fecha4 = new Date("October 12, 1979 12:15:15")
console.log(fecha4);//Fri Oct 12 1979 12:15:15 GMT-0600 (hora estándar central)

//Comparar fecha, si es posterior o no

console.log(fecha > fecha2);//true
const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192)
console.log(fecha5 === fecha2);//false, es un error, no se pueden comparar fechas de esta manera

//Comparar fechas de manera correcta
//Convirtiendo fechas a milisegundos para compararlas
//getTinme lo convierte en milisegundos

console.log(fecha2.getTime() === fecha5.getTime());// true

//Obtener el día, mes, y año de una fecha
// .getDate() obtiene fecha o día

console.log(fecha2.getDate());//20

//Obtener el mes
// .getMonth()
console.log(fecha2.getMonth() + 1);// es +1 porque inician en 0 los meses

//Obetener el año
// .getFullYear()
console.log(fecha2.getFullYear());// 1987

//Mostrar una feccha en un string
// .toLocalDateString

console.log(fecha2.toLocaleDateString("en-MX"));// 11/20/1987
//El "en-MX" significa como mostrará la fecha dependiendo de la localidad
