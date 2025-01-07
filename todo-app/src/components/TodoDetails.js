import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";

function TodoDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { todos, deleteTodo, updateTodo } = useContext(TodoContext);

  const todo = todos.find((t) => t.id === parseInt(id));

  if (!todo) return <p>Todo not found</p>;

  const handleDelete = () => {
    deleteTodo(todo.id);
    navigate("/");
  };

  const handleToggle = () => {
    updateTodo({ ...todo, completed: !todo.completed });
  };

  return (
    <div>
      <h1>Todo Details</h1>
      <p>Task: {todo.task}</p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p>Date: {todo.date}</p>
      <p>Description: {todo.description}</p>
      <button onClick={handleToggle}>
        Mark as {todo.completed ? "Pending" : "Completed"}
      </button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => navigate("/")}>Back to Main</button>
    </div>
  );
}

export default TodoDetails;
