const screenSwitch = (pantallaDestino) => {

    let destino = document.getElementById(pantallaDestino);
    destino.style.display = "flex";

    let arrayPantallas = ["pantalla1","pantalla2","pantalla3","pantalla4","pantalla5"];

    for(let pantalla of arrayPantallas){
        if(pantalla != pantallaDestino){
            document.getElementById(pantalla).style.display = "none";
        };
    };
   
};


seleccionados = document.getElementById("seleccionados");

let jugadorUno = "";
let jugadorDos = "";

let seleccion = 1;
const seleccionar = (seleccionado) =>{

switch (seleccion) {
  case 1:
    jugadorUno=allplayers[seleccionado];    
  break;
  case 1:
    jugadorDos=allplayers[seleccionado];    
  break;

default:
// Insertar en innerHTML #seleccionados "ya se han seleccionado los jugadores"
//create element button para continuar.
break;
}
}