import React, { useContext } from 'react';
import Todoitem from './Todo-item';
import { todocontext } from '../store/store';

export default function Addtodo() {
  const { inputdata, todolist, addtodo, deletebtn, markDone } = useContext(todocontext);

  return (
    <section className="todo-container">
      <div className="add-section">
        <h3>Add Todo Item</h3>
        <div className="input-field">
          <input
            id="new-task"
            type="text"
            ref={inputdata}
            placeholder="Enter your task"
          />
          <button className="add_btn" onClick={addtodo}>Add</button>
        </div>
      </div>

      <Todoitem
        todolist={todolist}
        deletebtn={deletebtn}
        markDone={markDone}
      />
    </section>
  );
}
