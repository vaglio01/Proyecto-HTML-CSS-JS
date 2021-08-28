function grabar() {
 var boton = document.querySelector('#guardar'); 
 var botonBorrar = document.querySelector('#btnborrar'); 
 boton.addEventListener('click',GuardarClases);
 botonBorrar.addEventListener('click',borrar);
}  
function GuardarClases(){
    sessionStorage.clear();
    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            var calRow = document.querySelectorAll(".cal-row");
            var dia = calRow[i].childNodes[3].childNodes[3].textContent
            var mes = calRow[i].childNodes[3].childNodes[1].textContent
            var curso = calRow[i].childNodes[5].childNodes[1].textContent
            var hora = calRow[i].childNodes[5].childNodes[3].textContent
            var arr = [dia , mes, curso, hora.trim()];
            console.log(calRow[i].childNodes[1].classList[1])
            localStorage.setItem(i,arr)
           }   
    }
     mostrarDatos();
};

function mostrarDatos() {
    var calRowNueva = document.querySelector(".cal-row-nueva");
    if(calRowNueva !== null){
        while (calRowNueva.hasChildNodes()){
            calRowNueva.removeChild(calRowNueva.lastChild);
        }

    }
    for (let y = 0; y < localStorage.length; y++) {
        var id = localStorage.key(y)
        var valor = localStorage.getItem(id)
        console.log(valor)
        calRowNueva.innerHTML +=  '<p>' + valor+'</p>'
    }
}

function borrar (){
    localStorage.clear();
    location.reload();
}

window.addEventListener ('load',grabar)
