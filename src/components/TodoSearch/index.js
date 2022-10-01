import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoSearch.css";

export const TodoSearch = () => {
  const { setSearchValue, searchValue } = useContext(TodoContext);

  const onSearch = event => {
    setSearchValue(event.target.value);
  };

  return <input className="TodoSearch" type="search" placeholder="Search..." onChange={onSearch} value={searchValue} />;
};
