/*Crea un archivo JS que contenga las siguientes líneas
- Una cadena de texto con tu Nombre
- Otra cadena de texto con tu Apellido
- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
- Una variable que contenga la primera letra del Nombre
- Otra variable que contenga la última letra del Apellido
- Una cadena de texto que elimine los espacios de la variable "estudiante"
- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
*/
let name = "Ariel"
let lastName = "Fuentes"
let student = name + " " + lastName + " " + "estudiante" 
console.log(student);

let estudianteMayus = student.toUpperCase()
let estudianteMinus = student.toLowerCase()
let numChar = student.length
let firstChar = name[0]
console.log(firstChar);
let finChar = name.charAt(4)
console.log(finChar);
let delSpaces = student.replace(/ /g, "")
console.log(delSpaces);
let nameBol = student.includes(name)
console.log(nameBol);

