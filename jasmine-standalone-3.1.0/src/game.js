"use strict";

function Game() {
  this.rolls = [];
  this.MAX_ROLLS = 2;
  this.currentScore = 0;
};

Game.prototype.roll = function(pins) {
  if (this.rolls.length < this.MAX_ROLLS) {
    (this.rolls).push(pins);
  };
};

Game.prototype.framescore = function() {
  return this.rolls;
};

// Game.prototype.score = function() {
//   for (var i = 0; i < 20; i++) {
//     this.currentScore += this.rolls[i];
//   };
//   return this.currentScore;
// };
