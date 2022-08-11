//Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
//- Un nuevo Set con los nombres de tu familia
const array = ["Ariel", "Natalia", "Zaid", "Jazmín"]
const setFamilia = new Set(array)
console.log(setFamilia);

//- Modifica el Set original añadiendo tu nombre (duplicado) 
//(debería darte lo mismo)

setFamilia.add("Ariel")
console.log(setFamilia);

//- Modifica el Set original añadiendo el nombre "Javascript"
// (ya que empieza a formar parte de tu vida ;)

setFamilia.add("Javascript")
console.log(setFamilia);