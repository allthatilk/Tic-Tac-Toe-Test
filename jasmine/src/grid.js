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
      this.writeValue(currentPlayer, rowIndex, arrayIndex)
    }
  }

  Grid.prototype.writeValue = function (currentPlayer, rowIndex, arrayIndex) {
    var selectedRow = this.spaces[rowIndex]
    selectedRow.splice(arrayIndex, 1, currentPlayer.value)
  };

  Grid.prototype.checkHorizontal = function() {
    var check = false

    for (var i = 0; i < this.spaces.length && !check; i++) {
      check = this.spaces[i].every(function(value) {
        return value === "X"
      })
    }
    return check
  }

  Grid.prototype.checkVertical = function() {

  }

  Grid.prototype.checkDiagonal = function() {

  }

  exports.Grid = Grid
})(this)
