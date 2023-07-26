import React from "react";

interface RoundwoodButtonProps {
  onClick: () => void;
}

const RoundwoodButton: React.FC<RoundwoodButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Кругляк</button>;
};

export default RoundwoodButton;