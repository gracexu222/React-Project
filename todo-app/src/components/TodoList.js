import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";

function TodoList() {
  const { todos, addTodo } = useContext(TodoContext);

  const handleAdd = () => {
    const newTodo = {
      id: todos.length + 1,
      task: "New Task",
      completed: false,
      date: new Date().toISOString().split("T")[0],
      description: "New todo description",
    };
    addTodo(newTodo);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={handleAdd}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>
              {todo.task} - {todo.completed ? "Completed" : "Pending"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
