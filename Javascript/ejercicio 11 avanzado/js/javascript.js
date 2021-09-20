"use strict";
document.querySelector("#accionar").addEventListener("click", girar);

function girar () {
    let ruleta = Math.floor((Math.random() * 36) + 1);
    console.log(ruleta);
    let apuesta1 = document.querySelector("#apuesta").value;
    if (apuesta1 == ruleta) {
        alert ("ganaste el resultado de la ruleta es " + ruleta);
    }
    else {
        alert ("perdiste el resultado de la ruleta es " + ruleta);
    }
}