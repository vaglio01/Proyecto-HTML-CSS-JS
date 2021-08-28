


function iniciar(){
    console.log('ejecuto');
    var elemento=document.getElementById('lienzo');
    var elemento2=document.getElementById('lienzo2');
    var elemento3=document.getElementById('lienzo3');
    lienzo=elemento.getContext('2d');
    lienzo2=elemento2.getContext('2d');
    lienzo3=elemento3.getContext('2d');
    var imagen=new Image();
    imagen.src='./images/qbkls.png';
    imagen.addEventListener('load',modificarimagen, false);

} 
function modificarimagen(e){
    console.log(e.target);
    imagen=e.target;
    var patron=lienzo.createPattern(imagen,'repeat');

    lienzo.fillStyle=patron;
    lienzo2.fillStyle=patron;
    lienzo3.fillStyle=patron;
    lienzo.fillRect(0,0, 960, 300);
    lienzo2.fillRect(0,0, 960, 300);
    lienzo3.fillRect(0,0, 960, 300);
    imagenLienzoUno();
    imagenLienzoDos();
    imagenLienzoTres();
} 


function imagenLienzoUno (){
 
    lienzo.fillStyle = "rgba(160, 165, 172,1)";
    lienzo.fillRect(75, 40, 80,80);
    lienzo.fillStyle = "rgb(173, 178, 184, 0.5)";
    lienzo.fillRect(120, 40, 80,80);
    lienzo.fillStyle = "rgba(187, 191, 196, 0.2)";
    lienzo.fillRect(165, 40, 80,80);

}

function imagenLienzoDos (){
 
    lienzo2.fillStyle = "rgba(160, 165, 172,1)";
    lienzo2.fillRect(120, 10, 80,80);
    lienzo2.fillStyle = "rgb(173, 178, 184, 0.5)";
    lienzo2.fillRect(120, 40, 80,80);
    lienzo2.fillStyle = "rgba(187, 191, 196, 0.2)";
    lienzo2.fillRect(120, 60, 80,80);

}

function imagenLienzoTres (){
 
    lienzo3.fillStyle = "rgba(160, 165, 172,1)";
    lienzo3.fillRect(50, 10, 80,80);
    lienzo3.fillStyle = "rgb(173, 178, 184, 0.5)";
    lienzo3.fillRect(100, 40, 80,80);
    lienzo3.fillStyle = "rgba(187, 191, 196, 0.2)";
    lienzo3.fillRect(160, 60, 80,80);

}

window.addEventListener("load", iniciar, false);
