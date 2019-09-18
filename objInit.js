'use strict';

const loaf = {
  flour: 300,
  water: 210
};
// console.log(loaf.flour, loaf.water);

loaf.hydration = function () {
  return loaf.flour / loaf.water * 100;
};

// console.log(loaf.hydration());

const hobbitFood = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
// console.log(hobbitFood.meals[3]);

// Each character should also have a method called evaluateFight that takes
// in a character object and returns the following string:
// "Your opponent takes {x} damage and you receive {y} damage"
// where x and y are the differences between each characters
// attack and defense values.If defense exceeds attack, then take zero damage.

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe() {
      `${this.name} is a ${this.race} from ${this.origin}`;
    },
    evaluateFight(otherChar) {
      let damage = (otherChar.attack < this.defense) ? 0 : (otherChar.attack - this.defense);
      console.log(damage);
      return `Your opponent takes ${this.attack - otherChar.defense} damage and you receive ${damage} damage`;
    }
  };
}
let gandalf = ['Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6];
let gimly = ['Gimly', 'gimly', 'dwarf', 'Middle Earth', 5, 5];
let newGan = createCharacter(gandalf);
let newGum = createCharacter(gimly);

console.log(newGan.evaluateFight(gimly));