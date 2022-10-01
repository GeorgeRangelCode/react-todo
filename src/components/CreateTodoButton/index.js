import React from "react";
import "./CreateTodoButton.css";

export const CreateTodoButton = ({ setOpenModal }) => {
  const onClickButton = () => {
    setOpenModal(true);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
};
