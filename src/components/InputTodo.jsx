import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

const InputTodo = ({ todoText, onChangeTodoText, onClickAdd, disabled }) => {
  return (
    <>
      <div style={style}>
        <input
          type="text"
          placeholder="todo"
          value={todoText}
          onChange={onChangeTodoText}
          disabled={disabled}
        />
        <button onClick={onClickAdd} disabled={disabled}>
          追加
        </button>
      </div>
    </>
  );
};

export { InputTodo };
