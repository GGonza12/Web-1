"use strict";
/* capcha de numeros */
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#generar-capcha").addEventListener("click", generarnumero);

    function generarnumero() {
        

        let nums = Math.floor((Math.random() * 300) + 1);

        let aleatorio = document.querySelector("#generar-numero");

        aleatorio.innerHTML = nums;
        document.querySelector("#registrar").addEventListener("click", validacion);


        function validacion() {

            let dato = document.querySelector("#capcha").value;

            if (dato == nums) {
                aleatorio.innerHTML = "Correcto";
                
            } else {
                aleatorio.innerHTML = "Incorrecto intentelo otra vez";
                
            }
            //para que desaparezca el valor una vez 
            //document.querySelector("#capcha").value = "";
            
        }
        
    }
    generarnumero();
    

});