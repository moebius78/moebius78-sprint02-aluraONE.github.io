var teclasPresionadas = [];
var letrasErradas = 0;
var letrasAcertadas = 0;
var x = 140;

function teclaVerificador(e){
    var tecla = e.key;
    var teclasPermitidas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    if(teclasPermitidas.includes(tecla)){
        if(letraCorrectaVerificador(tecla)){  
            crearLetraCorrecta(tecla);
        }else{
            crearLetraIncorrecta(tecla);
            verficarPerdiste(letrasErradas);
        }
    }else{
        alert("Ojo! La tecla que presionaste no es valida " + tecla);
    }
    return e;
}

function restearEstadisticas(){
    palabraElegida = crearPalabraSecreta();
    teclasPresionadas = [];
    letrasErradas = 0;
    letrasAcertadas = 0;
    x = 140;

    return;
}
