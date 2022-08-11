//Carga y sobrecarga de funciones

function saludar() {
    hola()
}

function hola() {
    console.log("Hola, soy la función Hola");
}

saludar()

//1. Carga la función global()
//2. saludar() global()
// 3. hola() saludar() global()
// 4. saludar() global()
// 5. global()

//stack es la carga y overflow es la sobrecarga
// Funciones recursivas, se hacen referencia a sí mismas
// SOn errores de concepto que causan una sobrecarga

function recursivo() {
    recursivo()// Maximum call stack size exceeded
}

recursivo()