"use strict";

document.querySelector("#agregar-a-json").addEventListener("click", cargar);
const url = "https://60cb905b21337e0017e450f5.mockapi.io/1/tests";
async function cargar(event){
    event.preventDefault();
    let name = document.querySelector("#texto-a-json").value;
    let usuario = {
         "nombres": name,
        
    };

    
    try {
        let res = await fetch(url, {
            "method": "POST",
            "headers": { "Content-type": "application/json" },
            "body": JSON.stringify(usuario)
        });

        if (res.status == 201) {
            console.log("Creado!");
            cargar2(event);
        }
     
    } catch (error) {
        console.log(error);
    }


}

async function cargar2() {
    
     try {
    let r = await fetch(url);
    let json = await r.json();
    let contenedor = document.querySelector("#lista-json");
     
    for (let data of json) {

    contenedor.innerHTML += `<li>nombre : ${data.nombres}</li>`  ;
    console.log(data);
    }

}
catch (error) {
    console.log(error);
}
}