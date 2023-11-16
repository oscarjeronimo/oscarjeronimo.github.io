// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	//document.body.scrollTop = 0;
	//document.documentElement.scrollTop = 0;
	// Obtiene la posici�n actual de desplazamiento
	var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

	// Establece la animaci�n de desplazamiento suave utilizando la propiedad `scroll-behavior`
	document.documentElement.style.scrollBehavior = 'smooth';

	// Despl�zate hasta arriba
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});

	// Despu�s de un breve per�odo, restablece la propiedad `scroll-behavior` para futuros desplazamientos
	setTimeout(function () {
		document.documentElement.style.scrollBehavior = 'auto';
	}, 1000);
}