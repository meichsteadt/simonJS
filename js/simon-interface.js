var Simon = require('./../js/simon.js').simonModule;

$(function() {
  var game = new Simon();
  $('#start').click(function() {
    start();
  })
  function addClick() {
    game.colors.forEach(function(color) {
      $('#'+color).click(function() {
        game.answer(color);
        if(!(game.checkAnswer(game.counter-1))) {
          game.reset();
          $('#round').html(game.pattern.length)
        }
        else if(game.counter === game.pattern.length) {
          start()
          $('#round').html(game.pattern.length-1)
        }
      });
    });
  }
  function removeClick() {
    game.colors.forEach(function(color) {
      $('#'+color).unbind('click');
    });
  }
  function start() {
    game.nextRound();
    showPattern();
  }
  function showPattern() {
    removeClick();
    time = 1000;
    game.pattern.forEach(function(color) {
      setTimeout(function() {
        $('#'+color).addClass('hover');
        setTimeout(function() {
          $('#'+color).removeClass('hover');
        }, 700);
      }, time);
      time+= 1000;
    });
    setTimeout(function() {
      addClick();
    }, 1000 * game.pattern.length)
  }
});
