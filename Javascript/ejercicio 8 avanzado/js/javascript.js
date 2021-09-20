"use strict"
document.getElementById("resultado").addEventListener("click", igual);

function igual() {

    let valor = parseInt(document.getElementById("primero").value);
    let valor2 = parseInt(document.getElementById("segundo").value);

    let valorselect = document.getElementById("select").value;

    let valorfinal;

    if (valorselect == "value1") {
        valorfinal = valor + valor2;

    } else if (valorselect == "value2") {
        valorfinal = valor - valor2;

    } else if (valorselect == "value3") {
        valorfinal = valor * valor2;

    } else if (valorselect == "value4") {
        valorfinal = valor / valor2;
    }

    parseInt(document.getElementById("igual").innerHTML = valorfinal);

}