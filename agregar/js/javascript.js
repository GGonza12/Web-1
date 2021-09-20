"use strict";

document.querySelector("#cargar-a-json").addEventListener("click", cargar);
const url = "https://60cb905b21337e0017e450f5.mockapi.io/1/tests";

function mostrar (){
    let id = this.dataset.ident;
    console.log(id);
    let mod= document.querySelector(".ocultar-modificar-datos");
    mod.classList.add("mostrar");
    let botonmod= document.querySelector("#crear-boton-modificar");
    botonmod.innerHTML = `<button class='modificar' data-ide='${id}'>modificar</button>`;
    document.querySelectorAll(".modificar").forEach((button)=> {button.addEventListener("click", modificar);
});
    
}
async function modificar(){
    let id = this.dataset.ide;
    
    
    let juego = document.querySelector("#modificar-juego").value;
    let año = document.querySelector("#modificar-año").value;
    let premio = document.querySelector("#modificar-premio").value;

    let usuario = {
    "juego": juego,
    "ano": año,
    "premio": premio,
        
    };
    
    try {
        let res = await fetch(`${url}/${id}`, { 
            "method": "PUT",
            "headers": { "Content-type": "application/json" },
            "body": JSON.stringify(usuario),
        });
        
        if (res.status == 200) {
            console.log("Modificado!");
            let mod= document.querySelector(".ocultar-modificar-datos");
            mod.classList.remove("mostrar");
            cargar();
            
        }
     
    } catch (error) {
        console.log(error);
    }

}

async function cargar() {

    try {
        let r = await fetch(url, {
            "method": "GET",
             "mode": 'cors',
            "headers": { "Content-type": "application/json" },
        });
   let json = await r.json();
   let contenedor = document.querySelector("#lista-json");
   contenedor.innerHTML="";
   for (let data of json) {
      
    contenedor.innerHTML += `<li>juego : ${data.juego}</li>`;
    contenedor.innerHTML += `<li>año : ${data.ano}</li>`;
    contenedor.innerHTML += `<li>premio : ${data.premio}</li>`;
    contenedor.innerHTML += `<button class='bt' data-ident='${data.id}'>modificar</button>`;
    document.querySelectorAll(".bt").forEach((button)=> {button.addEventListener("click", mostrar);
});

   }

}
catch (error) {
   console.log(error);
}
}
