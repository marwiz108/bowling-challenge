"use strict";

function Game() {
  this.frame = [];
  this.MAX_ROLLS = 2;
  this.match = []
  this.MAX_FRAMES = 10;
  this.currentScore = 0;
};

Game.prototype.roll = function(pins) {
  if (this.frame.length === 2) {
    this.resetFrame();
  };
  if (this.frame.length < this.MAX_ROLLS) {
    (this.frame).push(pins);
  };
};

Game.prototype.resetFrame = function () {
  this.framescore();
  this.frame = [];
};

Game.prototype.framescore = function() {
  var result = (this.frame[0] + this.frame[1]);
  console.log(this.match);
  (this.match).push(result);
  console.log(this.match);
  return result;
};

// Game.prototype.score = function() {
//   for (var i = 0; i < 20; i++) {
//     this.currentScore += this.rolls[i];
//   };
//   return this.currentScore;
// };
