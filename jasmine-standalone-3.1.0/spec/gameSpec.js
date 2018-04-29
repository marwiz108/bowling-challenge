"use strict";

describe("Bowling Game", function () {

  var game;

  beforeEach(function () {
    game = new Game();
  });

  it("can roll and store the pins in an array", function() {
    game.roll(3);
    game.roll(2);
    expect(game.framescore()).toEqual([3, 2]);
  });

  it("does not allow more than 2 rolls per frame", function() {
    game.roll(3);
    game.roll(4);
    game.roll(1);
    expect(game.framescore()).toEqual([3, 4]);
  });

  // it("can roll all gutter plays", function() {
  //   for(var i = 0; i < 20; i++) {
  //     game.roll(0);
  //   };
  //
  //   expect(game.score()).toBe(0);
  // });
  //
  // it("can roll all ones", function() {
  //   for(var i = 0; i < 20; i++) {
  //     game.roll(1);
  //   };
  //
  //   expect(game.score()).toBe(20);
  // });

  // it("has 2 rolls per frame", function() {
  //
  // });

});
