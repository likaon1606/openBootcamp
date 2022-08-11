const f = document.getElementById("formulario")
console.log(f);

//Cuando se envié el formulario, envié por pantalla la información de ese evento
// después evite que se ejecute el comportamiento por defecto
f.addEventListener("submit", evento => {
    console.log(evento);
    evento.preventDefault()
})