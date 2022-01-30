import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList, deleteTodo, updateTodo, setIsEditing, setFormInput }) => {
  return <div className='todolist-container'>
      {
          todoList.map((eachTodo) => {
              return <Todo key={eachTodo.id} {...eachTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} setIsEditing={setIsEditing} setFormInput={setFormInput}/>
          })
      }
  </div>;
}

export default TodoList;