import React, { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Alert from './components/Alert';
import Title from './components/Title';

const App = () => {

  const [formInput, setFormInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [alert, setAlert] = useState({status: false, message: "", type: ""});
  const [isEditing, setIsEditing] = useState({status:false, id:""});

  const submitHandler = (comingTodo) => {
    setTodoList([...todoList, comingTodo]);
    setAlert({ status:true, message:"Item Added", type:"success" });
  }

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((eachTodo) => {
      return eachTodo.id !== id;
    })
    setTodoList(newTodoList);
    setAlert({ status:true, message:"Item Deleted", type:"danger" });
    setIsEditing({ id:"", status:false});
    setFormInput("")
  }

  const updateTodo = (newTodo) => {
    const newTodoList = todoList.map((eachTodo) => {
      if(eachTodo.id === newTodo.id){
        eachTodo.message = newTodo.message
      }
      return eachTodo;
    })
    setTodoList(newTodoList);
    setIsEditing({ id:"", status:false});
    setAlert({ status:true, message:"Item Updated", type:"success" });
  }

  return (
    <>
      <main>
        <Title />
        {
          alert.status && <Alert setAlert={setAlert} message={alert.message} type={alert.type}/>
        }
        <Form formInput={formInput} setFormInput={setFormInput} submitHandler={submitHandler} isEditing={isEditing} updateTodo={updateTodo} setAlert={setAlert}/>
        <TodoList todoList={todoList} deleteTodo={deleteTodo} updateTodo={updateTodo} setIsEditing={setIsEditing} setFormInput={setFormInput}/>
      </main>
    </>
  );
}

export default App;