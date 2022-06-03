
let jugador = [];

let ganador = "";

//Apunta contra los stats de los jugadores en ventanas inferiores de pantalla 2
let imagenIzquierda = document.getElementById("elegidoUno");
let imagenDerecha =   document.getElementById("elegidoDos");

//Apunta contra los stats de pantalla 3
let statDer = document.getElementById("statDer");
let statIz = document.getElementById("statIz");

//Apunta contra los stats de los jugadores en ventanas superiores de pantalla 3
let elegidoIzq =      document.getElementsByClassName("elegidoIzq");
let elegidoDer =      document.getElementsByClassName("elegidoDer");

//Apunta contra las imágenes de jugadores pantalla 3
let imagenPagTresIz = document.getElementById("imagenPagTresIzq");

let imagenPagTresDe = document.getElementById("imagenPagTresDer");



const screenSwitch = (pantallaDestino) => {

  let destino = document.getElementById(pantallaDestino);
  destino.style.display = "flex";
  let pantallas = ["pantalla1","pantalla2","pantalla3","final"];
  for(let pantalla of pantallas){
    if(pantalla != pantallaDestino){
      document.getElementById(pantalla).style.display = "none";
    }
  }
}

const selecciona = (bicho) => {
  if(jugador.length < 1){
    jugador.push(allPlayers[bicho]);
    imagenIzquierda.innerHTML = `PLAYER 1 <br><br>Nombre : ${jugador[0].nombre} <br> Vida : ${jugador[0].puntosvida} <br> Fuerza : ${jugador[0].fuerza} <br> Defensa : ${jugador[0].defensa}`;
    statIz.innerHTML = `PLAYER 1 <br><br>Nombre : ${jugador[0].nombre} <br> Vida : ${jugador[0].puntosvida} <br> Fuerza : ${jugador[0].fuerza} <br> Defensa : ${jugador[0].defensa}`;
    imagenPagTresIz.innerHTML = `<img class="player" src='/img/${jugador[0].nombre}.jpg'/>`;/// FIX///
  }
  else if(jugador.length<2){
    jugador.push(allPlayers[bicho]);
    imagenDerecha.innerHTML = `PLAYER 2 <br><br>Nombre : ${jugador[1].nombre} <br> Vida : ${jugador[1].puntosvida} <br> Fuerza : ${jugador[1].fuerza} <br> Defensa : ${jugador[1].defensa}`;
    statDer.innerHTML = `PLAYER 2 <br><br>Nombre : ${jugador[1].nombre} <br> Vida : ${jugador[1].puntosvida} <br> Fuerza : ${jugador[1].fuerza} <br> Defensa : ${jugador[1].defensa}`;
    imagenPagTresDe.innerHTML= `<img class="player" src='../img/${jugador[1].nombre}.jpg'/>`;/// FIX///

  }

}

golpearIzq=()=>{
  jugador[1].puntosvida -= jugador[0].fuerza*(Math.round(Math.random())*10)/5;
  console.log("Player Dos vida : " + jugador[1].puntosvida);
  if(jugador[1].puntosvida <=0){
    console.log("Jugador 2 ha perdido");
    jugador[0].puntosvida === 0;
    setTimeout(()=>{
      screenSwitch(`final`);
    },1000);    
  }
}
golpearDer=()=>{
  jugador[0].puntosvida -=jugador[1].fuerza*(Math.round(Math.random())*10)/5;
  console.log("Player Uno vida : " + jugador[0].puntosvida);
  if(jugador[0].puntosvida <=0){
    console.log("Jugador 1 ha perdido");
    jugador[1].puntosvida === 0;
    setTimeout(()=>{
      screenSwitch(`final`);
    },1000);    
  }
}
healIzq=()=>{
jugador[0].puntosvida += jugador[0].defensa*(Math.round(Math.random())*3)/2;
console.log("Jugador Uno puntos de vida : " + jugador[0].puntosvida);

};
healDer=()=>{
  jugador[1].puntosvida += jugador[0].defensa*(Math.round(Math.random())*3)/2;
  console.log("Jugador Dos puntos de vida : " + jugador[1].puntosvida);
  }


const limpiar = () => {
    jugador = [];
    ganador = "";
    imagenIzquierda.innerHTML = ``;
    imagenDerecha.innerHTML = ``;
    statDer.innerHTML = ``;
    statIz.innerHTML = ``;
    elegidoIzq.innerHTML = ``;
    elegidoDer.innerHTML = ``;
    imagenPagTresIz.innerHTML = ``;
    imagenPagTresDe.innerHTML = ``;
    setTimeout(()=>{
        screenSwitch("pantalla1");
    },2000);
};
