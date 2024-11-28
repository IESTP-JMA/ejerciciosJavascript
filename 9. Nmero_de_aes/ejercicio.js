function numeroDeAes(cadena) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === 'a') {
            contador++;
        }
    }
    return contador;
}

// Código de prueba
console.log(numeroDeAes("abracadabra")); // Salida: 5
console.log(numeroDeAes("etinol")); // Salida: 0
console.log(numeroDeAes("")); // Salida: 0
