
var numberGenerate = []; //generatedNumbers
var pickedNumbers = []; //ballNumbers
var counter = 0;
var selected = ['free'];
var setTime; // setTimeInterval
var running = false;

// winningCombinations
var winners = [
    ['square1','square2','square3','square4','square5'],
    ['square6','square7','square8','square9','square10'],
    ['square11','square12','free','square13','square14'],
    ['square15','square16','square17','square18','square19'],
    ['square20','square21','square22','square23','square24'],
    ['square1','square6','square11','square15','square20'],
    ['square2','square7','square12','square16','square21'],
    ['square3','square8','free','square17','square22'],
    ['square4','square9','square13','square18','square23'],
    ['square5','square10','square14','square19','square24'],
    ['square1','square7','free','square18','square24'],
    ['square5','square9','free','square16','square20']
];

// possible winning combinations
var possibleWinners = winners.length;

// Function to generate Numbers

// generateNewNumber
function generateNumber() {
    return Math.floor(Math.random()*75)+1;
}

// generateBingoCard
function loadNumber() {
  for (var i = 0; i<25; i++) {
    var newNumber = generateNumber();

    // To check wether number already exists in numberGenerate array
    while ($.inArray(newNumber, numberGenerate) !== -1) {
      newNumber = generateNumber();
    }

    // If not push number to array
    numberGenerate.push(newNumber);
  }
}

// Push all numbers to Squares

// renderBingoCard
function addNumber() {
  for (var i = 0; i<25; i++) {
    $("#square"+i).html(numberGenerate[i]);
    $("#square"+i).addClass("value"+numberGenerate[i]);
  }
}


// generateBingoMachine
// Pick Number
function pickNumbers() {
  for (var i = 0; i<75; i++) {
    var newNumber = generateNumber();
    while ($.inArray(newNumber, pickedNumbers) !== -1) {
      newNumber = generateNumber();
    }
    pickedNumbers.push(newNumber);
  }
}

// renderBingoNumbers
function showNumber() {
  $("#displayNumber").html(pickedNumbers[counter]);
  if (counter < 1) {
    $(".pastNumbers").empty()
    $(".pastNumbers").prepend(pickedNumbers[counter]);
  } else {
    $(".pastNumbers").prepend(pickedNumbers[counter] + ", ");
  }
  if (counter >= 74) {
    clearInterval(setTime);
  } else {
    counter++;
  }
}


$( document ).ready(function() {
  // setup
  loadNumber();
  pickNumbers();
  addNumber();


  // play
  $( ".playbutton" ).on( "click", function() {
    if (!running) {
      if (counter == 0) {
        $(".pastNumbers").empty();
      }
      showNumber();
      setTime = setInterval(showNumber ,5000);
      running = true;
      $( ".playbutton" ).html('Machine Running');
      console.log("working");
    }
  });

  // pause
  $( ".pausebutton" ).on( "click", function() {
    clearInterval(setTime);
    running = false;
    $( ".playbutton" ).html('Restart Machine');
    console.log("pause");
  });


  // reset
  $('.reset').on( "click", function() {
    clearInterval(setTime);
    running = false;
    counter = 0;
    $('.cardSquare').removeClass('selected');
    selected = ['free'];
    $("#displayNumber").html("##");
    $( ".playbutton" ).html('Lets Play Bingo');
    $(".pastNumbers").empty().html("Called Numbers will appear here");
    console.log("reset");
  });

  // select clicked object

  $(".cardSquare").on("click", function() {
    $(this).addClass("selected");

    // Push clicked object ID to 'selected' array

    selected.push($(this).attr('id'));
    console.log(selected)


    // Compare winners array to selected array for matches
    for(var i = 0; i < possibleWinners; i++) {
        var cellExists = 0;

        for(var j = 0; j < 5; j++) {
            if($.inArray(winners[i][j], selected) > -1) {
                cellExists++;
            }
        }

        // If all 5 winner cells exist in selected array alert success message
        if(cellExists == 5) {
            var popup = new Foundation.Reveal($('#myModal'));
            popup.open();
            clearInterval(setTime)
            $('.close-reveal-modal').on("click", function() {
              popup.close();
            });
        }
    }
  });
});
