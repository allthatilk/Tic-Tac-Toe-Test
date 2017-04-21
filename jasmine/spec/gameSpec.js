describe("Naughts and Crosses Game", function() {

  beforeEach(function() {
     game = new Game()
  })

  describe("has players", function() {

    it("that can enter Xs", function() {
      game.enterValue(1, 1)
      expect(game.grid.spaces[1][1]).toEqual("X")
    })

    it("that can enter Os", function() {
      game.enterValue(1, 1)
      game.enterValue(0, 0)
      expect(game.grid.spaces[0][0]).toEqual("O")
    })

    it("that take turns to play", function() {
      game.enterValue(0, 2)
      expect(game.currentPlayer).toEqual(game.player2)
    })

    // it("that can win the game with a row", function() {
    //   game.enterValue(0, 0)
    //   game.enterValue(1, 0)
    //   game.enterValue(0, 1)
    //   game.enterValue(2, 2)
    //   expect(game.enterValue(0, 2)).toEqual("Player 1 wins!")
    // })
  })
})
