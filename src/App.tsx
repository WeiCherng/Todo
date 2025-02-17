import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { TodoItem } from "./types/todo";

import "./App.css";

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // If todo state is updated, store the latest todo list
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addItem = (todo: TodoItem) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const removeItem = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <>
      <section className="container">
        <section className="column">
          <TodoForm add={addItem} />
        </section>
        <section className="column">
          <TodoList todoList={todos} remove={removeItem} />
        </section>
      </section>
    </>
  );
}

export default App;
