'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];


//function findOne(arr, query){
//  for(const key in query){
//    arr.forEach(ele => {
//      if(ele[key] === query[key]){
//        let testObj = ele;
//        console.log(testObj)
//      }
//    })
//    console.log()
//  }
//}
//function findOne(arr, query){
//  keyArray = [];
//  valueArray = [];
//  for (const key in query){
//    keyArray.push(key);
//    valueArray.push(query[key]);
//  }
//  arr.forEach(x => {
//    for(let i = 0; i < keyArray.length; i++){
//      if(x[keyArray[i]] === valueArray[i] && x[keyArray[i+1]] === valueArray[i+1] && x[keyArray[i+1]] !== 'undefined' ) {  
//        console.log(`${x[keyArray[i]]} : ${valueArray[i]} // ${x[keyArray[i+1]]} : ${valueArray[i+1]} `)
//      }
//      
//    }
//  })
//  for(const key in query){
//    for(let i = 0; i < keyArray.length; i++){
//      if(key === )
//    }
//  }
//  console.log(keyArray);
//  console.log(valueArray);
//}

function findOne(arr, query) {
  let possible;
  let solution;
  for (let key in query) {
    for (let i = 0; i < arr.length; i++) {
      possible = arr.filter(e => e[key] === query[key]);
      //      console.log(possible)
    }
    if (solution === undefined) solution = possible;
    if (solution[0] === undefined) return console.log('null');
  }
  for (let key in solution) {
    for (let i = 0; i < possible.length; i++) {
      if (solution[0] === possible[i]) {
        return console.log(solution[0])
      }
    }
  }
  return console.log('null')
}

// findOne(HEROES, { id: 2 })
// findOne(HEROES, { id: 5, squad: 'Justice League' })
// findOne(HEROES, { squad: 'Justice League' })
// findOne(HEROES, { id: 100 })
// findOne(HEROES, { id: 2, name: 'Aquaman' })

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne(query) {
    let arr = this.store.heroes;
    let possible;
    let solution;
    for (let key in query) {
      for (let i = 0; i < arr.length; i++) {
        possible = arr.filter(e => e[key] === query[key]);
        //      console.log(possible)
      }
      if (solution === undefined) solution = possible;
      if (solution[0] === undefined) return console.log('null');
    }
    for (let key in solution) {
      for (let i = 0; i < possible.length; i++) {
        if (solution[0] === possible[i]) {
          return console.log(solution[0])
        }
      }
    }
    return console.log('null');
  }
};

Database.findOne({ id: 2, name: 'Aquaman' });