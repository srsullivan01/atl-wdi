// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
//find time markers and quantify them
//when does time unit change
    this.millisecs += 10;
    if (this.millisecs >= 1000) {
      this.millisecs -= 1000;
      this.secs++;
    }
    if (this.secs >= 60) {
      this.secs -= 60;
      this.mins++;
    }
  },
  reset: function(){
    // return to riginal state/undo previous
    this.millisecs = 0;
    this.secs = 0;
    this.mins = 0;
  },
  start: function(){
//get function to make clock start
//set parameters for starting
if (!this.isRunning) {
  this.isRunning = true;
  this.tickClock();
  }
},
  stop: function(){
    this.isRunning = false;
  },
  lap: function(){
    // 
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    //find mins
    document.getElementById('mins').innerHTML = ViewHelpers.zeroFill(mins, 2);
    //find secs
    document.getElementById('secs').innerHTML = ViewHelpers.zeroFill(secs, 2);
    //find millisecs
    document.getElementById('millisecs').innerHTML = ViewHelpers.zeroFill(millisecs/10, 2);
    //push each into display
  },
  updateLapListDisplay: function(laps){
    // Your Code Here
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    //get number to display as a string and convert
    var str = number.toString();
    //determine when number needs to not be a string
    var numZeroes = Math.max(length - str.length, 0);
    for( var i = 0; i < (length - str.length); i++){
      str = '0' + str;
    }
    return str;
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    //get time functions and tell them to display
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
  },
  handleClickStart: function() {
    // onclick function to set off clock
    // display milliseconds
      //reset milliseconds every 10
    //display seconds
      //reset seconds ever 60
    //display minutes
    // format `MM:SS:ss` (e.g. `100:01:34`, `05:01:10`)
    //I couldn't get this to work on my own, and eventually broke down and checked the solution. I think it works because I'm
    //calling the isRunning component, and then triggering the start function.
    if(!Stopwatch.isRunning) {Stopwatch.start();}
  },
  handleClickStopReset: function(){
    // onclick function to return to original state and begin again
    //display milliseconds as zero and begin
    //dispkay seconds as zero
    //display minutes as zero
    //repeat function created in handleClickStart
    if(Stopwatch.isRunning) {
      //find stopwatch and call the stop function
      Stopwatch.stop()
    } else {
      Stopwatch.reset();
        ViewEngine.updateTimeDisplay(0, 0, 0);
    }
  },
  handleClickLap: function(){
    // onclick function to stop and display current data
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
  document.getElementById('start').onclick = AppController.handleClickStart;
    document.getElementById('stop').onclick = AppController.handleClickStopReset;
};
