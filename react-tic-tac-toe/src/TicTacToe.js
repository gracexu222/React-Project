import React from "react";
import Board from "./components/Board";

// Main TicTacToe component to display the game title and the board
function TicTacToe() {
  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
}

export default TicTacToe;
