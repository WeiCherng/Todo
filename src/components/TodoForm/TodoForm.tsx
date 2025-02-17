import { FC } from "react";
import "./TodoForm.css";

const TodoForm: FC = () => {
  return (
    <>
      <form id="todoForm">
        <section className="inputCont">
          <label className="formLabel">Activity</label>
          <input
            className="formInput"
            type="string"
            placeholder="Working Out"
          />
        </section>

        <section className="inputCont">
          <label className="formLabel">Price</label>
          <input className="formInput" type="number" placeholder="RM" />
        </section>
        
        <section className="inputCont">
          <label className="formLabel">Type of Activity</label>
          <select>
            <option value="education">Education</option>
            <option value="recreational">Recreational</option>
            <option value="social">Social</option>
            <option value="diy">DIY</option>
            <option value="charity">Charity</option>
            <option value="cooking">Cooking</option>
            <option value="relaxation">Relaxation</option>
            <option value="music">Music</option>
            <option value="busywork">Busywork</option>
          </select>
        </section>

        <section className="inputCont">
          <label className="formLabel">Booking Required?</label>
          <input type="checkbox" />
        </section>

        <section className="inputCont">
          <label className="formLabel">Booking Required?</label>
          <input type="range" min="0" max="1" step="0.1" />
        </section>

        <button id="submitBtn" type="submit">
          Add to List
        </button>
      </form>
    </>
  );
};

export default TodoForm;
