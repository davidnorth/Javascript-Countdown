A very basic countdown timer class for JavaScript. Requires jQuery.
Use the onTick event to have some interface update on each second.
start() method will also reset the timer;


    $(document).ready(function(){

      var timer = new CountdownTimer({
        seconds: 5,
        onTick: function(){
          $('#mins').text(timer.fMins);
          $('#secs' ).text(timer.fSecs);
        },
        onComplete: function(){
          alert('complete');
        }
      });

      timer.start();

    });

