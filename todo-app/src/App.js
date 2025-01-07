import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import TodoDetails from "./components/TodoDetails";

function App() {
  return (
    <TodoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todos/:id" element={<TodoDetails />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export default App;
