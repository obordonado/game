
class Pokemon {
  constructor(nombre,puntosvida,fuerza,defensa){
    this.nombre = nombre;
    this.puntosvida = puntosvida;
    this.fuerza = fuerza;
    this.defensa = defensa;
  }
};

let tortuga = new Pokemon("tortuga",550,60,50);
let conejo = new Pokemon("conejo",400,80,20);
let verdura = new Pokemon("verdura",310,70,35);
let blastoise = new Pokemon("blastoise",430,90,45);
let coloseum = new Pokemon("coloseum",300,40,70);
let dino = new Pokemon("dino",310,83,58);
let evee = new Pokemon("evee",470,80,65);
let vaporeon = new Pokemon("vaporeon",480,86,72);

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

