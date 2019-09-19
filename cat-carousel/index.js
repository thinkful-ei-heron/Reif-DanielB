'use strict'
$('.thumbnail').on('click', e => {
  let clicked = e.target
  $('.hero img').attr('src', clicked.src).attr('src', clicked.src);
  $('.hero img').attr('alt', clicked.alt).attr('alt', clicked.alt);
});

$('.thumbnail').keydown(e => {
  if (e.keyCode === 13) {
    let clicked = e.target;
    $('.hero img').attr('alt', clicked.firstChild.alt).attr('alt', clicked.firstChild.alt);
    $('.hero img').attr('src', clicked.firstChild.src).attr('src', clicked.firstChild.src);
  }
});
