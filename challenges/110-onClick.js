$(document).ready(readyNow);
// counter number
let counter = 0;

function readyNow(){
    incrementOnClick();
}

function incrementOnClick(){
  
    
  
  let header = $('<h1>Challenge 110</h1>');
  $('.container').append(header);

  let button = $('<button id="incrementButton">Click Me</button>');
  $('.container').append(button);
  // Log a number that gets bigger by one every time a button is clicked.
  
  button.on('click' , function(){
    counter++ ;
    console.log(counter) ;
  })
}
