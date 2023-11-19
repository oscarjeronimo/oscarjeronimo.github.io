
//Cambiar seccion horario abierto cerrado

function cambiarMensaje() {
    var elemento = document.getElementById('horallamada');
    var horaActual = new Date().getHours();
    var diaDeLaSemana = new Date().getDay();

    elemento.innerHTML = '1Ahora mismo estamos cerrados y no podremos atenderle, consulte nuestros <a href="#horarios">horarios</a>.';

    if (diaDeLaSemana == 1) {
        elemento.innerHTML = '2Ahora mismo estamos cerrados y no podremos atenderle, consulte nuestros <a href="#horarios">horarios</a>.';
    }
    if (diaDeLaSemana == 0 || diaDeLaSemana == 2 || diaDeLaSemana == 3 || diaDeLaSemana == 4) {
        if (horaActual >= 8.5) {
            elemento.innerHTML = 'Ahora mismo estamos abiertos. �Llamanos!';
        } else {
            elemento.innerHTML = '3Ahora mismo estamos cerrados y no podremos atenderle, consulte nuestros <a href="#horarios">horarios</a>.';
        }
    }
    if (diaDeLaSemana == 6 || diaDeLaSemana == 0) {
        if (horaActual <= 2.5 || horaActual >= 12) {
            elemento.innerHTML = 'Ahora mismo estamos abiertos. �Llamanos!';
        } else {
            elemento.innerHTML = '4Ahora mismo estamos cerrados y no podremos atenderle, consulte nuestros <a href="#horarios">horarios</a>.';
        }
    }
    //Cambiar mensaje en telefono
    elemento = document.getElementById('greeting');
    horaActual = new Date().getHours();
    diaDeLaSemana = new Date().getDay();

    if (diaDeLaSemana == 1) {
        elemento.innerHTML = 'Hoy es lunes estamos cerrados';
    }
    if (diaDeLaSemana == 0 || diaDeLaSemana == 2 || diaDeLaSemana == 3 || diaDeLaSemana == 4 || diaDeLaSemana == 5) {
        if (horaActual >= 8.5) {
            elemento.innerHTML = 'Ahora mismo estamos abiertos';
        } else {
            elemento.innerHTML = 'Ahora mismo estamos cerrados';
        }
    }
    if (diaDeLaSemana == 6 || diaDeLaSemana == 0) {
        if (horaActual <= 2.5 || horaActual >= 12) {
            elemento.innerHTML = 'Ahora mismo estamos abiertos';
        } else {
            elemento.innerHTML = 'Ahora mismo estamos cerrados';
        }
    }
}


// Llama a la funci�n cuando se carga la p�gina
window.onload = cambiarMensaje;