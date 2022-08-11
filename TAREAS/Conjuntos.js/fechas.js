// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// - La fecha de hoy

const fecha = new Date()
console.log(fecha);

// - La fecha de tu nacimiento

const fecha2 = new Date("April 16, 1980")
console.log(fecha2);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

const comparar = fecha.getTime() > fecha2.getTime()
console.log(comparar);

// - Una variable que contenga el día de tu nacimiento

const day = fecha2.getDate()
console.log(day);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

const  month = fecha2.getMonth() + 1
console.log(month);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const year = fecha2.getFullYear()
console.log(year);