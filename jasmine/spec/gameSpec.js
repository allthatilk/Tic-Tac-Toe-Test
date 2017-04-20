describe("Naughts and Crosses Game", function() {
  var game = new Game()

  describe("has 2 players", function() {

    it("that can enter Xs", function() {
      game.enterX(1, 1)
      expect(game.grid[1][1]).toEqual("X")
    })
    it("that can enter Os", function() {
      game.enterO(0, 0)
      expect(game.grid[0][0]).toEqual("O")
    })
  })
})
