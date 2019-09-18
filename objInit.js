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

// Create an object with a property called meals which is an array of strings: 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
// Use console.log to show the name of a hobbit's fourth meal of the day.
// Don't forget that humans and hobbits count from 1, but computers count from 0.

const hobbitFood = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
console.log(hobbitFood.meals[3]);