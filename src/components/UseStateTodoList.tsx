import { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todoInput, setTodoInput] = useState<string>("");
  const [items, setItems] = useState<number>(0);

  const addTodo = (): void => {
    if (todoInput.trim() !== "") {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  useEffect(() => {
    const itemsLeft = todos.length;
    setItems(itemsLeft);
  }, [todos]);

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
      <div>
        {items} {items === 1 ? "item" : "items"} left
      </div>
    </>
  );
}

export default TodoList;

//The  trim()  function is a built-in JavaScript method that removes whitespace (spaces, tabs, and newlines) from both the beginning and end of a string. It returns a new string with the leading and trailing whitespace removed.
