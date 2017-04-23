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
        if (value === "X") {
          return true
        }
      })
       if (!check) {check = grid[i].every(function(value) {
        if (value === "O") {
          return true
        }
      })}
    }
    return check
  }

  Grid.prototype.flattenGrid = function() {
    var flatGrid = [].concat.apply([], this.spaces)
    return flatGrid
  }

  // Badly needs refactoring
  Grid.prototype.convertVertical = function() {
    var converted = this.spaces.map(function(value, index, array) {
      var convertArray = []
      
      for (var i = 0; i < array.length; i++) {
        convertArray.push(array[i][index])
      }
      return convertArray
    })
    return converted
  }

  Grid.prototype.checkVertical = function() {
    var grid = this.convertVertical()
    return this.checkHorizontal(grid)
  }

  Grid.prototype.convertDiagonal = function() {
    var spaces = this.spaces
    var converted = [[], []]

    for (var i = 0; i < spaces.length; i++) {
      converted[0].push(spaces[i][i])
      converted[1].push(spaces[i][spaces.length - 1 - i])
    }
    return converted
  }

  Grid.prototype.checkDiagonal = function() {
    var grid = this.convertDiagonal()
    return this.checkHorizontal(grid)
  }

  exports.Grid = Grid
})(this)
