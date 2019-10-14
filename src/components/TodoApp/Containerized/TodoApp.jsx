import React from "react";

const TodoApp = ({
  items,
  text,
  handleChange,
  handleSubmit,
}) => {
    return (
      <div className="ml-4">
        <h3>TODO</h3>

        <ul>
          {items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>

        <form onSubmit={handleSubmit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <input
            id="new-todo"
            onChange={handleChange}
            value={text}
            className="ml-2"
          />
          <button>Add #{items.length + 1}</button>
        </form>
      </div>
    );
  };

export default TodoApp;
