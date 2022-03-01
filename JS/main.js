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

class Personaje {
  constructor(nombre, ataque, vida) {
    this.nombre = nombre;
    this.ataque = ataque;
    this.vida = vida;
  }
}
let players = [];

const seleccionPersonaje = (personaje) => {
  switch (personaje) {
    case "persMario":
      let mario = new Personaje("Mario", 6, 15);
      players.push(mario);
      cambioPantalla2();
      break;
    case "persKirby":
      let kirby = new Personaje("Kirby", 5, 20);
      players.push(kirby);
      cambioPantalla2();
      break;
    case "persPikachu":
      let pikachu = new Personaje("Pikachu", 4, 25);
      players.push(pikachu);
      cambioPantalla2();
      break;
    case "persDonkey":
      let donkey = new Personaje("DonkeyKong", 3, 30);
      players.push(donkey);
      cambioPantalla2();
      break;
  }
};
const retraso = () => {
  pantalla2.style.display = "none";
  pantalla3.style.display = "flex";
};
const cambioPantalla2 = () => {
  console.log(players);
  if (players.length == 1) {
    switch (players[0].nombre) {
      case "Mario":
        document.getElementById("pers1").style.backgroundImage =
          "url('/images/mario.jpg')";
        break;
      case "Kirby":
        document.getElementById("pers1").style.backgroundImage =
          "url('/images/kirby.jpg')";
        break;
      case "Pikachu":
        document.getElementById("pers1").style.backgroundImage =
          "url('/images/pikachu.jpg')";
        break;
      case "DonkeyKong":
        document.getElementById("pers1").style.backgroundImage =
          "url('/images/donkeykong.jpg')";
        break;
    }
  }
  if (players.length == 2) {
    switch (players[1].nombre) {
      case "Mario":
        document.getElementById("pers2").style.backgroundImage =
          "url('/images/mario.jpg')";
        break;
      case "Kirby":
        document.getElementById("pers2").style.backgroundImage =
          "url('/images/kirby.jpg')";
        break;
      case "Pikachu":
        document.getElementById("pers2").style.backgroundImage =
          "url('/images/pikachu.jpg')";
        break;
      case "DonkeyKong":
        document.getElementById("pers2").style.backgroundImage =
          "url('/images/donkeykong.jpg')";
        break;
    }
    console.log("entra en cambio pantalla 2");
    setTimeout(retraso, 5000);
  }
};

// document.getElementById("pers1").style.backgroundImage();
