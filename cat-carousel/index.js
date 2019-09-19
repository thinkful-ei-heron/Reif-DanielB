'use strict';
$('.thumbnail').on('click', e => {
  let clicked = e.target;
  $('.hero img').attr('src', clicked.src).attr('alt', clicked.alt);
});

$('.thumbnail').keydown(e => {
  if (e.keyCode === 13) {
    let clicked = e.target;
    $('.hero img').attr('src', clicked.firstChild.src).attr('alt', clicked.firstChild.src);
  }
});
