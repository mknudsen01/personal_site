$( document ).ready(function() {
  $('#ryu').html('<img src="img/ryu_stand_still.png">');

  $('#ryu img').hover( function() {
    this.src = 'img/ryu_animated.gif';
  }, function() {
    this.src = 'img/ryu_stand_still.png';
  });

  $('#ryu img').mousedown( function() {
    this.src = 'img/ryu_hadouken_pose.png';
  });

  $('#ryu img').mousedown(function() {
    $('.demo-hadouken').remove();
  });

  $('#ryu img').mousedown(function() {
    $('#ryu').append(
      '<img class="demo-hadouken" src="img/hadouken.gif">'
      );
  });

  $('#ryu img').mousedown(function() {
    $('.demo-hadouken').animate( {
      "margin-left": "600px"
    }, 1000, 'swing', function() {
      this.remove();
    });
  });

  $('#ryu img').mouseup(function() {
    this.src = 'img/ryu_animated.gif';
  });
});