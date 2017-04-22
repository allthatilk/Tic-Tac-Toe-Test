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

  Grid.prototype.checkHorizontal = function(grid = this.spaces) {
    var grid = grid
    var check = false

    for (var i = 0; i < grid.length && !check; i++) {
      check = grid[i].every(function(value) {
        if (value === "X" || value === "O") {
          return true
        }
      })
    }
    return check
  }

  // Badly needs refactoring
  Grid.prototype.convertVertical = function() {
    var check = false
    var convertArrays = this.spaces[0].concat(this.spaces[1]).concat(this.spaces[2])
    var rowOne = []
    rowOne.push(convertArrays[0], convertArrays[3], convertArrays[6])
    var rowTwo = []
    rowTwo.push(convertArrays[1], convertArrays[4], convertArrays[7])
    var rowThree =[]
    rowThree.push(convertArrays[2], convertArrays[5], convertArrays[8])
    var converted = []
    converted.push(rowOne, rowTwo, rowThree)
    return converted
  }

  Grid.prototype.checkVertical = function() {
    var grid = this.convertVertical()
    console.log(grid)
    return this.checkHorizontal(grid)
  }

  Grid.prototype.checkDiagonal = function() {

  }

  exports.Grid = Grid
})(this)
