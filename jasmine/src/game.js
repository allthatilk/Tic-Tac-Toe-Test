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

  Game.prototype.enterValue = function(rowIndex, arrayIndex) {
      this.grid.isSpaceUsed(this.currentPlayer, rowIndex, arrayIndex)
      return this.isThereAWinner() ?  this.printWinner() : this.switchTurn()
  }

  Game.prototype.printWinner = function() {
    return this.currentPlayer.name + " wins!"
  }

  Game.prototype.isThereAWinner = function() {
    return this.grid.checkHorizontal() ? true : false
    // this.grid.checkVertical()
    // this.grid.checkDiagonal()
  }

  exports.Game = Game
})(this)
