"use strict";
document.querySelector("#zoom").addEventListener("mouseover" , hacerzoom);
document.querySelector("#zoom").addEventListener("mouseleave" , adioszoom);
function hacerzoom () {
   zoom.classList.add("estilozoom");

}
function adioszoom () {
    zoom.classList.remove("estilozoom");
 
 }