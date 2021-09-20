"use strict"
let jsloads = document.querySelectorAll("#cargar-html");
jsloads.forEach(e => e.addEventListener("click", loadClick));

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
  
function alo (){
    alert("alo");

}