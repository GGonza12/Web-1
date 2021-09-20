document.getElementById("agregar-tarea").addEventListener("click", agregartarea);


function agregartarea() {

    let lista = document.createElement("li");
    document.getElementById("lista").appendChild(lista);
    let tarea = document.getElementById("tarea").value;
    lista.innerHTML = tarea;

}
