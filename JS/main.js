let pantalla1 = document.getElementById("inicio");
let pantalla2 = document.getElementById("seleccion");
let pantalla3 = document.getElementById("tercera");

const cambioPantalla = () => {
  if (
    pantalla1.style.display === "flex" &&
    pantalla2.style.display === "none"
  ) {
    pantalla1.style.display = "none";
    pantalla2.style.display = "flex";
  }
};
const cambioPantalla2 = () => {
  if (
    pantalla2.style.display === "flex" &&
    pantalla3.style.display === "none"
  ) {
    pantalla2.style.display = "none";
    pantalla3.style.display = "flex";
  }
};
