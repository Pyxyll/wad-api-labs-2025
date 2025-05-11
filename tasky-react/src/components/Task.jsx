// import React from 'react';

const Task = (props) => {
  return (
    <div
      className="card"
      style={{ backgroundColor: props.done ? "lightgrey" : "#5bb4c4" }}
    >
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p className="desc">{props.description}</p>
      <p className="priority"
        style={{
          backgroundColor:
            props.priority === "high"
              ? "red"
              : props.priority === "medium"
              ? "orange"
              : "green",
        }}
      >
        {props.priority}
      </p>
      <button onClick={props.markDone} className="doneButton">
        Done
      </button>
      <button className="deleteButton" onClick={props.deleteTask}>
        Delete
      </button>
    </div>
  );
};

export default Task;
