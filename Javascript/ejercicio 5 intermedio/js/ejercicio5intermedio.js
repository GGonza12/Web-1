document.getElementById("enviar").addEventListener("click", enviardatos);

function enviardatos() {
    let titulo = document.createElement("h1");
    document.getElementById("creartitulo").appendChild(titulo);
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    titulo.innerHTML = nombre + " " + apellido;
    

}