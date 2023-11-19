//Cambiar seccion horario abierto cerrado

function cambiarMensaje() {
    var elemento = document.getElementById('horallamada');
    var horaActual = new Date().getHours();
    var diaDeLaSemana = new Date().getDay();

    elemento.innerHTML = 'Ahora mismo estamos cerrados y no podremos atenderle, consulte nuestros <a href="#horarios">horarios</a>.';

    if (diaDeLaSemana == 1) {
        elemento.innerHTML = 'Ahora mismo estamos cerrados y no podremos atenderle, consulte nuestros <a href="#horarios">horarios</a>.';
    }
    if (diaDeLaSemana == 0 || diaDeLaSemana == 2 || diaDeLaSemana == 3 || diaDeLaSemana == 4) {
        if (horaActual >= 8.5) {
            elemento.textContent = 'Ahora mismo estamos abiertos. ¡Llamanos!';
        } else {
            elemento.innerHTML = 'Ahora mismo estamos cerrados y no podremos atenderle, consulte nuestros <a href="#horarios">horarios</a>.';
        }
    }
    if (diaDeLaSemana == 6 || diaDeLaSemana == 0) {
        if (horaActual <= 2.5 || horaActual >= 12) {
            elemento.textContent = 'Ahora mismo estamos abiertos. ¡Llamanos!';
        } else {
            elemento.innerHTML = 'Ahora mismo estamos cerrados y no podremos atenderle, consulte nuestros <a href="#horarios">horarios</a>.';
        }
    }
    //Cambiar mensaje en telefono
    elemento = document.getElementById('greeting');
    horaActual = new Date().getHours();
    diaDeLaSemana = new Date().getDay();

    if (diaDeLaSemana == 1) {
        elemento.textContent = 'Hoy es lunes estamos cerrados';
    }
    if (diaDeLaSemana == 0 || diaDeLaSemana == 2 || diaDeLaSemana == 3 || diaDeLaSemana == 4 || diaDeLaSemana == 5) {
        if (horaActual >= 8.5) {
            elemento.textContent = 'Ahora mismo estamos abiertos';
        } else {
            elemento.textContent = 'Ahora mismo estamos cerrados';
        }
    }
    if (diaDeLaSemana == 6 || diaDeLaSemana == 0) {
        if (horaActual <= 2.5 || horaActual >= 12) {
            elemento.textContent = 'Ahora mismo estamos abiertos';
        } else {
            elemento.textContent = 'Ahora mismo estamos cerrados';
        }
    }
}


// Llama a la función cuando se carga la página
window.onload = cambiarMensaje;