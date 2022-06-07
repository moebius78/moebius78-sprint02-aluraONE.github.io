var palabraElegida = crearPalabraSecreta();

function crearPalabraSecreta(){
    var palabras = ["eufonia", "imperio", "resumen", "puntero", "arreglo", "matriz", "proceso", "pila", "arbol", "filtro", "datos", "suceso"];
    var numeroAleatorio = Math.round(Math.random() * 10);

    palabras = palabras[numeroAleatorio];

    return(palabras);
}
