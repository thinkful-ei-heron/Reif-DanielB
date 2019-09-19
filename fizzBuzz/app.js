'use strict';
// your code here

$(function (handleFizzBuzz) {
  $('#number-chooser').submit(event => {
    event.stopPropagation();
    event.preventDefault();
    let results = '';
    let countTo = $('#number-choice').val();
    function fizzBuzz(counter) {
      for (let i = 1; i <= counter; i++) {
        switch (true) {
          case i % 3 === 0 && i % 5 === 0:
            results += '<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span ></div >';
            break;
          case i % 3 === 0:
            results += '<div class="fizz-buzz-item fizz"><span>fizz</span ></div >';
            break;
          case i % 5 === 0:
            results += '<div class="fizz-buzz-item buzz"><span>buzz</span ></div >';
            break;
          default:
            results += `<div class="fizz-buzz-item"><span>${i}</span ></div >`;
        }
      }
      // console.log(results);
      return results;
    }
    fizzBuzz(countTo);
    $('.js-results').append(results);
  });
});
$(handleFizzBuzz);