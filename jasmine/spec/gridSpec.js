describe("Grid", function() {
  beforeEach(function() {
    game = new Game()
  })

  afterEach(function() {
    game = new Game()
  })
  describe("has grid spaces", function() {

    it("than can only be used once", function() {
      game.enterValue(0, 2)
      expect(function() {game.enterValue(0, 2)}).toThrow(
        new Error("This space has already been taken.")
      )
    })
  })
})
