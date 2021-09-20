"use strict";

document.getElementById("cambiar").addEventListener("click", cambiardiv);

function cambiardiv() {

    document.getElementById("estilo").classList.remove("estilodiv");

    document.getElementById("estilo").classList.add("cambiarestilo");

    document.getElementById("estilo").classList.toggle("estilodiv");


}