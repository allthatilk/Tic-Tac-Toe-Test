# Naughts and Crosses Tech Test

## Specification
* Build the game logic for naughts and crosses (tic tac toe)
* Follow the rules of the game:
	*  There are two players in the game (X and O)
	* Players take turns until the game is over
	* A player can claim a field if it is not already taken
	* A turn ends when a player claims a field
	* A player wins if they claim all the fields in a row, column or diagonal
	* A game is over if a player wins
	* A game is over when all fields are taken
* Make it suitable for any user interface

## User Stories
```
As a player,
So I can play a game of tic tac toe,
I want to be able to enter an X or O to a 3x3 grid.
```
```
As a player,
So that I can play with a friend,
I want the game to require 2 players.
```
```
As a player,
So that I can play with a friend,
I want the game to organise whose turn it is.
```
```
As a player,
So that I can play a fair game,
I want the game to only allow players to use unclaimed grid spaces.
```
```
As a player,
So I know when the game is over,
I want the game to announce a win or draw according to the rules.
```
```
As a player,
So I know when the game is over,
I want to game to stop when all spaces are taken.
```

## Technologies

* Javascript
* Jasmine

## Improvements to make
I'm still not that happy with this but it's tested and working which is the main thing. Here's what I'd like to do if I get time later:

* Add a function that announces it's a draw when all spaces are taken

* Refactor the checking functions some more if possible to condense them a bit

* Remove all responsibility for checking the grid from the grid, but I'm not sure at the moment what should have the responsibility for checking the grid. Maybe a Rules class? And if the grid has no responsibilities does it really need to be a separate class? Decisions for future Imogen...
