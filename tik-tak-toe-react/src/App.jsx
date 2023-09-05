import { useState } from "react";
import Button from "./Components/Button";
import Board from "./Components/Board";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  //const currentSquare = history[history.length - 1];

  const calculateWinner = (squares) => {
    // membaca baris untuk yang bersebelahan
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [0, 3, 6],
      [2, 4, 6],
      [2, 5, 8],
      [1, 4, 7],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
  };

  const handleSquare = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquare = squares.slice();

    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }

    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Pemenang adalah : ${winner}`;
  } else {
    status = `Pemain saat ini : ${xIsNext ? "X" : "O"}`;
  }

  const handleReset = () => {
    setSquares([null]);
    setXIsNext(true);
  };

  return (
    <div className="flex w-full text-center justify-center">
      <div className="w-1/2 text-center">
        <Board
          square={squares}
          handleSquare={handleSquare}
          status={status}
        ></Board>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <button
          className="border p-3 border rounded-md bg-blue-600 text-white"
          onClick={handleReset}
        >
          Ulangi Permainan
        </button>
      </div>
    </div>
  );
}

export default App;
