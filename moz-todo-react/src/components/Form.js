import React, { useState } from 'react'

function Form(props) {
    const [name, setName] = useState('');
    
    // const [newName, setNewName] = useState("");
    
    function handleSubmit(e){
      e.preventDefault();
      props.addTask(name);
      setName("");
      // setNewName(false)
    }
    
    function handleChange(e){
      setName(e.target.value)
    }
    

    return (
    <>
    <form className="stack-small" onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name={name}
          autoComplete="off"
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    </>
  )
}

export default Form