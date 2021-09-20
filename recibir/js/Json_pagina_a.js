"use strict";

document.querySelector("#cargar-json").addEventListener("click", cargar);
 
async function cargar(event) {
    event.preventDefault();
     let url = "https://60cb905b21337e0017e450f5.mockapi.io/1/awards";
    let r = await fetch(url);
    let json = await r.json();
    let contenedor = document.querySelector("#lista-json");
    
    for (let data of json) {
        console.log(json);
        console.log(data.title);
    contenedor.innerHTML += `<li>juego : ${data.juego}</li>`  ;
    contenedor.innerHTML += `<li>genero : ${data.genero}</li>`  ;
    contenedor.innerHTML += `<li>año : ${data.ano}</li>`  ;
    contenedor.innerHTML += `<li>premio : ${data.premio}</li>`  ;

}
}