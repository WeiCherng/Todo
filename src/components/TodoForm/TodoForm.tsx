import { FC, FormEvent, useState } from "react";
import { ActivityType, TodoItem } from "../../types/todo";

import "./TodoForm.css";

interface TodoFormProps {
  add: (todo: TodoItem) => void;
}

const TodoForm: FC<TodoFormProps> = ({ add }) => {
  const [activity, setActivity] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState<ActivityType>(ActivityType.EDUCATION);
  const [bookingRequired, setBookingRequired] = useState(false);
  const [accessibility, setAccessibility] = useState(0.5);

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    const newTodo: TodoItem = {
      activity,
      price,
      type,
      bookingRequired,
      accessibility,
    };

    add(newTodo);

    // Reset Form
    setActivity("");
    setPrice(0);
    setType(ActivityType.EDUCATION);
    setBookingRequired(false);
    setAccessibility(0.5);
  };

  return (
    <>
      <form id="todoForm" onSubmit={handleAdd}>
        <section className="inputCont">
          <label className="formLabel">Activity</label>
          <input
            className="formInput"
            type="string"
            placeholder="Working Out"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            required
          />
        </section>

        <section className="inputCont">
          <label className="formLabel">Price</label>
          <input
            className="formInput"
            type="number"
            placeholder="RM"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </section>

        <section className="inputCont">
          <label className="formLabel">Type of Activity</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as ActivityType)}
          >
            {[
              "education",
              "recreational",
              "social",
              "diy",
              "charity",
              "cooking",
              "relaxation",
              "music",
              "busywork",
            ].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </section>

        <section
          className="inputCont"
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <label className="formLabel">Booking Required ?</label>
          <input
            style={{ marginLeft: "12px" }}
            type="checkbox"
            checked={bookingRequired}
            onChange={(e) => setBookingRequired(e.target.checked)}
          />
        </section>

        <section className="inputCont">
          <label className="formLabel">Accessibility: {accessibility}</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={accessibility}
            onChange={(e) => setAccessibility(Number(e.target.value))}
          />
        </section>

        <button id="submitBtn" type="submit">
          Add to List
        </button>
      </form>
    </>
  );
};

export default TodoForm;
