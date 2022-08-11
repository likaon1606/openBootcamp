// obtener todos los parrafos que son arrastrables
// . para las clases y # para los id
// .querySelectorAll -> Obtiene todos los elementos con una clase o id 
const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

// dragstart -> el inicio del arrastre
parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el parrafo: " + parrafo.innerText);
        //agregar una clase nueva con classList.add llamada "dragging"
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)

        //Al arrastrar podemos cambiar el efecto por defecto, por una imagen,
        // en este caso usamo el cuadrado rojo
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        // setDragImage(elemento, offset en x, offset en y), requiere de 3 elementos
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        console.log("final del arrastre: " + parrafo.innerText);
        // Remuevo la clase "dragging"
        parrafo.classList.remove("dragging")
    })
})

// Drag Over se está actualizando a cada momento del redenderizado, mientras 
// está seleccionado en el arrasstre
secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move" // para cambiar el efecto del icono al arrastar, NO de la imagen
        // console.log("Drag Over");

    })

    // Drop cuando se suelta el elemento que se arrastró
    // Atencion!! .dataTransfer nos permite transferir información relacionada
    // con loe ventos drag and drop
    seccion.addEventListener("drop", event => {
        console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Parrafo id: ", id_parrafo);
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})