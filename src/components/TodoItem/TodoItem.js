import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content,id,deleteItem  } = props;

  const completed = (e) =>{
    e.target.classList.toggle("line-through");
  };

  return (
  <div className="d-flex justify-content-between align-items-center">
    <div onClick={completed} id="content">{content}</div>
    <button type="button" className="btn btn-outline-danger btn-sm" onClick={()=>deleteItem(id)}>Sil</button>
  </div>
  );
}

export default Todo;