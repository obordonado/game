class Pokemon{
  constructor(nombre,puntosvida,fuerza,defensa){
    this.nombre=nombre;
    this.puntosvida=puntosvida;
    this.fuerza=fuerza;
    this.defensa=defensa;
  }
}

defender(){
  if(this.puntosvida<100){
    this.puntosvida =this.puntosvida + 20;
  }
}


// math random para asignar la reduccion de puntos de vida por cada turno de jugador.
let bicho1 = new Pokemon("bichoUno",500,58,46);
let bicho2 = new Pokemon("bichoDos",550,48,58);
let bicho3 = new Pokemon("bichoTres",480,52,55);
let bicho4 = new Pokemon("bichoCuatro",550,45,60);



let allPlayers={
  "1": bicho1,
  "2": bicho2,
  "3": bicho3,
  "4": bicho4  
}