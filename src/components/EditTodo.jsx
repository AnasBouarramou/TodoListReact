import { useState } from "react";

function EditTodo({ todo, editTodo, cancelEditTodo }) {
  const [value, setValue] = useState(todo.content);
  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleClick() {
    if (value.length) {
      editTodo(value);
      setValue("");
    }
  }

  function handleKeyDown(e) {
    if (e.code === "Enter" && value.length) {
      handleClick();
    }
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center mb-10">
      <input
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Ajouter une todo"
        className="mr-15 flex-fill"
      />
      <button
        onClick={cancelEditTodo}
        className="btn btn-reverse-primary mr-15"
      >
        Annuler
      </button>
      <button onClick={handleClick} className="btn btn-primary">
        Sauvegarder
      </button>
    </div>
  );
}
export default EditTodo;
