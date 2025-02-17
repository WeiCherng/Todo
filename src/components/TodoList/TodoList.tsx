import { FC } from "react";
import { TodoItem } from "../../types/todo";
import "./TodoList.css";

interface TodoListProps {
  todoList: TodoItem[];
  remove: (index: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todoList, remove }) => {
  return (
    <>
      <section>
        <h2>Total Activities {todoList.length}</h2>
        {todoList.map((todo, idx) => (
          <div key={idx} className="card">
            <h3>{todo.activity}</h3>
            <p>RM {todo.price}</p>
            <p>{todo.type}</p>
            <p>
              {todo.bookingRequired
                ? "Booking Required"
                : "Booking NOT RFequired"}
            </p>
            <div className="btnCont">
              <button onClick={() => remove(idx)}>Delete</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default TodoList;
