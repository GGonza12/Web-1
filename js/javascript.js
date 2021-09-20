'use strict';

let jsloads = document.querySelectorAll("#cargar-html");
jsloads.forEach(e => e.addEventListener("click", loadClick));
let jsloads2 = document.querySelectorAll("#cargar2-html");
jsloads2.forEach(e => e.addEventListener("click", loadClick2)); 
let jsloads3 = document.querySelectorAll("#cargar3-html");
jsloads3.forEach(e => e.addEventListener("click", loadClick3));    



function loadClick(event) {
    event.preventDefault();
    let container = document.querySelector("#cargar");
    container.innerHTML= "<h1>Loading...</h1>";
    fetch("http://web-unicen.herokuapp.com/api/html ").then(function(response) {
            console.log(response);
            if (response.ok){
                response.text().then(alerta);
            }
         });
}
function alerta(t) {
    let container = document.querySelector("#cargar");
    container.innerHTML=t;
    //busco sobre lo que agregué y agrego evento

   container.querySelectorAll(".js-comportamiento").forEach(b=> b.addEventListener("click", alo));
 
  }
  function loadClick2(event) {
    event.preventDefault();
    let container = document.querySelector("#cargar-segundo");
    container.innerHTML= "<h1>Loading...</h1>";
    fetch("http://web-unicen.herokuapp.com/api/html ").then(function(response) {
            console.log(response);
            if (response.ok){
                response.text().then(alerta2);
            }
         });
}
  function alerta2(t) {
    let container = document.querySelector("#cargar-segundo");
    container.innerHTML=t;
    //busco sobre lo que agregué y agrego evento

   container.querySelectorAll(".js-comportamiento").forEach(b=> b.addEventListener("click", alo));
 
  }
  
function loadClick3(event) {
    event.preventDefault();
    let container = document.querySelector("#cargar3");
    container.innerHTML= "<h1>Loading...</h1>";
    fetch("http://web-unicen.herokuapp.com/api/html ").then(function(response) {
            console.log(response);
            if (response.ok){
                response.text().then(alerta3);
            }
         });
}
  function alerta3(t) {
    let container = document.querySelector("#cargar3");
    container.innerHTML=t;
    //busco sobre lo que agregué y agrego evento

   container.querySelectorAll(".js-comportamiento").forEach(b=> b.addEventListener("click", alo));
 
  }

function alo (){
    alert("alo");

}




