let pantalla1 = document.getElementById("inicio");
let pantalla2 = document.getElementById("seleccion");
let pantalla3 = document.getElementById("tercera");
let luchar = document.getElementById("luchar");
let ganador = document.getElementById("final");
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
      let mario = new Personaje("Mario", 4, 100);
      players.push(mario);
      cambioPantalla2();
      break;
    case "persKirby":
      let kirby = new Personaje("Kirby", 3, 100);
      players.push(kirby);
      cambioPantalla2();
      break;
    case "persPikachu":
      let pikachu = new Personaje("Pikachu", 2, 100);
      players.push(pikachu);
      cambioPantalla2();
      break;
    case "persDonkey":
      let donkey = new Personaje("DonkeyKong", 1, 100);
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
  if (players.length == 1) {
    switch (players[0].nombre) {
      case "Mario":
        document.getElementById("pers1").style.backgroundImage =
          "url('./images/mario.jpg')";
        document.getElementById("luch1").style.backgroundImage =
          "url('./images/MARIOSVGREVERSE.png')";
        break;
      case "Kirby":
        document.getElementById("pers1").style.backgroundImage =
          "url('./images/kirby.jpg')";
        document.getElementById("pers1").style.backgroundPositionY = "20%";
        document.getElementById("luch1").style.backgroundImage =
          "url('./images/KIRBYSVG.png')";
        break;
      case "Pikachu":
        document.getElementById("pers1").style.backgroundImage =
          "url('./images/pikachu.jpg')";
        document.getElementById("luch1").style.backgroundImage =
          "url('./images/PIKACHUSVG.png')";
        break;
      case "DonkeyKong":
        document.getElementById("pers1").style.backgroundImage =
          "url('./images/donkeykong.jpg')";
        document.getElementById("luch1").style.backgroundImage =
          "url('./images/DONKEYSVG.png')";
        break;
    }
  }
  if (players.length == 2) {
    switch (players[1].nombre) {
      case "Mario":
        document.getElementById("pers2").style.backgroundImage =
          "url('./images/mario.jpg')";
        document.getElementById("luch2").style.backgroundImage =
          "url('./images/MARIOSVG.png')";
        break;
      case "Kirby":
        document.getElementById("pers2").style.backgroundImage =
          "url('./images/kirby.jpg')";
        document.getElementById("pers2").style.backgroundPositionY = "20%";
        document.getElementById("luch2").style.backgroundImage =
          "url('./images/KIRBYSVGREVERSE.png')";
        break;
      case "Pikachu":
        document.getElementById("pers2").style.backgroundImage =
          "url('./images/pikachu.jpg')";
        document.getElementById("luch2").style.backgroundImage =
          "url('./images/PIKACHUSVG.png')";
        break;
      case "DonkeyKong":
        document.getElementById("pers2").style.backgroundImage =
          "url('./images/donkeykong.jpg')";
        document.getElementById("luch2").style.backgroundImage =
          "url('./images/DONKEYSVG.png')";
        break;
    }
    setTimeout(retraso, 5000);
  }
};
const ganaP1 = () => {
  ganador.style.backgroundImage = "url('./images/player1.jpg')";
  ganador.style.display = "block";
  pantalla3.removeAttribute("tabindex");
  document.getElementById("vida2").style.width = "0%";
};

const ganaP2 = () => {
  ganador.style.display = "block";
  ganador.style.backgroundImage = "url('./images/player2.jpg')";
  pantalla3.removeAttribute("tabindex");
  document.getElementById("vida1").style.width = "0%";
};
const teclaPulsada = (event) => {
  let e = event.keyCode;

  switch (e) {
    case 97:
      players[1].vida = players[1].vida - players[0].ataque;
      document.getElementById("vida2").style.width = players[1].vida + "%";
      if (players[1].vida <= 0) {
        ganaP1();
      }
      break;
    case 115:
      players[0].ataque = players[0].ataque + 0.5;
      players[1].vida = players[1].vida - players[0].ataque;
      document.getElementById("vida2").style.width = players[1].vida + "%";
      players[0].ataque = players[0].ataque - 0.5;
      if (players[1].vida <= 0) {
        ganaP1();
      }
      break;
    case 100:
      players[0].ataque = players[0].ataque + 1;
      players[1].vida = players[1].vida - players[0].ataque;
      document.getElementById("vida2").style.width = players[1].vida + "%";
      players[0].ataque = players[0].ataque - 1;
      if (players[1].vida <= 0) {
        ganaP1();
      }
      break;
    case 106:
      players[0].vida = players[0].vida - players[1].ataque;
      document.getElementById("vida1").style.width = players[0].vida + "%";
      if (players[0].vida <= 0) {
        ganaP2();
      }
      break;
    case 107:
      players[1].ataque = players[1].ataque + 0.5;
      players[0].vida = players[0].vida - players[1].ataque;
      document.getElementById("vida1").style.width = players[0].vida + "%";
      players[1].ataque = players[1].ataque - 0.5;
      if (players[0].vida <= 0) {
        ganaP2();
      }
      break;
    case 108:
      players[1].ataque = players[1].ataque + 1;
      players[0].vida = players[0].vida - players[1].ataque;
      document.getElementById("vida1").style.width = players[0].vida + "%";
      players[1].ataque = players[1].ataque - 1;
      if (players[0].vida <= 0) {
        ganaP2();
      }
      break;
  }
};
const pelea = () => {
  if (luchar.style.display === "block") {
    luchar.style.display = "none";
  }
};
