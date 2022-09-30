import React from "react";
import "./CreateTodoButton.css";

export const CreateTodoButton = () => {
  const onClickButton = () => {
    console.log("onClickButton");
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
};
