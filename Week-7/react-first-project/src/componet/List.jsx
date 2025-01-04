import React from "react";
import { useState } from "react";
import "../componet/List.css";

function List() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((remove, i) => i !== index));
  };
  return (
    <div className="maintodo">
      <section>
        <h1>To-Do List</h1>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a task"
        />
        <button onClick={addTask}>Add</button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => removeTask(index)} id="todormv">Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
export default List;
