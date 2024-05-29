// script.js
document.addEventListener("DOMContentLoaded", function() {
    var avisoCookies = document.getElementById("avisoCookies");
    var cookiesForm = document.getElementById("cookiesForm");
    var fondoPagina = document.getElementById("oscurecerPagina");

    // Comprobar si el usuario ya aceptó las cookies
    if (!cookiesAceptadas()) {
        mostrarAvisoCookies();
        fondoPagina.style.filter="blur(10px)";
    }
    
    

    // Mostrar el aviso de cookies
    function mostrarAvisoCookies() {
        avisoCookies.style.display = "block";
        
        
    }

    // Ocultar el aviso de cookies y almacenar las preferencias del usuario
    function aceptarCookies(event) {
        event.preventDefault();
        avisoCookies.style.display = "none";
        almacenarCookiesAceptadas();
        fondoPagina.style.filter="none";
    }

    // Función para verificar si el usuario ya aceptó las cookies
    function cookiesAceptadas() {
        return localStorage.getItem("cookiesAceptadas") === "true";

    }

    // Función para almacenar las preferencias del usuario en el almacenamiento local
    function almacenarCookiesAceptadas() {
        var checkboxes = cookiesForm.querySelectorAll("input[type=checkbox]:checked");
        localStorage.setItem("cookiesAceptadas", "true");
        checkboxes.forEach(function(checkbox) {
            localStorage.setItem(checkbox.name, "true");
        });
    }

    // Agregar evento de envío al formulario de cookies
    cookiesForm.addEventListener("submit", aceptarCookies);

    // Ocultar el aviso de cookies si ya han sido aceptadas
    if (cookiesAceptadas()) {
        avisoCookies.style.display = "none";
    }
    
   

});

function rechazarBtn(){
    window.close();
}

let botonRechazo = document.getElementById("botonRechazo"); 

botonRechazo.addEventListener("mouseover", crazyBtn);

let contador = 0;

function crazyBtn(){
    if(contador<10){
        let anchuraCartel = window.innerWidth - 50;
        let alturaCartel = window.innerHeight - 50;
        var moverAncho = Math.random() * anchuraCartel;
        var moverAlto = Math.random() * alturaCartel;
        botonRechazo.style.left = moverAncho + "px";
        botonRechazo.style.top = moverAlto + "px";
        contador++;
    }
   
}

