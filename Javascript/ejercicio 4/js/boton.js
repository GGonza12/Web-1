"use strict";
document.getElementById("primerboton").addEventListener("click",rojo);
document.getElementById("segundoboton").addEventListener("click",negro);
document.getElementById("tercerboton").addEventListener("click",verde);

function rojo() {
    document.getElementById("ultimopulsado").innerHTML = "rojo";
  }
  
  function negro() {
    document.getElementById("ultimopulsado").innerHTML = "negro";
  }
  
  function verde() {
    document.getElementById("ultimopulsado").innerHTML = "verde";
}