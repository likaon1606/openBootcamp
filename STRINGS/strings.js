let str = "Hola soy un string"
console.log(str.length);//18

//Obtener partes de cadenas de caracteres
//slice() substring() substr(esta obsoleto)
let slice_str = str.slice(0, 4)
console.log(slice_str);//Hola

let substring_str = str.substring(0, 4)
console.log(substring_str);//Hola

let substr_str = str.substr(0, 4)
console.log(substr_str);//Hola, pero aqí devuelve 4 caracteres apartir de la posicion indicada 

//REEMPLAZAR parte del contenido de texto
let cadena = "Hola mi nombre es Ariel"

console.log(cadena.replace("Ariel", "Zaid"));//reemplaza Zaid por Ariel

let texto_largo = "Un poema es una obra de poesía normalmente en verso, esté o no sujeto a los recursos poéticos clásicos de la métrica, el ritmo y la rima. También hay poemas en prosa. Un poema largo puede dividirse en «cantos», y uno breve en estrofas y soneto. Un conjunto de poemas es un poemario."

console.log(texto_largo.replace("a", "k"));//solo actua por la primera coincidencia

//Reemplaza todas las coincidencias con expresiones regulares
console.log(texto_largo.replace(/a/g, "k"));//con /g se cambian todas porque es global

//convertir a minusculas
let input = "Escorpio"
let db = "escorpio"

console.log(input.toLowerCase() === db.toLowerCase());//true

//trim() elimina los espacios en blanco al principio y al final
let str_3 = "          Hola soy un string con espacios al final.              "
console.log(str_3.length);//65
console.log(str_3.trim().length);//41
console.log(str_3.trimStart().length);//55 elimina espacio al inicio con start
console.log(str_3.trimEnd().length);//51 elimina espacios en blanco al final

//Obtener un caracter por su posicion
let str_4 = "Hola soy el string numero 4, sí soy."

console.log(str_4.charAt(5));//s
console.log(str_4[5]);//s
console.log(str_4.indexOf("soy"));//5, es la posicion donde incia la palabra
// si indexOf no encuentra la palabra marca -1, devuelve la primer coincidencia
console.log(str_4.lastIndexOf("soy"));//32, la última coincidencia de la palabra

//........................................................................
//METODOS DE EXPRESIONES REGULARES----------------------------------------
//https://regexr.com
//........................................................................

//match() devuelve todas las coincidencias de una palabra
console.log(texto_largo.match(/de/g));//[ 'de', 'de', 'de', 'de' ]

//includes() devuelve booleano si una palabra existe en el texto o no
console.log(texto_largo.includes("poema"));//true

//startsWith si empieza con una palabra es case sensitive
console.log(texto_largo.startsWith("Un"));//true
//si termina con una palabra es case sensitive
console.log(texto_largo.endsWith("conejo"));//false
