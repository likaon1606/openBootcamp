// se utiliza el simbolo del $("selector").accion() y el identificador de lo que queramos, ejemplo:
// li, h1, p, span, etc.

//$("li").hide()

// la buena práctica es usar el $(document).ready(() => {})
//o pasarle $(() => {}), es lo mismo que lo de arriba para que espere a cargar el documento
// para que se ejecute una vez se haya cargado todo el documento

// con # se hace referencia a los id en JQUERY
$(() => {
    // Selectores:
    // id="el-1" => "#el-1"
    // class="el-1" => ".el-1"
    // $("#el-1").hide()

    // ocultamos el h1
    $(".hide-btn").click(() => {
        console.log("Ocultando");
        // $("h1").hide()
        $("h1").fadeOut()//para hacer el efecto menos repentino con desvanecimiento
    })

    //mostramos el h1
    $(".show-btn").click(() => {
        console.log("Mostrando");
        // $("h1").show()
        $("h1").fadeIn()//para hacer el efecto menos repentino con desvanecimiento
    })

    //cambiar el titulo a color rojo, dando click a los "li" de la "ul"
    $("li").dblclick(() => {// dblclick, indica un doble click
        console.log("click");
        $("h1").css({ color: "red" })
    })

    // Añadir un nuevo elemento a la lista de los "li"
    $(".new-element").click(() => {

        //se añade un nuevo elemento "li" al final de la lista "ul"
        // $("ul").append("<li>Nuevo Elemento</li>")

        //añadir al inicio con "prepend"
        $("ul").prepend("<li>Nuevo Elemento</li>")
    })

    // cambiar el color con el "hover" cuando pasamos por el elemento "li"
    $("li").mouseenter((elem) => {
        elem.target.style.color = "blue"
    })

    // volver a poner negro el texto de los "li" al salir el ratón
    $("li").mouseleave(elem => {
        elem.target.style.color = "black"
    })
})

