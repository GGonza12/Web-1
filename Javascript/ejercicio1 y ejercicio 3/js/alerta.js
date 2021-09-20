document.getElementById("saludo").addEventListener("click", saludo);
function saludo(){

    let nombre = prompt ("ingrese su nombre");
    console.log(nombre);
    let apellido = prompt ("ingrese su apellido");
    console.log(apellido);
    alert("su nombre es " + nombre + " " + apellido);

}