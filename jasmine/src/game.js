'use strict'

;(function(exports) {
  function Game() {
    this.grid = [
      ["1", "2", "3"],
      ["1", "2", "3"],
      ["1", "2", "3"]
    ]
  }

  Game.prototype.enterX = function(gridIndex, arrayIndex) {
    this.enterValue("X", gridIndex, arrayIndex)
  }

  Game.prototype.enterO = function(gridIndex, arrayIndex) {
    this.enterValue("O", gridIndex, arrayIndex)
  }

  Game.prototype.enterValue = function(string, gridIndex, arrayIndex) {
    var selectedRow = this.grid[gridIndex]
    var positionOfValue = selectedRow.splice(arrayIndex, 1, string)
    return positionOfValue
  }

  exports.Game = Game
})(this)
