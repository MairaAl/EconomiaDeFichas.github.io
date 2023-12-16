const nombre = document.getElementById("boton-nombre");
nombre.addEventListener("click", mostrarNombre);

function mostrarNombre(name) {
  nombre.style.display = "none";
  let input = document.getElementById("celda-nombre");
  let niño = document.getElementById("name-input").value;
  console.log(niño);
  input.innerHTML = niño;
}

const conducta1 = document.getElementById("aceptar1");
conducta1.addEventListener("click", mostrarConducta1);

function mostrarConducta1() {
  conducta1.style.display = "none";
  let primeraConducta = document.getElementById("celda-conducta1");
  let conductaUno = document.getElementById("conducta-input1").value;
  primeraConducta.innerHTML = conductaUno;
}
const conducta2 = document.getElementById("aceptar2");
conducta2.addEventListener("click", mostrarConducta2);

function mostrarConducta2() {
  conducta2.style.display = "none";
  let segundaConducta = document.getElementById("celda-conducta2");
  let conductaDos = document.getElementById("conducta-input2").value;
  segundaConducta.innerHTML = conductaDos;
}
const conducta3 = document.getElementById("aceptar3");
conducta3.addEventListener("click", mostrarConducta3);

function mostrarConducta3() {
  conducta3.style.display = "none";
  let terceraConducta = document.getElementById("celda-conducta3");
  let conductaTres = document.getElementById("conducta-input3").value;
  terceraConducta.innerHTML = conductaTres;
}
const conducta4 = document.getElementById("aceptar4");
conducta4.addEventListener("click", mostrarConducta4);

function mostrarConducta4() {
  conducta4.style.display = "none";
  let cuartaConducta = document.getElementById("celda-conducta4");
  let conductaCuatro = document.getElementById("conducta-input4").value;
  cuartaConducta.innerHTML = conductaCuatro;
}

const conducta5 = document.getElementById("aceptar5");
conducta5.addEventListener("click", mostrarConducta5);

function mostrarConducta5() {
  conducta5.style.display = "none";
  let quintaConducta = document.getElementById("celda-conducta5");
  let conductaCinco = document.getElementById("conducta-input5").value;
  quintaConducta.innerHTML = conductaCinco;
}

const premio = document.getElementById("boton-premio");
premio.addEventListener("click", mostrarPremio);

function mostrarPremio() {
  premio.style.display = "none";
  let premioInput = document.getElementById("premio");
  let recompensa = document.getElementById("input-premio").value;
  premioInput.innerHTML = recompensa;
}

const button1 = document.getElementById("boton-happy1");
button1.addEventListener("click", mostrarHappy1);

function mostrarHappy1() {
  button1.style.display = "none";
  let divHappy1 = document.getElementById("happy1");
  let totHap1 = document.getElementById("input-happy1").value;
  divHappy1.innerHTML = "😊=" + totHap1;
}

const button11 = document.getElementById("boton-sad1");
button11.addEventListener("click", mostrarSad1);

function mostrarSad1() {
  button11.style.display = "none";
  let divSad1 = document.getElementById("sad1");
  let totSad1 = document.getElementById("input-sad1").value;
  divSad1.innerHTML = "☹=" + totSad1;
}

const button2 = document.getElementById("boton-happy2");
button2.addEventListener("click", mostrarHappy2);

function mostrarHappy2() {
  button2.style.display = "none";
  let divHappy2 = document.getElementById("happy2");
  let totHap2 = document.getElementById("input-happy2").value;
  divHappy2.innerHTML = "😊=" + totHap2;
}

const button21 = document.getElementById("boton-sad2");
button21.addEventListener("click", mostrarSad2);

function mostrarSad2() {
  button21.style.display = "none";
  let divSad2 = document.getElementById("sad2");
  let totSad2 = document.getElementById("input-sad2").value;
  divSad2.innerHTML = "☹=" + totSad2;
}

const button3 = document.getElementById("boton-happy3");
button3.addEventListener("click", mostrarHappy3);

function mostrarHappy3() {
  button3.style.display = "none";
  let divHappy3 = document.getElementById("happy3");
  let totHap3 = document.getElementById("input-happy3").value;
  divHappy3.innerHTML = "😊=" + totHap3;
}

const button31 = document.getElementById("boton-sad3");
button31.addEventListener("click", mostrarSad3);

function mostrarSad3() {
  button31.style.display = "none";
  let divSad3 = document.getElementById("sad3");
  let totSad3 = document.getElementById("input-sad3").value;
  divSad3.innerHTML = "☹=" + totSad3;
}

const button4 = document.getElementById("boton-happy4");
button4.addEventListener("click", mostrarHappy4);

function mostrarHappy4() {
  button4.style.display = "none";
  let divHappy4 = document.getElementById("happy4");
  let totHap4 = document.getElementById("input-happy4").value;
  divHappy4.innerHTML = "😊=" + totHap4;
}

const button41 = document.getElementById("boton-sad4");
button41.addEventListener("click", mostrarSad4);

function mostrarSad4() {
  button41.style.display = "none";
  let divSad4 = document.getElementById("sad4");
  let totSad4 = document.getElementById("input-sad4").value;
  divSad4.innerHTML = "☹=" + totSad4;
}

const button5 = document.getElementById("boton-happy5");
button5.addEventListener("click", mostrarHappy5);

function mostrarHappy5() {
  button5.style.display = "none";
  let divHappy5 = document.getElementById("happy5");
  let totHap5 = document.getElementById("input-happy5").value;
  divHappy5.innerHTML = "😊=" + totHap5;
}

const button51 = document.getElementById("boton-sad5");
button51.addEventListener("click", mostrarSad5);

function mostrarSad5() {
  button51.style.display = "none";
  let divSad5 = document.getElementById("sad5");
  let totSad5 = document.getElementById("input-sad5").value;
  divSad5.innerHTML = "☹=" + totSad5;
}

const reiniciar = document.getElementById("boton-reiniciar");
reiniciar.addEventListener("click", recargar);

function recargar() {
  location.reload();
}
