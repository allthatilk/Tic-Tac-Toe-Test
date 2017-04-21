describe("Grid", function() {

  describe("has grid spaces", function() {
    
    it("than can only be used once", function() {
      game.enterValue(0, 3)
      expect(function() {game.enterValue(0, 3)}).toThrow(
        new Error("This space has already been taken.")
      )
    })
  })
})
