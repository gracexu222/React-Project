// Square.js
import React from "react";

// Square component represents an individual square on the board
function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
