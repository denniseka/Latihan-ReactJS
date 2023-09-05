import { useState } from "react";
const Button = (props) => {
  const { value, onHandleSquareClick } = props;

  return (
    <button
      className="border w-24 h-24 text-5xl border-black font-semibold text-center"
      onClick={onHandleSquareClick}
    >
      {value}
    </button>
  );
};

export default Button;
