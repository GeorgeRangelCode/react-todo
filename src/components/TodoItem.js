import React from "react";
import "./TodoItem.css";

export const TodoItem = props => {
  const onComplete = () => {
    console.log("onComplete");
  };

  const onDelete = () => {
    console.log("onDelete");
  };

  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={onComplete}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
  );
};
