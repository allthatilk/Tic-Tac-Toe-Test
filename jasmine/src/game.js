'use strict'

;(function(exports) {
  function Game() {
    this.grid = new Grid()
    this.player1 = new Player("Player1", "X")
    this.player2 = new Player("Player2", "O")
    this.currentPlayer = this.player1
  }

  Game.prototype.switchTurn = function() {
    if (this.currentPlayer != this.player1) {
      this.currentPlayer = this.player1
    } else {
      this.currentPlayer = this.player2
    }
  }

  Game.prototype.enterValue = function(rowIndex, columnIndex) {
      this.grid.isSpaceUsed(this.currentPlayer, rowIndex, columnIndex)
      return this.isThereAWinner() ? this.printWinner() : this.switchTurn()
  }

  Game.prototype.printWinner = function() {
    return this.currentPlayer.name + " wins!"
  }

  Game.prototype.isThereAWinner = function() {
    var grid = this.grid
    var player = this.currentPlayer
    if (grid.checkHorizontal(grid.spaces, player) || grid.checkVertical(player) || grid.checkDiagonal(player)) {
      return true
    }
  }

  exports.Game = Game
})(this)
