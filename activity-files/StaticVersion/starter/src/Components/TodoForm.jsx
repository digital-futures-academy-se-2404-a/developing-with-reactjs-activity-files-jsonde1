import React from "react";
import DateCreated from "./utils/DateCreated";

const TodoForm = () => {
  return (
    <form aria-label="form">
      <div className="form-group">
        <label htmlFor="todoDescription">Description:&nbsp;</label>
        <input
          type="text"
          className="form-control"
          placeholder="Todo Description"
          name="todoDescription"
        />
      </div>
      <div className="form-group">
        <label htmlFor="todoDateCreated">
          Created On:&nbsp;
          <span>
            <DateCreated />
          </span>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="todoCompleted">Completed:&nbsp;</label>
        <input type="checkbox" name="todoCompleted" />
      </div>
      <div className="form-group">
        <button value="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
