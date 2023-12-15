const nombre = document.getElementById("boton-nombre");

let botonNombre = document.getElementById("boton-nombre");
nombre.addEventListener("click", mostrarNombre);

function mostrarNombre() {
  botonNombre.style.display = "none";
  let niño = document.getElementById("name-input").value;
  console.log(niño);
  niño.innerHTML = niño;
}
