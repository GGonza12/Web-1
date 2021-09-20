"use strict";

document.querySelector("#buscar_reparto").addEventListener("click", buscar_pelicula_reparto);
document.querySelector("#buscar_pelicula").addEventListener("click", resumen);
document.querySelector("#cargar-lista").addEventListener("click", cargartodo);

let url = "www.nextmovie.com/api/peliculas/";
let peliculas = [
    {
     "id": "1",
     "titulo": "Fight Club",
     "reparto": [
      "Brad Pitt",
      "Edward Norton",
      "Helena Bonham Carter",
      "Jared Leto"
     ],
     "votos": [   5,   5,   4,   5,   4  ],
     "anio": "1999"
    },
    {
     "id": "2",
     "titulo": "Forrest Gump",
     "reparto": [
      "Tom Hanks",
      "Robin Wright",
      "Gary Sinise"
     ],
     "votos": [   4,   4,   5,   5,   3  ],
     "anio": "1994"
    }
   ];


   async function buscar_pelicula_reparto (event){
    event.preventDefault();
      // let actor = document.querySelector("#actor"); para buscar el actor que quieras.
       let lista = document.querySelector("#mostrar");
    let r = await fetch(url, {
        "method": "GET",
        "mode": 'cors',
        "headers": { "Content-type": "application/json" },
    });

    let json = await r.json();

    for (const datos of json) {
        if (datos.reparto == "Tom Hanks"){ 
            console.log(datos.reparto);
            lista.innerHTML += `<li>Participo en : ${datos.titulo}</li>`;
            
        }

    }
    // for (const datos of json) { // este for para buscar un dato que busca el usuario a travez del html
      //  if (datos.reparto == actor){ //podes poner aca el actor en el que quieras que participo
        //    console.log(datos.reparto);
          //  lista.innerHTML += `<li>Participo en : ${datos.titulo}</li>`;
            
       // }
       // }

    }

    async function resumen (event){
        event.preventDefault();
         let pelicula = document.querySelector("#pelicula"); 
         let lista = document.querySelector("#mostrar");
         let suma = 0;
      let r = await fetch(url, {
          "method": "GET",
          "mode": 'cors',
          "headers": { "Content-type": "application/json" },
      });
  
      let json = await r.json();
  

       for (const datos of json) {
          if (datos.titulo == pelicula){ 
              console.log(datos.titulo);
              let cantidad = (datos.reparto.Lenght-1);
              for (i of datos.votos){
                suma+= i;
              }
              let promedio = (suma/(datos.votos.Lenght-1))
              lista.innerHTML += `<li>Pelicula : ${datos.titulo}</li>`;
              lista.innerHTML += `<li>Cantidad de actores: ${cantidad}</li>`;
              lista.innerHTML += `<li>Promedio de votos : ${promedio}</li>`;
              
          }
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

        async function cargartodo(event) {
            event.preventDefault();
        
             try {
                let r = await fetch(url, {
                    "method": "GET",
                     "mode": 'cors',
                    "headers": { "Content-type": "application/json" },
                });
            let json = await r.json();
            let nuevalista = document.querySelector("#nueva-lista");
            
        
             
            for (let i of json) {
            
            nuevalista.innerHTML += `<li>juego : ${i.titulo}</li>`;
            nuevalista.innerHTML += `<li>año : ${i.reparto}</li>`;
            nuevalista.innerHTML += `<li>nombre : ${i.votos}</li>`;
            nuevalista.innerHTML += `<button data-ident='${i.anio}'>borrar</button>`;
            
            
                    
            }
            document.querySelectorAll("button").forEach((button)=> {button.addEventListener("click", eliminar);
        });
        
        }
        catch (error) {
            console.log(error);
        }
        }







   

