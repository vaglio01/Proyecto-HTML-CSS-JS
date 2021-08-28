var viaje = confirm ('Usted quiere viajar')


if (viaje) {
    var ele = document.getElementsByTagName('img');
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.border = '1px solid #79808A';  
    }
    var tex = document.getElementsByClassName('pViaje');
    for (let i = 0; i < tex.length; i++) {
        if (i % 2 == 0){
            tex[i].style.color = 'red'; 
            tex[i].style.fontWeight = 'bold'
        } else {
            tex[i].style.color = 'blue'; 
            tex[i].style.fontWeight = 'bold'
        }

    }
    
}


function elejir(elemt) {
    console.log (elemt);
     var group = document.getElementsByClassName('colortexto');
 
    for (let x = 0; x < group.length; x++) {
        if (x == elemt ){
            group[x].style.border = '1px solid #79808A'; 
            group[x].style.margin = 'auto'; 
            group[x].style.float = 'inherit';

        }else{
            group[x].style.display = 'none';
        }   
    }
}

function pintar(objeto,color) {
    objeto.style.backgroundColor=color;
}

/*Jquery*/
//Cuenta regresiva
  $('#clock').countdown('2021/10/10 12:34:56')
.on('update.countdown', function(event) {
  var format = '%H:%M:%S';
  if(event.offset.totalDays > 0) {
    format = '%-d dìa%!d ' + format;
  }
  if(event.offset.weeks > 0) {
    format = '%-w semana%!w ' + format;
  }
  $(this).html(event.strftime(format));
})
.on('finish.countdown', function(event) {
  $(this).html('This offer has expired!')
    .parent().addClass('disabled');

});
