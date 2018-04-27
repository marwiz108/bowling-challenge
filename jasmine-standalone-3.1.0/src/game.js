"use strict";

function Game() {
  this.rolls = [];
  this.currentScore = 0;
};

Game.prototype.roll = function(pins) {
  console.log(this.rolls);
  (this.rolls).push(pins);
  console.log(this.rolls);
};

Game.prototype.framescore = function() {
  return this.rolls;
};

Game.prototype.score = function() {

};
