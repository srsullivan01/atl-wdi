$(function () {
var counterCollection = {
  counters: [
    {
      currentValue: 0,
      counterName: 'Errors: '
    },
    {
      currentValue: 0,
      counterName: 'Warnings: '
    },
    {
      currentValue: 5,
      counterName: 'Whoops: '
    },
  ],
  addOneToCounterValue: function (counterIndex) {
    counters[counterIndex].currentValue += 1;
  }
}
var createDivs = function() {$('<div>')}
//make a container-see html
//find that container
var $counterContainer = $('#counter-container');
//loop through user's counters
for(var i = 0; i <counterCollection.counters.length; i++) {

  //get current counter object
  var counter = counterCollection.counters[i];

  //for each counter crteate a div
  var $newCounterDiv = $('<div>');

  //assign div a class of 'counter'
  $newCounterDiv.addClass('counter');

  //div should have a data-counter-index of current array index
  $newCounterDiv.data('counterIndex', i);

  //should have a header of counter Name
  $newCounterDiv.append('<h1>').append(counter.counterName);

  //div should span containing current value
  $newCounterDiv.append('<span>').append(counter.currentValue);

  //div needs button with id of add-one
  var $plusOneButton = $('<button>');
  $plusOneButton.html('+1');
  $plusOneButton.attr('id', 'add-one');
$newCounterDiv.append($plusOneButton);

  //MAKE REMOVAL button
  var $removeButton = $('<button>');
  $removeButton.html('remove counter');
  $removeButton.attr('id', 'remove-button');
  $newCounterDiv.append($removeButton);

$newCounterDiv.on('click', function(event) {
  if(event.target.id === 'remove-counter') {
    $(event.currentTarget).remove();
  } else if(event.target.id === 'add-one') {
    counter.currentValue += 1;
    counterCollect.addOneToCounterValue(i);

  }
});

  //div should then append to '#counter-container'
  $counterContainer.append($newCounterDiv);
};



{/* <div class="counter" data-counter-index="0">
    <h1 id ="counter-name">Errors</h1>
    <span id="current-count">0</span>
    <button id="add-one">+1</button>
  </div>*/}

//find the button
var button = $('#add-one');

// add an event listener to the button
button.on('click', function () {
// then, inside the listener callback:

    // find the span to get the current value
    var currentValue = $('#current-count').text();
    var currentValueAsInt = parseInt(currentValue);

    // add one to the current span value
    currentValueAsInt += 1;

    // change the span to the new value
    $('#current-count').html(currentValueAsInt);
});
//find and arm submit button
var $newCounterButton = $('#add-new-counter');
//add event listener to button
$newCounterButton.on('click', function (event) {
  //stop refreshing
  event.preventDefault();
  //find new counter name
  var newCounterName = $('#new-counter-id').val();
  //find new counter value
  var newCounterStartValue = $('#new-counter-start-value').val();
  //alert both
  alert('new Counter Name: ' + newCounterName);
  alert('New Counter Start Value: ' + newCounterStartValue);
  })
});
