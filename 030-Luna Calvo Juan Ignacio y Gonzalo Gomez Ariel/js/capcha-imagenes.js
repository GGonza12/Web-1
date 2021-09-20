"use srict";

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#nuevaimagen").addEventListener("click", nuevaimagen);
    document.querySelector("#enviar-dato").addEventListener("click", enviardato);
    let ultimorandom = -1;


    function nuevaimagen() {

        let random = Math.floor(Math.random() * 3);
        while (ultimorandom == random) {
            random = Math.floor(Math.random() * 3);
        }
        ultimorandom = random;

        let imagenesaleatorias = Array();

        imagenesaleatorias[0] = "images/capcha-imagenes/gato.png";
        imagenesaleatorias[1] = "images/capcha-imagenes/sapo.png";
        imagenesaleatorias[2] = "images/capcha-imagenes/perro.jpg";

        document.querySelector("#imagen").src = imagenesaleatorias[random];

    }

    function enviardato() {

        let respuestas = Array();

        respuestas[0] = "gato";
        respuestas[1] = "sapo";
        respuestas[2] = "perro";

        let dato = document.querySelector("#dato").value;

        if (dato == respuestas[ultimorandom]) {

            document.querySelector("#mostrar-resultado").innerHTML = "Correcto";

        } else {

            document.querySelector("#mostrar-resultado").innerHTML = "Incorrecto intentelo otra vez";
        }

    }



    nuevaimagen();
});