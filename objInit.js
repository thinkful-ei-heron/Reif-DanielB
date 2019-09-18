'use strict';

const loaf = {
  flour: 300,
  water: 210
};
console.log(loaf.flour, loaf.water);

loaf.hydration = function () {
  return loaf.flour / loaf.water * 100;
};

console.log(loaf.hydration());

const hobbitFood = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
console.log(hobbitFood.meals[3]);

function createCharacter(stats) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense
  };
}
let stats = ('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6)
console.log(createCharacter(...stats));