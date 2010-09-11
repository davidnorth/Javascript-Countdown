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
  
  $('#start').click(function(){
    timer.start();
  });

});

