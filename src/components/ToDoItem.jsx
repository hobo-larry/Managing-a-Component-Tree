import React, { useState } from "react";

function ToDoItem(props) {
  return (
    <div>
      <li
        onClick={() => {
          props.isChecked(props.id);
        }}
        key={props.id}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
