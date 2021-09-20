"use strict"
document.querySelector("#agregar-a-lista").addEventListener("click", lista);


let datos = [];

function lista () {
//let limitelist = Math.floor((Match()*11));
let dato = document.querySelector("#texto-de-lista").value;


if (datos.length < 10 && comprobar(dato) == false) {
datos.push(dato);
}

console.log(datos);
console.log(dato);

crearlista();

}
function crearlista () {
  
let lista = document.querySelector("#insertar-texto-de-lista");
lista.innerHTML = "";

for (let elem of datos) { 
    lista.innerHTML += `<li>${elem}</li>` ;
    
}

}

function comprobar(dato) {
  for (let inicio=0; inicio < datos.length; inicio++){
    if(datos[inicio] == dato)
    return true;
}
return false;

}
