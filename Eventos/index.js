// Creando un evento personalizado

const hTexto = document.getElementById("h-texto")

console.log(hTexto);

hTexto.addEventListener("cambioTexto", evento => {//el evento es "cambioTexto"
    console.log(evento.detail);//detail para pasar por consola los detalles del evento
    // innerText para trabajar sobre el texto del h1 "hTexto"
    hTexto.innerText = evento.detail.texto
    // cambiamos el color que está dentro de style, atributo color
    hTexto.style.color = evento.detail.color
})

//Se crea el evento
function cambiarTexto(nuevoTexto, color) {
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color
        }
    })
    //lanzamos el evento con dispatchEvent
    hTexto.dispatchEvent(evento)
}

