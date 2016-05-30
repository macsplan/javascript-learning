var defaultTime = 25;
var sessionTime = defaultTime;

var defaultBreak = 5;
var breakLength = defaultBreak;

var sessionRunning = false;
var breakRunning = false;

var oneSecond = 1;
var interval = null;

// tick variables
var timer, duration, minutes, seconds;

function clickEvents() {
  $("#timer").on("click", function() {
    if (sessionRunning === false) {
      start();
    } else {
      stop();
    }
  });
  $("#sessionSettings .add").on("mousedown", function() {
    addSessionMinute();
  });
  $("#sessionSettings .subtract").on("click", function() {
    subtractSessionMinute();
  });
  $(".reset").on("click", function() {
    resetSession();
  });
  $("#breakSettings .add").on("mousedown", function() {
    addBreakMinute();
  });
  $("#breakSettings .subtract").on("click", function() {
    subtractBreakMinute();
  });
  $("#breakSettings .resetBreak").on("click", function() {
    resetBreak();
  });
}

function addSessionMinute() {
  sessionTime = sessionTime + 1;
  $(".sessionValue").text(sessionTime + ":00" );
  if (!sessionRunning) {
    duration = sessionTime * 60;
    timer = duration,
      minutes, seconds;
    $("#clock").text(sessionTime + ":00");
  }
}

function subtractSessionMinute() {
  if (sessionTime > 0) {
    sessionTime = sessionTime - 1;
    $(".sessionValue").text(sessionTime + ":00" );
    if (!sessionRunning) {
      duration = sessionTime * 60;
      timer = duration,
        minutes, seconds;
      $("#clock").text(sessionTime + ":00");
    }
  }
}

function addBreakMinute() {
  breakLength = breakLength + 1;
  $(".breakValue").text(breakLength + ":00" );
}

function subtractBreakMinute() {
  if (breakLength > 0) {
    breakLength = breakLength - 1;
    $(".breakValue").text(breakLength + ":00" );
  }
}

function resetSession() {
  sessionTime = defaultTime;
  $(".sessionValue").text(sessionTime + ":00" );
  if (!sessionRunning) {
    $("#clock").text(sessionTime + ":00");
  }
}

function resetBreak() {
  breakLength = defaultBreak;
  $(".breakValue").text(breakLength + ":00" );
}

function play_on_sound() {
  document.getElementById('audiotagON').play();
}

function play_off_sound() {
  document.getElementById('audiotagOFF').play();
}

function tick() {
  minutes = parseInt(timer / 60, 10)
  seconds = parseInt(timer % 60, 10);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  $('#clock').text(minutes + ":" + seconds);
  if (--timer < 0) {
    // start break
    if (!breakRunning) {
      play_on_sound();
      $('#timerName').text("Break Time");
      $("#timer").css("background-color", "#FB3100");
      timer = breakLength * 60;
      breakRunning = true;
    } else {
      play_off_sound();
      clearInterval(interval);
      timer = sessionTime * 60;
      sessionRunning = false;
      breakRunning = false;
      $('#timerName').text("Click to Reset Timer");
      $("#timer").css("background-color", "transparent");
    }
  }
}

function start() {
  sessionRunning = true;
  if (timer > 0) {
    if (!breakRunning) {
      $("#timer").css("background-color", "#004DFB");
      $('#timerName').text("Session Time");
    } else {
      $("#timer").css("background-color", "#FB3100");
    }
  }

  interval = setInterval(function() {
    tick();
  }, 1000);
}

function stop() {
  clearInterval(interval);
  $("#timer").css("background-color", "transparent");
  sessionRunning = false;
}

// setup click events
clickEvents();

// set initial timer
duration = sessionTime * 60;
timer = duration,
  minutes, seconds;

// show static clocks
$(".sessionValue").text(sessionTime + ":00" );
$(".breakValue").text(breakLength + ":00" );
$('#timerName').text("Session Time");
$("#clock").text(sessionTime + ":00");
