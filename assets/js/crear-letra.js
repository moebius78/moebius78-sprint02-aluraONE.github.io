function crearLetra(a,x,y,t,color){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");

    pincel.font = t;
    pincel.fillStyle = color;
    pincel.fillText(a, x, y);
}

function crearLetraIncorrecta(t){
    for(var i = 0; i < palabraElegida.length; i++){
        if(t != palabraElegida[i] && !teclasPresionadas.includes(t)){
            letrasErradas += 1;
            crearLetra(t.toUpperCase(), (x - 50) + (letrasErradas * 50), 650, "20px Arial", "gray");
            incluirLetra(t);
            dibujarHorca(letrasErradas);
            const fallo = new Audio('./assets/audio/fallo.ogg');
            fallo.play();
        
        }
        break;
    }
}

function crearLetraCorrecta(t){
    for(var i = 0; i < palabraElegida.length; i++){
        if(t == palabraElegida[i] && !teclasPresionadas.includes(t)){
            letrasAcertadas +=1;
            crearLetra(t.toUpperCase(), x + (i * 50), 595, "30px Arial", "#0A3871");
            const acierto = new Audio('./assets/audio/acierto.ogg');
            acierto.play();
        
        }
    }
    verficarGanaste(letrasAcertadas, palabraElegida);
    incluirLetra(t);
}

function incluirLetra(t){
    if(!teclasPresionadas.includes(t)){
        teclasPresionadas.push(t);
    }
}