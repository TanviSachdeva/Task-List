import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const initialTodos: Todo[] = [
  {
    text: "Bring vegtables",
    complete: false,
  },
  {
    text: "Drink 1 litre water",
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo: Todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo}/>
    </>
  );
}

export default App;
