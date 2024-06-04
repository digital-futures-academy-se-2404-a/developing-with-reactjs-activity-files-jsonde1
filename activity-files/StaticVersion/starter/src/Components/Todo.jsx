import React from "react";
import PropTypes from "prop-types";
import TodoModel from "./../Components/utils/Todo.model.js";

const Todo = ({ todo }) => {
  const dateCreated = new Date(todo.todoDateCreated);
  const completedClassName = todo.todoCompleted ? "completed" : "";
  let completed;
  if (todo.todoCompleted) completed = "N/A";
  else completed = <a href="/">Edit</a>;

  return (
    <tr>
      <th className={completedClassName}>{todo.todoDescription}</th>
      <th className={completedClassName}>{dateCreated.toUTCString()}</th>
      <th>{completed}</th>
    </tr>
  );
};

const propInstance = (Todo.propTypes = {
  todo: PropTypes.instanceOf(TodoModel),
});

export default Todo;
