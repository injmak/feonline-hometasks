
function Timer(){
  var startTime = null;
  var stopTime = null;
  var stopDelay = 0;
  var hoursElement = null;
  var secondsElement = null;
  var minutesElement = null;
  var millisecondsElement = null;
  var timerId = 0;
  var milliseconds = 0;
  var seconds = 0;
  var minutes = 0;
  var hours = 0;
  var pause = true;
  var startButtonRef = null;

  init();

  function init(){
    if(millisecondsElement === null){
      millisecondsElement = document.querySelector('#milliseconds');
    }

    if(secondsElement === null){
      secondsElement = document.querySelector('#seconds');
    }

    if(minutesElement === null){
      minutesElement = document.querySelector('#minutes');
    }

    if(hoursElement === null){
      hoursElement = document.querySelector('#hours');
    }
  }

  function prepareTime(){
    if(startTime === null){
      startTime = new Date();
    }

    if(stopTime !== null){
      stopDelay += (new Date() - stopTime);
    }
  }

  function clock(){
    var currentTime = new Date();
    var interval = new Date(currentTime - startTime - stopDelay);
    hours = interval.getUTCHours();
    minutes = interval.getUTCMinutes();
    seconds = interval.getUTCSeconds();
    milliseconds = interval.getUTCMilliseconds();
  }

  function displayTimer(){
    hoursElement.innerHTML = hours > 9 ? hours : '0' + hours;
    minutesElement.innerHTML = minutes > 9 ? minutes : '0' + minutes;
    secondsElement.innerHTML = seconds > 9 ? seconds : '0' + seconds;

    if(milliseconds < 10){
      millisecondsElement.innerHTML = '00' + milliseconds;
    }else if (milliseconds > 9 && milliseconds < 99) {
      millisecondsElement.innerHTML = '0' + milliseconds;
    }else {
      millisecondsElement.innerHTML = milliseconds;
    }

  }

  function start(){
    prepareTime();
    pause = false;
    timerId = window.setInterval(function(){
      clock();
      displayTimer();
   }, 4);
  }

  function stop(){
    pause = true;
    stopTime = new Date();
    window.clearInterval(timerId);
  }

  this.run = function (event){
    startButtonRef = this;
    if(pause){
      startButtonRef.innerHTML = 'Pause';
      start();
    }else{
      startButtonRef.innerHTML = 'Continue';
      stop();
    }
  };

  this.clear = function (event){
    stop();
    pause = true;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    startTime = null;
    stopTime = null;
    stopDelay = 0;
    hoursElement.innerHTML = '00';
    minutesElement.innerHTML = '00';
    secondsElement.innerHTML = '00';
    millisecondsElement.innerHTML = '000';

    if(startButtonRef !== null){
      startButtonRef.innerHTML = 'Start';
    }
  };
}

var timer = new Timer();

var startButton = document.querySelector('#start');
var clearButton = document.querySelector('#clear');


startButton.addEventListener('click', timer.run);
clearButton.addEventListener('click', timer.clear);
