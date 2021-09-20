"use strict";

document.querySelector("#cargar-json").addEventListener("click", cargar);
 
async function cargar(event) {
    event.preventDefault();
     const url = "https://web-unicen.herokuapp.com/api/groups/ejemplos/nombres";
     try {
    let r = await fetch(url);
    let json = await r.json();
    let contenedor = document.querySelector("#lista-json");
     
    for (let data of json.nombres) {
        console.log(json);
        console.log(data.thing.nombre);
    contenedor.innerHTML += `<li>nombre : ${data.thing.nombre}</li>`  ;
    }

}
catch (error) {
    console.log(error);
}
}
