$('.thumbnail').on('click', e => {
  console.log(e.target);
});

$('.thumbnail').on('click', e => {
  let clicked = document.activeElement
  $('.hero img').attr('src', clicked.src);
  $('.hero img').attr('alt', clicked.alt)
});

//$('.thumbnail').keypress(e => {
//  let clicked = $('document.activeElement')
//  console.log(clicked)
//  $('.hero img').attr('src', clicked.src);
//  $('.hero img').attr('alt', clicked.alt)
//});
