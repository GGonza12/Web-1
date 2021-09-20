"use strict";

document.querySelector("#agregar-a-json").addEventListener("click", cargar);

const url = "https://60cb905b21337e0017e450f5.mockapi.io/1/tests";



async function cargar(event) {
    event.preventDefault();

     try {
        let r = await fetch(url, {
            "method": "GET",
             "mode": 'cors',
            "headers": { "Content-type": "application/json" },
        });
    let json = await r.json();
    let contenedor = document.querySelector("#lista-json");
    

     
    for (let data of json) {
    
    contenedor.innerHTML += `<li>juego : ${data.juego}</li>`;
    contenedor.innerHTML += `<li>año : ${data.ano}</li>`;
    contenedor.innerHTML += `<li>nombre : ${data.premio}</li>`;
    contenedor.innerHTML += `<button data-ident='${data.id}'>borrar</button>`;
    
    document.querySelectorAll("button").forEach((button)=> {button.addEventListener("click", eliminar);
});
            
    }

}
catch (error) {
    console.log(error);
}
}
async function eliminar(){

let id = this.dataset.ident;
console.log(id);


    try {
        let res = await fetch(`${url}/${id}`, { 
            "method": "DELETE"

        });
        
        if (res.status == 200) {
            console.log("Eliminado!");
        }
     
    } catch (error) {
        console.log(error);
    }

}