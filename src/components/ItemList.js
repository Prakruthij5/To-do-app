import React from "react";

const ItemList = ({ todo, handleChange }) => (
  <div className="todo-list">
    <input
      // type="checkbox"
      className="todo-list"
      id={`customCheck1-${todo.slug}`}
      checked={todo.checked}
      onChange={() => handleChange(todo.slug)}
    />
    <label
      className="todo-list"
      htmlFor={`customCheck1-${todo.slug}`}
    >
      {todo.name}
    </label>
  </div>
);

export default ItemList;
