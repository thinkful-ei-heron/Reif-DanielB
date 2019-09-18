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

let characters = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 5),
createCharacter('Gimly', 'gimly', 'dwarf', 'Middle Earth', 5, 5),
createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
createCharacter('aragorn', 'aragorn', 'man', 'dunnedain', 6, 8),
createCharacter('legolas', 'legolas', 'elf', 'woodland realm', 8, 5),
createCharacter('Arwen Undomiel is a Half - Elf of Rivendell', 'arw', 'elf', 'forest realm', 5, 6)];

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

// console.log(gandalf.evaluateFight(gimly));
// Using the.find() function, retrieve your character nicknamed aragorn from characters and then call his describe method.
// console.log(characters);
let arrFind = characters.find((t) => {
  return t.name === 'aragorn';
});
// console.log(arrFind);

// Using the.filter() function, create a new array from characters that ONLY contains characters of the race Hobbit.
let hobbits = characters.filter((r) => {
  return r.race === 'Hobbit';
});
// console.log(hobbits);

// Using the.filter() function, create a new array from characters that ONLY contains characters with attack value above 5.
let fiveAttack = characters.filter(a => {
  return a.attack > 5;
});
// console.log(fiveAttack);
