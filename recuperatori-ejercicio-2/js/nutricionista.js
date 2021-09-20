"use strict";

document.querySelector("#guardar").addEventListener("click", guardar_datos);
document.querySelector("#btn-ganador").addEventListener("click", paciente_mayor);

let datos =[] ;

function guardar_datos (event){
    event.preventDefault();

    let nombre = document.querySelector("#dato-paciente").value;
    let peso_actual= document.querySelector("#peso-actual").value;
    let peso_anterior = document.querySelector("#peso-anterior").value;
    let peso_perdido = (peso_anterior - peso_actual);

    let datos_pacientes = {
        "nombre": nombre,
        "actual": peso_actual,
        "anterior": peso_anterior,
        "perdido": peso_perdido,
        
    };

    datos.push(datos_pacientes);
    console.log(datos);
    mostrar_pacientes(event);
    


}
function paciente_mayor(){
    let mayor=0;
    let lista_ganador = document.querySelector("#ganador");
    lista_ganador.innerHTML ="";
    for (const i of datos) {
        if (i.perdido > mayor){
            mayor = i.perdido;
        }

}
console.log(mayor);
   for(const j of datos) {
       if (j.perdido == mayor){
        lista_ganador.innerHTML += `<li class="resaltar">El que mas peso perdio es : ${j.nombre}</li>`;
        lista_ganador.innerHTML += `<li class="resaltar">Peso actual: ${j.actual}</li>`;
        lista_ganador.innerHTML += `<li class="resaltar">Peso anterior: ${j.anterior}</li>`;
        lista_ganador.innerHTML += `<li class="resaltar">Peso perdido: ${j.perdido}</li>`;
       }
   }
}



function mostrar_pacientes (){

    let lista = document.querySelector("#pacientes");
    lista.innerHTML="";
    for (const i of datos) {
        
        if (i.perdido > 0){
            lista.innerHTML += `<li class="resaltar">Nombre y apellido: ${i.nombre}</li>`;
        lista.innerHTML += `<li class="resaltar">Peso actual: ${i.actual}</li>`;
        lista.innerHTML += `<li class="resaltar">Peso anterior: ${i.anterior}</li>`;
            lista.innerHTML += `<li class="resaltar">Peso perdido: ${i.perdido}</li>`;
        }
        else{
            lista.innerHTML += `<li>Nombre y apellido: ${i.nombre}</li>`;
        lista.innerHTML += `<li>Peso actual: ${i.actual}</li>`;
        lista.innerHTML += `<li>Peso anterior: ${i.anterior}</li>`;
            lista.innerHTML += `<li>Peso perdido: ${i.perdido}</li>`;
        }


        
    }
}