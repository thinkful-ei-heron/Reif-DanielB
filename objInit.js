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

// Using array literal syntax, create an array characters that
// calls your factory function for each character in the table
// above with the relevant parameters.Your characters array
// should now have 5 objects in it.

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
      const damage = (otherChar.attack > this.defense) ? otherChar.attack - this.defense : 0;
      return `Your opponent takes ${this.attack} damage and you receive ${damage} damage`;
    }
  };
}
let gandalf = ['Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 5];
let gimly = ['Gimly', 'gimly', 'dwarf', 'Middle Earth', 5, 5];
let newGan = createCharacter(...gandalf);
let newGim = createCharacter(...gimly);

console.log(newGan.evaluateFight(newGim));