
let jugador = [];

// let ganador = "";

//Apunta a los stats de los jugadores en ventanas inferiores de pantalla 2
let imagenIzquierda = document.getElementById("elegidoUno");
let imagenDerecha =   document.getElementById("elegidoDos");


//Apunta a los stats de los jugadores en ventanas superiores de pantalla 3
let elegidoIzq =      document.getElementsByClassName("elegidoIzq");
let elegidoDer =      document.getElementsByClassName("elegidoDer");

//Apunta a las imágenes de jugadores pantalla 3
let imagenPagTresIz = document.getElementsByClassName("imagenPagTresIzq");
let imagenPagTresDe = document.getElementsByClassName("imagenPagTresDer");


const screenSwitch = (pantallaDestino) => {

  let destino = document.getElementById(pantallaDestino);
  destino.style.display = "flex";
  let pantallas = ["pantalla1","pantalla2","pantalla3"];
  for(let pantalla of pantallas){
    if(pantalla != pantallaDestino){
      document.getElementById(pantalla).style.display = "none";
    };
  };
};

const selecciona = (bicho) => {
  if(jugador.length < 2){
    jugador.push(allPlayers[bicho]);
    imagenIzquierda.innerHTML = `PLAYER 1 <br><br>Nombre : ${jugador[0].nombre} <br> Vida : ${jugador[0].puntosvida} <br> Fuerza : ${jugador[0].fuerza} <br> Defensa : ${jugador[0].defensa}`;
    imagenDerecha.innerHTML =   `PLAYER 2 <br><br>Nombre : ${jugador[1].nombre} <br> Vida : ${jugador[1].puntosvida} <br> Fuerza : ${jugador[1].fuerza} <br> Defensa : ${jugador[1].defensa}`;

  };
};

// const limpiar = () => {

//     jugador = [];

//     ganador = "";

//     danoIzquierda.innerHTML = ``;

//     danosDerecha.innerHTML = ``;

//     coche1.metros = 0;
//     coche2.metros = 0;
//     coche3.metros = 0;
//     coche4.metros = 0;

//     setTimeout(()=>{

//         screenSwitch("pantalla1");
//     },2000);

// };

// elegidoIzq.innerHTML = `PLAYER 1 <br><br>Nombre : ${jugador[0].nombre} <br> Vida : ${jugador[0].puntosvida} <br> Fuerza : ${jugador[0].fuerza} <br> Defensa : ${jugador[0].defensa}`;
// elegidoDer.innerHTML = `PLAYER 1 <br><br>Nombre : ${jugador[0].nombre} <br> Vida : ${jugador[0].puntosvida} <br> Fuerza : ${jugador[0].fuerza} <br> Defensa : ${jugador[0].defensa}`;

// if(jugador.length===2){
//   setTimeout(()=>{

//     batalla.innerHTML = `

//     <div class="cont-lados">
//       <div class="cont-barra">
//         <div class="barra-vida"></div>
//       </div>
//       <div class="cont-stats">
//         <div class="elegidoIzq elegido3"></div>
//       </div>
//       <div class="cont-imagen">
//         <div class="imagenPagTresIzq">    
//           <img src='img/${jugador[0]}.png'>   
//         </div>
//       </div>
//       <div class="cont-boton">
//         <div class="boton">ATTACK !!</div>
//         <div class="boton">HEAL</div>
//       </div>
//     </div>
        
//     <div class="cont-lados">
//       <div class="cont-barra">
//         <div class="barra-vida"></div>
//       </div>
//       <div class="cont-stats">
//         <div class="elegidoDer elegido3"></div> 
//       </div>
//       <div class="cont-imagen">
//         <div class="imagenPagTresDer">        
//         <img src='img/${jugador[1]}.png'>       
//         </div>
//       </div>
//       <div class="cont-boton">
//         <div class="boton">ATTACK !!</div>
//         <div class="boton">HEAL</div>
//       </div>
//     </div>    
//     `;
    
//     // screenSwitch("pantalla3");


//     setTimeout(()=>{

//       elegidoIzq.innerHTML = "PLAYER 1 <br><br>Nombre : " + `${jugador[0].nombre}`+ " <br> +Vida : " + `${jugador[0].puntosvida}` + "<br> Fuerza : " + `${jugador[0].fuerza}` + "<br> Defensa : " + `${jugador[0].defensa}`;
//       elegidoDer.innerHTML = "PLAYER 2 <br><br>Nombre : " + `${jugador[1].nombre}`+ " <br> +Vida : " + `${jugador[1].puntosvida}` + "<br> Fuerza : " + `${jugador[1].fuerza}` + "<br> Defensa : " + `${jugador[1].defensa}`;

//       imagenPagTresIz.innerHTML =` <div class="imagenPagTresDer"> <img src='img/${jugador[0]}.png'> </div> `
      
//       imagenPagTresDe.innerHTML= ` <div class="imagenPagTresDer"> <img src='img/${jugador[1]}.png'> </div> `

//     },200);
//   },200);
// };