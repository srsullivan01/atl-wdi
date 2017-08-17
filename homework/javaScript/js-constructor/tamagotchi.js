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
    return this.foodInTummy -= 1;
  }
  yawn() {
    console.log("yaaaawn...." + this.name + " is sleepy.")
    console.log(this.restedness -= 1 + " is the current level of restedness.")
    return this.restedness -= 1;
  }
  start(){
    console.log("Starting " + this.name);
    var self = this;
    this.hungerTimer = setInterval(function() {
      self.cry();
    }, 6000);
    this.yawnTimer = setInterval(function() {
      self.yawn();
    }, 10000);
    this.sickTimer = setInterval(function() {
      self.puke();
    }, 25000);
  }
  stop(){
    console.log(this.name + " is finished playing for now.");
    clearInterval(this.hungerTimer);
    clearInterval(this.yawnTimer);
    clearInterval(this.sickTimer);
  }
}

//create new Tamagotchis
var Steve = new Tomagotchi("steve", "fat tama");
var Betty = new Tomagotchi("betty", "fluffy tama");

//test out your Tamagotchies below via console.logs
console.log(Steve);
console.log(Betty);

Steve.cry();
Betty.puke();
Steve.yawn();

//buttons
document.getElementById("startButton").addEventListener("click", function(){
    start();
});
document.getElementById("stopButton").addEventListener("click", function(){
    stop();
});
document.getElementById("feedButton").addEventListener("click", function(){
    player.feedTamagotchi();
});
document.getElementById("restButton").addEventListener("click", function(){
    player.knockOutTamagotchi();
});
document.getElementById("medsButton").addEventListener("click", function(){
    player.medicateTamagotchi();
});
