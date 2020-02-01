import React from "react";

export const TasksList = ({ tasks, onChange }) => (
  <ul>
    {tasks.map(task => (
      <li key={task._id}>
        <input id={task._id} onClick={() => onChange(task._id)} type="checkbox" checked={task.status} />
        {task.name}
        <button> > </button>
      </li>
    ))}

		{/*<button onClick={() => onSaveChange()}>Save change</button>*/}
  </ul>
);
