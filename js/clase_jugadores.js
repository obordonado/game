
class Pokemon {
  constructor(nombre,puntosvida,fuerza,defensa){
    this.nombre = nombre;
    this.puntosvida = puntosvida;
    this.fuerza = fuerza;
    this.defensa = defensa;
  }
};

let tortuga = new Pokemon("Tortuga",550,60,50);
let conejo = new Pokemon("Conejo",400,80,20);
let verdura = new Pokemon("Verdura",310,70,35);
let blastoise = new Pokemon("Blastoise",430,90,45);
let coloseum = new Pokemon("Coloseum",300,40,70);
let dino = new Pokemon("Dino",310,83,58);
let evee = new Pokemon("Evee",470,80,65);
let vaporeon = new Pokemon("Vaporeon",480,86,72);

let allPlayers = {
  "1": tortuga,
  "2": conejo,
  "3": verdura,
  "4": blastoise,
  "5": coloseum,
  "6": dino,
  "7": evee,
  "8": vaporeon,
}

