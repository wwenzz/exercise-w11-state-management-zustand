import { useTodoStore } from "../store/useTodoStore";
import { useState } from "react";

export const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const { todos, addTodo, deleteTodo, completeTodo } = useTodoStore();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(newTodo);
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTodo">Add your todo: </label>
        <input
          id="newTodo"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {todos.map(todo => (
        <div className="todo-list" key={todo.id}>
          <label className="todo-item">
            <input
              className="todo-task"
              value={todo.id}
              type="checkbox"
              onChange={e => completeTodo(e.target.value)}
            />
            {todo.task}
          </label>
          <span>Created at: {todo.createdAt.calendar()}</span>
          <button
            value={todo.id}
            type="button"
            onClick={e => deleteTodo(e.target.value)}
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
};
