'use strict'

;(function(exports) {
  function Grid() {
    this.spaces = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3]
    ]
  }

  Grid.prototype.isSpaceUsed = function(currentPlayer, rowIndex, arrayIndex) {
    if (typeof this.spaces[rowIndex][arrayIndex] === 'string') {
      throw new Error("This space has already been taken.")
    } else {
      this.enterValue(currentPlayer, rowIndex, arrayIndex)
    }
  }

  Grid.prototype.enterValue = function (currentPlayer, rowIndex, arrayIndex) {
    var currentPlayer = currentPlayer
    var selectedRow = this.spaces[rowIndex]
    selectedRow.splice(arrayIndex, 1, currentPlayer.value)
  };

  exports.Grid = Grid
})(this)
