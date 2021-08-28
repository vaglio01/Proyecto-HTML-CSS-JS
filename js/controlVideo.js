var videoControl = document.querySelector('#videoI')
var btnRep = document.querySelector('#rep')

/* window.onload = function() {
    console.log("pagina cargada")
    videoControl.play()
} */

function reproducir(){
    if (videoControl.paused) {
        videoControl.play()
        btnRep.innerHTML = '<img src="images/pause_black_24dp.svg" alt="Pausa">'
    }else{
    videoControl.pause()
    btnRep.innerHTML = '<img src="images/play_arrow_black_24dp.svg" alt="Play">'
    }
}

function parar(){
    videoControl.pause()
    videoControl.currentTime =0
    btnRep.innerHTML = '<img src="images/play_arrow_black_24dp.svg" alt="Play">'
}

function mover(tiempo){
    videoControl.currentTime += tiempo
}