import { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todoInput, setTodoInput] = useState<string>("");
  const [items, setItems] = useState<number>(0);

  const addTodo = (): void => {
    setTodos([...todos, todoInput]);
    setTodoInput("");
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
      <div>{items} items left</div>
    </>
  );
}

export default TodoList;
