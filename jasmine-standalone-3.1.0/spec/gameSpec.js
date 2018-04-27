"use strict";

describe("Bowling Game", function () {

  var game;

  beforeEach(function () {
    game = new Game();
  });

  it("can roll and push to rolls array", function() {
    console.log(game.roll(3));
    console.log(game.roll(2));
    expect(game.framescore()).toEqual([3, 2]);
  });

  // it("can roll all gutter plays", function() {
  //   for(var i=0; i < 20; i++); {
  //     game.roll(0);
  //   }
  //
  //   expect(game.score()).toBe(0);
  // });
  //
  // it("can roll all ones", function() {
  //   for(var i=0; i < 20; i++); {
  //     game.roll(1);
  //   }
  //
  //   expect(game.score()).toBe(20);
  // });

});
