"use trict";
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#agregarunitem").addEventListener("click", agregardato);
    document.querySelector("#agregartresitem").addEventListener("click", agregartres);
    document.querySelector("#filtrar").addEventListener("keyup", filtrar);
    let url = "https://60cb905b21337e0017e450f5.mockapi.io/1/awards";
    let tabla = [];

    cargardatos();

    function agregartres(event) {
        event.preventDefault();
        for (let i = 1; i <= 3; i++) {
            tabla = [];
            agregardato(event);

        }
    }

    async function agregardato(event) {
        event.preventDefault();
        let datojuego = document.querySelector("#dato_juego").value;
        let datogenero = document.querySelector("#dato_genero").value;
        let datoano = document.querySelector("#dato_ano").value;
        let datopremio = document.querySelector("#dato_premio").value;
        let datos = {
            "juego": datojuego,
            "genero": datogenero,
            "ano": datoano,
            "premio": datopremio,
        };

        try {
            let agregar = await fetch(url, {
                "method": "POST",
                "mode": 'cors',
                "headers": { "Content-type": "application/json" },
                "body": JSON.stringify(datos),

            });

            if (agregar.status == 201) {
                console.log("Agregado!");

                cargardatos();

            }
        }
        catch (error) {
            console.log(error);
        }

    }
    async function eliminar() {

        let id = this.dataset.ident;
        console.log(id);

        try {
            let res = await fetch(`${url}/${id}`, {
                "method": "DELETE",
                "mode": 'cors',

            });

            if (res.status == 200) {
                console.log("Eliminado!");
                cargardatos();
            }

        } catch (error) {
            console.log(error);
        }

    }
    function mostrardivoculto() {
        let id = this.dataset.ident;
        console.log(id);
        let mod = document.querySelector(".oculto");
        mod.classList.toggle("visible");
        let botonmod = document.querySelector(".crear-boton-mod");
        botonmod.innerHTML = `<button class='modificar' data-ident='${id}'>Modificar</button>`;
        document.querySelectorAll(".modificar").forEach((button) => {
            button.addEventListener("click", modificar);
        });

    }
    async function modificar() {
        let id = this.dataset.ident;
        let juego = document.querySelector("#mod_juego").value;
        let genero = document.querySelector("#mod_genero").value;
        let año = document.querySelector("#mod_año").value;
        let premio = document.querySelector("#mod_premio").value;

        let game = {
            "juego": juego,
            "genero": genero,
            "ano": año,
            "premio": premio,

        };

        try {
            let res = await fetch(`${url}/${id}`, {
                "method": "PUT",
                "headers": { "Content-type": "application/json" },
                "body": JSON.stringify(game),
            });

            if (res.status == 200) {
                console.log("Modificado!");
                let mod = document.querySelector(".oculto");
                mod.classList.toggle("visible");

                cargardatos();

            }

        } catch (error) {
            console.log(error);
        }

    }

    async function filtrar() {

        let busqueda = document.querySelector("#filtrar").value;
        let tabla_body = document.querySelector("#table-datos");
        let tr = tabla_body.getElementsByTagName("tr");
        for (let fila = 0; fila < tr.length; fila++) {
           let  visible = false;
            /* Obtenemos todas las celdas o columnas de la fila, no sólo la primera */
           let td = tr[fila].getElementsByTagName("td");
            for (let columna = 0; columna < td.length; columna++) {
                if (td[columna] && td[columna].innerHTML.indexOf(busqueda) > -1) {
                    visible = true;
                }
            }
            if (visible === true) {
                tr[fila].classList.remove("oculto");
            } else {
                tr[fila].classList.add("oculto");;
            }
        }
    }

    async function cargardatos() {

        tabla = [];

        let r = await fetch(url, {
            "method": "GET",
            "mode": 'cors',
            "headers": { "Content-type": "application/json" },
        });

        let json = await r.json();
        let contenido = document.querySelector("#table-datos");
        contenido.innerHTML = "";

        for (const elementos of json) {

            let tr = document.createElement("tr");

            let td1 = document.createElement("td");

            let td2 = document.createElement("td");

            let td3 = document.createElement("td");

            let td4 = document.createElement("td");

            let td5 = document.createElement("td");

            let td6 = document.createElement("td");

            let agregaraarray = {
                "juego": elementos.juego,
                "genero": elementos.genero,
                "ano": elementos.ano,
                "premio": elementos.premio,

            }

            td1.innerHTML = elementos.juego;
            td2.innerHTML = elementos.genero;
            td3.innerHTML = elementos.ano;
            td4.innerHTML = elementos.premio;
            td5.innerHTML = `<button class='boton-modificar' data-ident='${elementos.id}'>Modificar</button>`;
            td6.innerHTML = `<button class='boton-borrar' data-ident='${elementos.id}'>Eliminar</button>`;
            if (elementos.premio.includes("Juego del año")){

                td1.classList.add("estilo-agregar");
                td2.classList.add("estilo-agregar");
                td3.classList.add("estilo-agregar");
                td4.classList.add("estilo-agregar");
    
            }

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            contenido.appendChild(tr);
            tabla.push(agregaraarray);

        }

        document.querySelectorAll(".boton-modificar").forEach((button) => { button.addEventListener("click", mostrardivoculto); });
        document.querySelectorAll(".boton-borrar").forEach((button) => { button.addEventListener("click", eliminar); });
        console.table(tabla);

    }
});