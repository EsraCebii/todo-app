import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList({todos, deleteItem}) {
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}className="list-group-item">
              <TodoItem {...todo}  deleteItem={deleteItem}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
