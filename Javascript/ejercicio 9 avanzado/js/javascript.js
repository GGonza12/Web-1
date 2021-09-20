const elcuerpo = document.querySelector("body");
elcuerpo.addEventListener("click", rectangulo);
function rectangulo(e){
    let x = e.offsetX;
    let y = e.offsetY;
    console.log(x, y);
    crearDiv(x, y);
}
function crearDiv(x, y) {
    let cuadradito = document.createElement("div");
    cuadradito.className = "cajita";
    cuadradito.style.left = x + "px";
    cuadradito.style.top = y + "px";
    elcuerpo.appendChild(cuadradito);
    console.log(cuadradito);
}
        