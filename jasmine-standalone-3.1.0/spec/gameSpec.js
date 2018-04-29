"use strict";

describe("Bowling Game", function () {

  var game;

  beforeEach(function () {
    game = new Game();
  });

  describe("rolls", function() {
    it("can roll and store the pins in a frame", function() {
      game.roll(3);
      game.roll(2);
      expect(game.frame).toEqual([3, 2]);
    });

    it("resets the frame after 2 rolls", function() {
      game.roll(1);
      game.roll(3);
      game.resetFrame();
      expect(game.frame.length).toEqual(0);
    });

    it("does not allow more than 2 rolls per frame", function() {
      game.roll(3);
      game.roll(4);
      game.roll(1);
      expect(game.frame.length).toEqual(1);
    });
  });

  it("calculates score for the current frame", function() {
    game.roll(3);
    game.roll(4);
    expect(game.framescore()).toEqual(7);
  });

  it("can store each framescore in the match array", function() {
    game.roll(3);
    game.roll(4);
    game.roll(5);
    game.roll(1);
    game.roll(8);
    expect(game.match).toEqual([7, 6]);
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
