import React, { useEffect, useRef, useState } from 'react';

function TaskForm(props) {
  const [input, setInput] = useState( props.edit? props.edit.value : '' );
 
  const inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit= e=> {
    e.preventDefault();//prevents resetting
    //props
    props.onSubmit({
        id: Math.floor(Math.random() * 10000) ,
        text:input
  });

  setInput('');
  };
 
  return (
    <form classname="task-form" onSubmit={handleSubmit}>
      {props.edit ? ( 
        <>
        <input
        type='text'
        placeholder='update task'
        value={input}
        name='text'
        className='task-input edit'
        onChange={handleChange}
        ref={inputRef}
      />
      <button className='task-button'>update</button>
    </>
      ):
    
      ( <>
        <input
        type='text'
        placeholder='add a task'
        value={input}
        name='text'
        className='task-input'
        onChange={handleChange}
        ref={inputRef}
      />
      <button className='task-button'>add task</button>)
        </>
      )}   
    </form>
  );
}

export default TaskForm;
