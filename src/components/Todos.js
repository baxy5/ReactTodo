import styles from "../styles/Todos.module.css";

const Todos = ({ todos, deleteTodo }) => {
  const validTodos = todos.filter((todo) => todo.id != 0);

  return (
    <div>
      {validTodos.map((todo) => (
        <div key={todo.id} className={styles.container}>
          <span className={styles.p}>{todo.todo}</span>
          <button className={styles.delete} onClick={() => deleteTodo(todo.id)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
