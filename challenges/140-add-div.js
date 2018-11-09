$(document).ready(readyNow);

function readyNow(){
  appendDom();
}

function appendDom(){
  let header = $('<h1>Challange 140</h1>');
  $('.container').append(header);
  $('.container').append(`<div id="insideDiv"></div>`);
  // YOUR CODE HERE
  // Add a DIV to the Container Class (a new DIV inside of the DIV that already exists).
  // Inside the DIV, add a P tag that has your name
  $('#insideDiv').append('<p>john worley</p>')
  $('#insideDiv').append('<p>Mpls</p>')
  // Then add another P tag with the City you live in.
}
