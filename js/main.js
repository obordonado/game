
let jugador = [];

// let ganador = "";


let bichoIzquierda = document.getElementById("elegidoUnoData");
let bichoDerecha = document.getElementById("elegidoDosData");
let imagenIzquierda = document.getElementById("elegidoUno");
let imagenDerecha = document.getElementById("elegidoDos");
let elegidoIzq = document.getElementsByClassName("elegido-izq");
let elegidoDer = document.getElementsByClassName("elegidoDer");


const screenSwitch = (pantallaDestino) => {
  let destino = document.getElementById(pantallaDestino);

  setTimeout(()=>{
    destino.style.display = "flex";
    let pantallas = ["pantalla1","pantalla2","pantalla3","pantalla4","pantalla5"];
    for(let pantalla of pantallas){
      if(pantalla != pantallaDestino)
      {document.getElementById(pantalla).style.display = "none";
    }
  }
  },300);

}

const selecciona = (bicho) => {
  if(jugador.length < 2){
    jugador.push(allPlayers[bicho]);
    imagenIzquierda.innerHTML = `PLAYER 1 <br><br>Nombre : ${jugador[0].nombre} <br> Vida : ${jugador[0].puntosvida} <br> Fuerza : ${jugador[0].fuerza} <br> Defensa : ${jugador[0].defensa}`;
    imagenDerecha.innerHTML = `PLAYER 2 <br><br>Nombre : ${jugador[1].nombre} <br> Vida : ${jugador[1].puntosvida} <br> Fuerza : ${jugador[1].fuerza} <br> Defensa : ${jugador[1].defensa}`;
  }
}
// elegidoIzq.innerHTML = `PLAYER 1 <br><br>Nombre : ${jugador[0].nombre} <br> Vida : ${jugador[0].puntosvida} <br> Fuerza : ${jugador[0].fuerza} <br> Defensa : ${jugador[0].defensa}`;





// OJO A RESOLUCION PANTALLA PORTATIL


// const play = () => {

// let random = Math.round(Math.random());

// jugadores[random].acelerar();

// if(jugadores[random].metros >= 200){



//   setTimeout(()=>{

//       winnerIs.innerHTML = `${jugadores[random].marca}`;

//       screenSwitch("pantalla5");
//   },500)
// }

// if(random == 0){

//   metrosIzquierda.innerHTML = `${jugadores[random].metros}`;
// } else {
//   metrosDerecha.innerHTML = `${jugadores[random].metros}`;
// }


// };

// const limpiar = () => {

//     jugadores = [];

//     ganador = "";

//     metrosIzquierda.innerHTML = ``;

//     metrosDerecha.innerHTML = ``;

//     coche1.metros = 0;
//     coche2.metros = 0;
//     coche3.metros = 0;
//     coche4.metros = 0;

//     setTimeout(()=>{

//         screenSwitch("pantalla1");
//     },500);

// };