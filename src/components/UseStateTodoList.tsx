import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todoInput, setTodoInput] = useState<string>("");

  const addTodo = (): void => {
    setTodos([...todos, todoInput]);
    setTodoInput("");
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="What needs to be done?"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo();
          }
        }}
      />

      {todos.map((todo, index) => (
        <div key={index} onClick={() => deleteTodo(index)}>
          <div>{todo}</div>
          <div>
            <button>X</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoList;
