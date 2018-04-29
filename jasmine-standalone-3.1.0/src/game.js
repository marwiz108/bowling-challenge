"use strict";

function Game() {
  this.rolls = [];
  this.currentScore = 0;
};

Game.prototype.roll = function(pins) {
  (this.rolls).push(pins);
};

Game.prototype.framescore = function() {
  return this.rolls;
};

Game.prototype.score = function() {
  for (var i = 0; i < 20; i++) {
    this.currentScore += this.rolls[i];
  };
  return this.currentScore;
};
