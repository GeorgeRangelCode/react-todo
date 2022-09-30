import React from "react";
import "./TodoSearch.css";

export const TodoSearch = ({ searchValue, setSearchValue }) => {
  const onSearch = event => {
    console.log("onSearch", event.target.value);
    setSearchValue(event.target.value);
  };

  return <input className="TodoSearch" type="search" placeholder="Search..." onChange={onSearch} value={searchValue} />;
};
