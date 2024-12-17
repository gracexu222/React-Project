// Board.js
import React, { useState } from "react";
import Square from "./Square";

// Board component contains the entire tic-tac-toe board
function Board() {
  // State to track the current state of each square and which player's turn it is
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // Function to handle when a square is clicked
  function handleClick(index) {
    // If the square is already filled or there's a winner, return early
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    // Create a copy of the squares array and update the clicked square
    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  }

  // Function to render a single square
  function renderSquare(index) {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
  }

  // Determine if there is a winner and display the game status
  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? "X" : "O"}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

// Function to calculate if there is a winner by checking all possible winning combinations
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return the winner (X or O)
    }
  }
  return null; // Return null if there is no winner yet
}

export default Board;
