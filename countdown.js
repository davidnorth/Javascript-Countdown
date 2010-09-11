var CountdownTimer = function(options){

  this.settings = $.extend(
			{   
                          seconds: 60,
                          onTick: null,
                          onComplete: null
			},options || {});

};

CountdownTimer.prototype = {

  start: function(){
    if(this.interval){
      clearInterval(this.interval);
    }
    this.secondsRemaining = this.settings.seconds;
    this.tick();
    this.interval = window.setInterval($.proxy(this.tick, this), 1000);
  },

  tick: function(){
    this.minutesRemaining = Math.floor(this.secondsRemaining / 60);
    this.minuteSecondsRemaining = this.secondsRemaining - (this.minutesRemaining * 60);
    this.fMins = this.formatNumber(this.minutesRemaining);
    this.fSecs = this.formatNumber(this.minuteSecondsRemaining);
    if(this.settings.onTick){
      this.settings.onTick();
    }
    if(this.secondsRemaining == 0){
      this.complete();
    }
    this.secondsRemaining -= 1;
  },

  complete: function(){
    clearInterval(this.interval);
    if(this.settings.onComplete){
      this.settings.onComplete();
    }
  },

  formatNumber: function(n){
    var s = String(n);
    if(s.length == 1){
      s = '0' + s;
    }
    return s;
  }

}


