
class Pokemon {
  constructor(nombre,puntosvida,fuerza,defensa){
    this.nombre = nombre;
    this.puntosvida = puntosvida;
    this.fuerza = fuerza;
    this.defensa = defensa;
  }

  recuperar() {
    if(this.puntosvida<100){
      this.puntosvida =this.puntosvida + 20;
    }
  }
  
  atacar(enemigo){
    enemigo.puntosvida -= Math.round(Math.random())*10;
  }

}


let tortuga = new Pokemon("Tortuga",150,60,50);
let conejo = new Pokemon("Conejo",100,80,20);
let verdura = new Pokemon("Verdura",110,70,35);
let blastoise = new Pokemon("Blastoise",130,90,45);
let coloseum = new Pokemon("Coloseum",200,40,70);
let dino = new Pokemon("Dino",210,83,58);
let evee = new Pokemon("Evee",270,80,65);
let vaporeon = new Pokemon("Vaporeon",280,86,72);

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

