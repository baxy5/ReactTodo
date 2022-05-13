import { useRef, useState } from "react";
import Todos from "./Todos";
import styles from "../styles/TodosInput.module.css";

const TodosInput = () => {
  let todo = useRef("");
  const [todos, setTodos] = useState([{ id: 0, todo: "dummy" }]);

  function addTodo(e) {
    const newTodos = [
      ...todos,
      {
        id: todos[todos.length - 1].id + 1,
        todo: todo.current.value,
      },
    ];

    setTodos(newTodos);
    document.getElementById("todo-input").value = "";

    e.preventDefault();
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  }

  return (
    <div>
      <form onSubmit={addTodo} className={styles.form}>
        <input
          ref={todo}
          id="todo-input"
          type="text"
          placeholder="What's your today's task?"
          className={styles.input}
        />
        <input type="submit" value="Add" className={styles.submit} />
      </form>
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodosInput;
