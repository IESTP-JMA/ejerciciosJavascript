// escribe tu respuesta acá
function imprimirArreglo(arreglo) {
    let i = 0; 
    while (true) { 
        if (arreglo[i] === undefined) { 
            break;
        }
        console.log(arreglo[i]);
        i++; 
    }
}


// código de prueba
console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
// 1
// Hola
// 2
// Mundo