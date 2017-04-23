'use strict'

;(function(exports) {
  function Grid() {
    this.spaces = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3]
    ]
  }

  Grid.prototype.isSpaceUsed = function(currentPlayer, rowIndex, columnIndex) {
    if (typeof this.spaces[rowIndex][columnIndex] === 'string') {
      throw new Error("This space has already been taken.")
    } else {
      this.writeValue(currentPlayer, rowIndex, columnIndex)
    }
  }

  Grid.prototype.writeValue = function (currentPlayer, rowIndex, columnIndex) {
    var selectedRow = this.spaces[rowIndex]
    selectedRow.splice(columnIndex, 1, currentPlayer.value)
  };

  Grid.prototype.checkHorizontal = function(grid = this.spaces, currentPlayer) {
    var check = false

    for (var i = 0; i < grid.length && !check; i++) {
      check = grid[i].every(function(value) {
        return value === currentPlayer.value ? true : false
      })
    }
    return check
  }

  Grid.prototype.checkVertical = function(currentPlayer) {
    var converted = this.spaces.map(function(value, index, array) {
      var convertArray = []

      for (var i = 0; i < array.length; i++) {
        convertArray.push(array[i][index])
      }
      return convertArray
    })
    return this.checkHorizontal(converted, currentPlayer)
  }

  Grid.prototype.checkDiagonal = function(currentPlayer) {
    var spaces = this.spaces
    var converted = [[], []]

    for (var i = 0; i < spaces.length; i++) {
      converted[0].push(spaces[i][i])
      converted[1].push(spaces[i][spaces.length - 1 - i])
    }
    return this.checkHorizontal(converted, currentPlayer)
  }

  exports.Grid = Grid
})(this)
