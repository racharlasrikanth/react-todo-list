import React from 'react';

const Form = ({ formInput, setFormInput, submitHandler, isEditing, updateTodo, setAlert }) => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(!formInput){
            setAlert({status:true, type:"danger", message:"Please Enter a Value"});
            return;
        }
        submitHandler({
            id: new Date().getTime().toString(),
            message: formInput,
        })
        setFormInput("");
    }

    const updateCurrentTodo = (e) => {
        e.preventDefault();
        if(!formInput){
            setAlert({status:true, type:"danger", message:"Please Enter a Value"});
            return;
        }
        const newTodo = {
            id: isEditing.id,
            message: formInput,
        }
        updateTodo(newTodo);
        setFormInput("");
    }
    
  return <div className='form-container'>
      <form>
        <input type="text" value={formInput} onChange={(e) => setFormInput(e.target.value)}/>
        {
            isEditing.status 
            ? <button type="submit" onClick={updateCurrentTodo}>edit</button>
            : <button type="submit" onClick={handleFormSubmit}>submit</button>
        }
      </form>
  </div>;
}

export default Form;