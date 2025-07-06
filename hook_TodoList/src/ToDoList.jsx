import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ToDoList = () => {
  const [task , setTask] = useState('');
  const [tasks , setTasks] = useState([]);

  useEffect( () => {
    const savedTasks = JSON.parse(localStorage.getItem('todoTasks'));
    if(savedTasks){
          setTasks(savedTasks);
    }
  },[])


  useEffect( () => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
  },[tasks])

  const addTask = () => {
    if(task.trim() === '') return;
    setTasks([...tasks,task]);
    setTask('');
  }

  const deleteTask = (index) => {
    const newTasks = tasks.filter( ( _ , i ) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div style={{padding: '30px', maxWidth: '500px', margin: 'auto', fontFamily: 'Arial'}}>

      <h1>📝 Todo List</h1>
      <div style={{display: 'flex', marginBottom: '15px'}}>
        <input 
        type="text"
        value={task}
        onChange={ (e) => setTask(e.target.value)}
        placeholder='Add a New Task...'
        style={{ flex: 1, padding: '10px', fontSize: '16px'}}
        />

        <button onClick={addTask} style={{ padding: '10px 15px', marginLeft: '10px', backgroundColor: 'blue', color: 'white' }}>Add</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.length === 0 ? (
          <p>No tasks yet 🚫</p>
        ) : (
          tasks.map( (item,index) => (
            <li key={index}
              style={{
                background: '#f4f4f4',
                marginBottom: '10px',
                padding: '10px',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
              >
              {item}

              <button onClick={() => {deleteTask(index)}} style={{ background: 'red', color: 'white', border: 'none' }}>Delete</button>
            </li>
          ))
        )

        }
      </ul>
    </div>
  )
}

export default ToDoList