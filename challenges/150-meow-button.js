$(document).ready(readyNow);

function readyNow(){
  appendDom();
  
}

function appendDom(){
  let header = $('<h1>Challenge 150</h1>');
  $('.container').append(header);

  $('.container').append('<div></div>');
  let $el = $('.container').children().last();
  $el.append('<button id="meowButton">Meow</button>');
  $('#meowButton').on('click', addClickHandlers);
}

function addClickHandlers() {
  // YOUR CODE HERE
  // Add an event listener to the Meow Button
  // The listener should log 'Meeeooow' when the button is clicked
  console.log('Meeooow');
  
}
