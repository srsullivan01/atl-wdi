console.log('tamagotchi file is loaded');

//your class declaration here
class Tomagotchi {
  constructor(name, creatureType) {
      this.name = name;
    this.creatureType = creatureType;
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
  }
  cry(){
    console.log("WAAAAH! " + this.name + " is upset!");
    console.log(this.foodInTummy -=1 );
  }
}

//create new Tamagotchis
var Steve = new Tomagotchi("steve", "fat tama");
var Betty = new Tomagotchi("betty", "fluffy tama");

//test out your Tamagotchies below via console.logs
console.log(Steve);
console.log(Betty);

Steve.cry();
