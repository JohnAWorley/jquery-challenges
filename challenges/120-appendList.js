$(document).ready(readyNow);

let myArray = [ 'lion', 'tigers', 'bears' ];

function readyNow(){
    appendBulletItem();
}

function appendBulletItem(){
  // YOUR CODE HERE
  let header = $('<h1>Challenge 120</h1>');
  $('.container').append(header);
  let ul = $('<ul id="myList"></ul>');
  $('.container').append(ul);

  // Loop through a list and append all the values to the DOM.
  for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    
    ul.append(`<li class= "animals"> ${element} </li>`);
  }
  
}

