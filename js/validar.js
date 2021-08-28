var nom=document.getElementById("nombre");
var ape=document.getElementById("apellido");
var mail=document.getElementById("email");


function validacion(){
    nom.addEventListener("input", valNombre);
    ape.addEventListener("input", valApellido);
    mail.addEventListener("input", valEmail);
    valNombre();
    valApellido();
    valEmail();
    
 }

function valNombre(){
        if(nom.value==''){
            nom.setCustomValidity("Debes Ingresar el Nombre");
            nom.style.background='#79808A';
    }else{
        nom.setCustomValidity('');
        nom.style.background=' rgba(247, 250, 253, 0.445)';
    }
 }

 function valApellido(){
    if(ape.value==''){
        ape.setCustomValidity("Debes Ingresar el Apellido");
        ape.style.background='#79808A';
    }else{
    ape.setCustomValidity('');
    ape.style.background=' rgba(247, 250, 253, 0.445)';
    }
}

function valEmail(){
    if(mail.value==''){
        mail.setCustomValidity("Debes Ingresar el mail");
        mail.style.background='#79808A';
    }else{
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (regex.test(mail.value)== false){
            mail.setCustomValidity("Mail incorrecto");
        }else{

            mail.setCustomValidity('');
            mail.style.background=' rgba(247, 250, 253, 0.445)';
        } 
    }
}




 window.addEventListener("load", validacion);
    