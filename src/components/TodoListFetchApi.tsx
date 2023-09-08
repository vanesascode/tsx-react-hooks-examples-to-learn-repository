import { useState, useEffect } from "react";

interface Todo {
  id: number;
  label: string;
  done: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoInput, setTodoInput] = useState<string>("");
  const [items, setItems] = useState<number>(0);

  const username: string = "vanesa_juarez";
  const url: string = `https://playground.4geeks.com/apis/fake/todos/user/${username}`;
  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([]),
  };

  const fetchTodos = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data: Todo[]) => {
        setTodos(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = () => {
    if (todoInput.trim() !== "") {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          ...todos,
          { id: Date.now(), label: todoInput, done: false },
        ]),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result === "ok") {
            fetchTodos();
            setTodoInput("");
          } else {
            console.log("Failed to create new todo");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const deleteTodo = (index: number) => {
    const todoId = todos[index].id;
    fetch(`${url}/${todoId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "ok") {
          fetchTodos();
        } else {
          console.log("Failed to delete todo");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    const itemsLeft = todos.length;
    setItems(itemsLeft);
  }, [todos]);

  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-4">
        <div className="layer1 d-flex justify-content-start flex-column border-0 shadow z-3">
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
            className="border-0 px-5 py-3 input fs-2"
          />
          {todos.map((todo, index) => (
            <div
              key={index}
              className="bg-white item-box border-top w-full px-5 py-3 d-flex justify-content-between fs-2"
              onClick={() => deleteTodo(index)}
            >
              <div className="me-5">{todo.label}</div>
              <div>
                <button>X</button>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-end border-top bg-white">
            <div className="py-2 px-5 fs-5 bg-white">
              {items} {items === 1 ? "item" : "items"} left
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
