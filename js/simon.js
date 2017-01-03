function Simon() {
  this.colors = ['red', 'blue', 'green', 'yellow'];
  this.pattern = [];
  this.userAnswer = [];
  this.counter = 0;
}

Simon.prototype.nextRound = function() {
  this.userAnswer = []
  this.counter = 0;
  this.pattern.push(this.colors[Math.round(Math.random()*3)])
};

Simon.prototype.readPattern = function() {
  return this.pattern
};

Simon.prototype.reset = function() {
  this.pattern = []
  this.userAnswer = []
  this.counter = 0
};

Simon.prototype.checkAnswer = function(answer) {
  if(this.pattern[answer] === this.userAnswer[answer]) {
    return true;
  }
  else {
    return false;
  }
};

Simon.prototype.answer = function (input) {
  this.userAnswer.push(input);
  this.counter++;
};

exports.simonModule = Simon;
