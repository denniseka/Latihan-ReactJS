import { useState } from "react";
import Button from "./Button";

const Board = (props) => {
  const { handleSquare, square, status } = props;
  return (
    <div className="flex items-center justify-center flex-col h-screen gap-1">
      <div className="status font-semibold">{status}</div>
      <div className="flex gap-1">
        <Button
          value={square[0]}
          onHandleSquareClick={() => handleSquare(0)}
        ></Button>
        <Button
          value={square[1]}
          onHandleSquareClick={() => handleSquare(1)}
        ></Button>
        <Button
          value={square[2]}
          onHandleSquareClick={() => handleSquare(2)}
        ></Button>
      </div>
      <div className="flex gap-1">
        <Button
          value={square[3]}
          onHandleSquareClick={() => handleSquare(3)}
        ></Button>
        <Button
          value={square[4]}
          onHandleSquareClick={() => handleSquare(4)}
        ></Button>
        <Button
          value={square[5]}
          onHandleSquareClick={() => handleSquare(5)}
        ></Button>
      </div>
      <div className="flex gap-1">
        <Button
          value={square[6]}
          onHandleSquareClick={() => handleSquare(6)}
        ></Button>
        <Button
          value={square[7]}
          onHandleSquareClick={() => handleSquare(7)}
        ></Button>
        <Button
          value={square[8]}
          onHandleSquareClick={() => handleSquare(8)}
        ></Button>
      </div>
    </div>
  );
};

export default Board;
