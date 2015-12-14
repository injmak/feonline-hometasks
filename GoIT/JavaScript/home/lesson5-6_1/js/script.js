
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
  var hoursText = '00';
  var minutesText = '00';
  var secondsText = '00';
  var millisecondsText = '000';
  var pause = true;
  var startButtonRef = null;
  var mems = [];

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
  init();

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

    hoursText = hours > 9 ? hours : '0' + hours;
    minutesText = minutes > 9 ? minutes : '0' + minutes;
    secondsText = seconds > 9 ? seconds : '0' + seconds;

    if(milliseconds < 10){
      millisecondsText = '00' + milliseconds;
    }else if (milliseconds > 9 && milliseconds < 99) {
      millisecondsText = '0' + milliseconds;
    }else {
      millisecondsText = milliseconds;
    }

    hoursElement.innerHTML = hoursText;
    minutesElement.innerHTML = minutesText;
    secondsElement.innerHTML = secondsText;
    millisecondsElement.innerHTML = millisecondsText;
  }

  function genElement(params){
    var parentElement = document.querySelector(params.parentId);
    var childElement = document.createElement(params.childName);

    if(params.elementType){
      childElement.setAttribute('type', params.elementType);
    }

    if(params.id){
      childElement.setAttribute('id', params.id);
    }

    if(params.className){
      childElement.className = params.className;
    }

    if(parentElement){
      if(params.before){
        parentElement.insertBefore(childElement, params.parentElement.firstChild);
      }else{
        parentElement.appendChild(childElement);
      }
    }

    if(params.innerHTML){
      childElement.innerHTML = params.innerHTML;
    }
  }

  function removeElement(params){
    var parentElement = document.querySelector(params.parentId);
    var element = document.querySelector(params.id);
    parentElement.removeChild(element);
  }

  function addMemo(text){
    var i = mems.length + 1;
    var id = 'memo' + i;
    genElement({
      parentId: '#parent',
      childName: 'p',
      innerHTML: i + '. ' + text,
      id: id,
    });
    mems.push(id);
  }

  function removeAllMemos(){
    var length = mems.length;
    for (var i = 0; i < length; i++) {
      removeElement({
        parentId: '#parent',
        id: '#'+mems[i],
      });      
    }

    for (var i = 0; i < length; i++) {
      mems.shift();
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

  function clearAll(){
    pause = true;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    startTime = null;
    stopTime = null;
    stopDelay = 0;
    hoursText = '00';
    minutesText = '00';
    secondsText = '00';
    millisecondsText = '000';
    hoursElement.innerHTML = hoursText;
    minutesElement.innerHTML = minutesText;
    secondsElement.innerHTML = secondsText;
    millisecondsElement.innerHTML = millisecondsText;
  }

  this.split = function(event){
    if(!pause){
      addMemo('SPLIT  '+ hoursText + ':' + minutesText + ':' + secondsText + ':' + millisecondsText);
    }
  };

  this.run = function (event){
    startButtonRef = this;
    if(pause){
      startButtonRef.innerHTML = 'Stop';
      start();
    }else{
      startButtonRef.innerHTML = 'Start';
      addMemo('STOP  '+ hoursText + ':' + minutesText + ':' + secondsText + ':' + millisecondsText); //////////////////////
      stop();
    }
  };

  this.clear = function (event){
    stop();
    removeAllMemos();
    clearAll();

    if(startButtonRef !== null){
      startButtonRef.innerHTML = 'Start';
    }
  };
}

var timer = new Timer();

var startButton = document.querySelector('#start');
var clearButton = document.querySelector('#clear');
var splitButton = document.querySelector('#split');


startButton.addEventListener('click', timer.run);
clearButton.addEventListener('click', timer.clear);
splitButton.addEventListener('click', timer.split);
