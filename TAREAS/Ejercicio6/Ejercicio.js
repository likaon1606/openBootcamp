//Una variable que contenga la lista de la compra (mínimo 5 elementos)
const compra = ["aceite", "frijol", "arroz", "atún", "azucar"]

//- Modifica la lista de la compra y añádele "Aceite de Girasol"
compra.unshift("Aceite de Girasol")
console.log(compra);

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compra.shift()
console.log(compra);

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    { titulo: "Avengers", director: "Steve", fecha: 'December 25, 2011' },
    { titulo: "Blade", director: "Snipes", fecha: 'March 25, 1995'},
    { titulo: "Underwolrd", director: "Nosferatu", fecha: 'January 12, 1999' }
]

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasRecientes = peliculas.filter(pel => pel.fecha < 'January 01, 2010')
console.log(peliculasRecientes);

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map(valor => valor.director)
console.log(directores);

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map(tit => tit.titulo)
console.log(titulos);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const unir = directores.concat(titulos)
console.log(unir);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos 
//(utilizando el factor de propagación)
const unir2 = [...directores, ...titulos]
console.log(unir2);