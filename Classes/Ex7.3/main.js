class Animal {
    constructor(species, sound) {
    this.species = species;
    this.sound = sound;
}

printAnimal() {
    console.log(this.species, "makes this sound:", this.sound);
}
}

Animal.prototype.printFlying = function () {
    switch(this.species) {
        case"cow" : 
        console.log(this.species, "cant fly");
        break;

        case"owl":
        console.log(this.species, "fly");
        break;
    }
}

let cow = new Animal("cow", "muuuuuu");
let owl = new Animal("owl", "ou ");
cow.printAnimal();
cow.printFlying();

owl.printAnimal();
owl.printFlying();
