'use strict';
// your code here

function handleFizzBuzz() {
  $('#number-chooser').submit(event => {
    event.stopPropagation();
    event.preventDefault();
    let results = '';
    let curReturn;
    let countTo = $('#number-choice').val();
    function fizzBuzz(counter) {
      for (let i = 1; i <= counter; i++) {
        switch (true) {
          case i % 3 === 0 && i % 5 === 0:
            curReturn = 'fizzbuzz';
            break;
          case i % 3 === 0:
            curReturn = 'fizz';
            break;
          case i % 5 === 0:
            curReturn = 'buzz';
            break;
          default:
            curReturn = i;
        }
        results += `<div class="fizz-buzz-item ${curReturn}"><span>${curReturn}</span ></div >`;
      }
      // console.log(results);
      return results;
    }
    fizzBuzz(countTo);
    $('.js-results').append(results);
  });
}
handleFizzBuzz();