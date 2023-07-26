import React from "react";

interface BoardButtonProps {
  onClick: () => void;
}

const BoardButton: React.FC<BoardButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Дошка</button>;
};

export default BoardButton;