// escribe tu respuesta acá
function numeroDeCaracteres(cadena, caracter) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }
    return contador;
}

// Código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")); // Salida: 2
console.log(numeroDeCaracteres("MMMMM", "m")); // Salida: 0 
console.log(numeroDeCaracteres("eeee", "e")); // Salida: 4
