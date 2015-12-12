
function Timer(){
  var initTime = null;
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

  function init(){

    if(initTime === null){
      initTime = new Date();
    }

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

  function clock(){
    var currentTime = new Date();
    var interval = new Date(currentTime - initTime);
    hours = interval.getUTCHours();
    minutes = interval.getUTCMinutes();
    seconds = interval.getUTCSeconds();
    milliseconds = interval.getUTCMilliseconds();
  }

  function displayTimer(){
    hoursElement.innerHTML = hours > 9 ? hours : '0' + hours;
    minutesElement.innerHTML = minutes > 9 ? minutes : '0' + minutes;
    secondsElement.innerHTML = seconds > 9 ? seconds : '0' + seconds;
    millisecondsElement.innerHTML = milliseconds;
  }

  function start(){
    init();
    pause = false;
    timerId = window.setInterval(function(){
      clock();
      displayTimer();
   }, 4);
   console.log('start ', timerId);
  }

  function stop(){
    pause = true;
    console.log('stop ',timerId);
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
    if(startButtonRef !== null){
      startButtonRef.innerHTML = 'Start';
    }

    stop();
    pause = true;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    initTime = new Date();
    hoursElement.innerHTML = '00';
    minutesElement.innerHTML = '00';
    secondsElement.innerHTML = '00';
    millisecondsElement.innerHTML = '000';
  };
}

var timer = new Timer();

var startButton = document.querySelector('#start');
var clearButton = document.querySelector('#clear');


startButton.addEventListener('click', timer.run);
clearButton.addEventListener('click', timer.clear);
