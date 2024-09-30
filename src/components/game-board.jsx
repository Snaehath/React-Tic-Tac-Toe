import { useState } from "react";

export default function GameBoard({ onSelectSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(initialBoard);

  // function handleSelect(rowIdx, colIdx) {
  //   setGameBoard((pervBoard) => {
  //     let updatedBoard = [...pervBoard.map((ele) => [...ele])];
  //     updatedBoard[rowIdx][colIdx] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // }
  return (
    <ol id="game-board">
      {board.map((row, idx) => (
        <li key={idx}>
          <ol>
            {row.map((playerButton, buttonIdx) => (
              <li key={buttonIdx}>
                <button
                  onClick={() => onSelectSquare(idx, buttonIdx)}
                  disabled={playerButton !== null}
                >
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
