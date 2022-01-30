import React from 'react';
import { FiEdit } from "react-icons/fi";
import { BsTrashFill } from "react-icons/bs";

const Todo = ({ id, message, setIsEditing, deleteTodo, setFormInput }) => {

    const sentUpdateCurrentTodo = (id, status, message) => {
        setIsEditing({id: id, status: true})
        setFormInput(message)
    }

    return <div className='todo' data-id={id}>
        <div className="message">{message}</div>
        <div className="button-container">
          <button className='edit-btn' onClick={() => sentUpdateCurrentTodo(id, true, message)}><FiEdit /></button>
          <button className='delete-btn' onClick={() => deleteTodo(id)}><BsTrashFill /></button>
        </div>
    </div>
}

export default Todo;