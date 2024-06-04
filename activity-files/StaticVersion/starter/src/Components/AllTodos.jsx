import React from "react";
import "./../Components/css/AllTodos.css";
import sampleTodos from "./../sampleTodos.json";
import Todo from "./Todo.jsx";
import TodoModel from "./../Components/utils/Todo.model.js";

const AllTodos = () => {
  const todos = sampleTodos.map((currentTodo) => {
    const newTodo = new TodoModel(
      currentTodo.todoDescription,
      currentTodo.todoDateCreated,
      currentTodo.todoCompleted,
      currentTodo._id
    );
    return <Todo todo={newTodo} key={newTodo._id} />;
  });
  return (
    <div className="row">
      <h3>Todo List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Date Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{todos}</tbody>
      </table>
    </div>
  );
};

export default AllTodos;
