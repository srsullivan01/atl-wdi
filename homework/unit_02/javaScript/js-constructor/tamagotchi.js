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
    console.log(this.health -=1 + " is the current level of health.");
    return this.health -= 1;
  }
  puke(){
    console.log("blech! " + this.name + " threw up.")
    console.log(this.foodInTummy -= 1 + " is the current level of food.")
    return foodInTummy -= 1;
  }
  yawn() {
    console.log("yaaaawn...." + this.name + " is sleepy.")
    console.log(this.restedness -= 1 + " is the current level of restedness.")
    return restedness -= 1;
  }
}

//create new Tamagotchis
var Steve = new Tomagotchi("steve", "fat tama");
var Betty = new Tomagotchi("betty", "fluffy tama");

//test out your Tamagotchies below via console.logs
console.log(Steve);
console.log(Betty);

Steve.cry();
