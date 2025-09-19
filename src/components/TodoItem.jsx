function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  return (
    <li className="mb-10 d-flex flex-row justify-content-center align-items-center p-10">
      <span className="flex-fill mr-15">
        {todo.content} {todo.done && "(✓)"}{" "}
      </span>
      <button className="btn btn-primary mr-15" onClick={toggleTodo}>
        Valider
      </button>
      <button onClick={editTodo} className="btn btn-primary mr-15">
        Modifier
      </button>
      <button onClick={deleteTodo} className="btn btn-reverse-primary mr-15">
        Supprimer
      </button>
    </li>
  );
}
export default TodoItem;
