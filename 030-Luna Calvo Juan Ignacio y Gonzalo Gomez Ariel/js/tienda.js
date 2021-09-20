"use strict";
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#agregar-cyberpunk-2077").addEventListener("click", generarjuego);

    function generarjuego() {
        let cajita = document.querySelector("#contenedor-del-carrito");
        let creartexto = document.createElement("p");
        creartexto.innerHTML = "hola";
        cajita.appendChild(creartexto);


        //let escribir = document.querySelector("#test1").value;
        //creartexto.innerHTML = escribir;
    }
});