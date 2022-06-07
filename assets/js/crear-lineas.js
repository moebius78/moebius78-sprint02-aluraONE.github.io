function dibujarRecta(posX, posY, x, y,lw,color){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");

    pincel.lineWidth = lw;
    pincel.strokeStyle = color;
	pincel.beginPath();
    pincel.lineCap = "round";
	pincel.moveTo(posX,posY);
	pincel.lineTo(x,y);
	pincel.stroke(); 
}

function dibujarCirculo(x, y, radio, color){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    
    pincel.strokeStyle = color;
    pincel.beginPath();
    pincel.lineWidth = 8;
    pincel.arc(x, y, radio, 0, 2*3.14);
    pincel.stroke();
}
