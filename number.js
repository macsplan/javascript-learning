function triangle() {
  var hash = " ";
  for (var i = 0; i < 7; i++) {
    console.log(hash += "#");
  }
}

// triangle()


function fizzBuzz() {
  for (var i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i)
    }
  }
}

// fizzBuzz()

function chessBoard() {
  var size = 8;
  for (var i = 0; i < size; i++) {
    var line = "";
    for (var x = 0; x < size; x++) {
      var total = i + x;
    	if (total % 2 == 0) {
    	  line += '#';
      } else {
        line += ' ';
      }
    }
    console.log(line);
  }
}

// chessBoard()
function count(maxNumber) {
  var str = "";
  for (var i = 0; i < maxNumber; i++) {
    for (var x = 0; x < i; x++) {
      str += i + 1;
    }
    console.log(str);
  }
}

count(5)


function count1(maxNumber) {
  for (var i = 0; i < maxNumber; i++) {

    // print result
    var results = ""
    for (var x = 0; x <= i; x++) {
      results += " " + (i + 1)
    }

    // create indent based on i
    var spaces = maxNumber - i
    // console.log("maxNumber is " + maxNumber)
    // console.log("i is " + i)
    var indent = ""
    for (var space = 0; space <= spaces; space ++) {
      indent += " "
    }

    // print both
    console.log(indent + results)
  }
}

// count1(5)
