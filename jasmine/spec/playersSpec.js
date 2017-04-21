describe("Players", function() {
  var player1 = new Player("X")
  var player2 = new Player("O")

  describe("to play the game", function() {

    it("must have a value", function() {
      var game = new Game()
      expect(game.player1.value).toEqual("X")
      expect(game.player2.value).toEqual("O")
    })
  })
})
