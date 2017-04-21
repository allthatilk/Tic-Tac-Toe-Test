'use strict'

;(function(exports) {
  function Game() {
    this.grid = new Grid()
    this.player1 = new Player("X")
    this.player2 = new Player("O")
    this.currentPlayer = this.player1
  }

  Game.prototype.switchTurn = function() {
    if (this.currentPlayer != this.player1) {
      this.currentPlayer = this.player1
    } else {
      this.currentPlayer = this.player2
    }
  }

  Game.prototype.enterValue = function(rowIndex, arrayIndex) {
      this.grid.isSpaceUsed(this.currentPlayer, rowIndex, arrayIndex)
      this.switchTurn()
  }

  exports.Game = Game
})(this)
