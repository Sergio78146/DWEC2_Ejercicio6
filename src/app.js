"use strict";
/**
 * Función para verificar si el usuario es mayor o menor de edad.
 */
function verificarEdad() {
    const edadInput = document.getElementById("edadInput");
    const resultadoDiv = document.getElementById("resultado");
    const edad = parseInt(edadInput.value);
    // Comprobar si la edad es un número válido
    if (isNaN(edad) || edad < 0) {
        resultadoDiv.textContent = "Por favor, introduce una edad válida (número positivo).";
        return;
    }
    // Determinar si es mayor o menor de edad
    if (edad < 18) {
        resultadoDiv.textContent = "Eres menor de edad.";
    }
    else {
        resultadoDiv.textContent = "Eres mayor de edad.";
    }
}
// Asignar el evento al botón
const verificarBtn = document.getElementById("verificarBtn");
verificarBtn.addEventListener("click", verificarEdad);
