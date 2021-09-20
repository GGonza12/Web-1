"use strict";

document.getElementById("agregar-tarea").addEventListener("click", agregartarea);
document.getElementById("agregar-tarjeta").addEventListener("click", agregartarjeta);
document.querySelector("#estilo1").addEventListener("click", estilouno);
document.querySelector("#estilo2").addEventListener("click", estilodos);
document.querySelector("#estilo3").addEventListener("click", estilotres);


function agregartarea() {

    let lista = document.createElement("li");

    document.getElementById("lista").appendChild(lista);

    let tarea = document.getElementById("tarea").value;

    lista.innerHTML = tarea;

}
function agregartarjeta() {
    //let tarjeta = document.createElement("li");

    //document.getElementById("tarjeta").appendChild(tarjeta);

    let dato1 = document.getElementById("nombre").value;
    let dato2 = document.getElementById("apellido").value;
    document.getElementById("nombre-apellido").innerHTML = dato1 + " " + dato2;
    let dato3 = document.getElementById("profesion").value;
    document.getElementById("segundodato").innerHTML = dato3;
    let dato4 = document.getElementById("email").value;
    document.getElementById("tercerdato").innerHTML = dato4;
    let dato5 = document.getElementById("telefono").value;
    document.getElementById("cuartodato").innerHTML = dato5;
    let dato6 = document.getElementById("direccion").value;
    document.getElementById("ultimodato").innerHTML = dato6;

    //tarjeta.innerHTML = dato1;
    //tarjeta.innerHTML = dato2;




}
function estilouno() {
    let color1 = document.querySelector("#desapa");
    color1.classList.add("estilo1");
    color1.classList.remove("estilo2");
    color1.classList.remove("estilo3");
}

function estilodos() {
    let color2 = document.querySelector("#desapa");
    color2.classList.add("estilo2");
    color2.classList.remove("estilo1");
    color2.classList.remove("estilo3");
}

function estilotres() {
    let color3 = document.querySelector("#desapa");
    color3.classList.add("estilo3");
    color3.classList.remove("estilo2");
    color3.classList.remove("estilo1");
}
