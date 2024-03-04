import { useState } from "react";

let initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialBoard);

  function handleSelect(rowIdx, colIdx) {
    setGameBoard((pervBoard) => {
      let updatedBoard = [...pervBoard.map((ele) => [...ele])];
      updatedBoard[rowIdx][colIdx] = activePlayerSymbol;
      return updatedBoard;
    });
    onSelectSquare();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, idx) => (
        <li key={idx}>
          <ol>
            {row.map((playerButton, buttonIdx) => (
              <li key={buttonIdx}>
                <button onClick={() => handleSelect(idx, buttonIdx)}>
                  {playerButton}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
