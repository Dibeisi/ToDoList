import React, { useState } from 'react';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (!newTask) {
      alert('ADD TASK!');
      return;
    }
    const task = {
      id: Math.floor(Math.random() * 1000),
      value: newTask,
    };
    setTasks((oldList) => [...oldList, task]);
    setNewTask('');
  }

  function deleteTask(id) {
    const newArray = tasks.filter((task) => task.id !== id);
    setTasks(newArray);
  }

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Todo List App</h1>
      {/* 2. Input and button  */}
      <input
        type="text"
        placeholder="Add task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="input-button" onClick={() => addTask()}>
        Add
      </button>
      {/* 3. List Tasks */}
      <ul>
        {tasks.map((task) => {
          return (
            <li key={tasks.id}>
              {task.value}
              <button
                className="button-delete"
                onClick={() => deleteTask(task.id)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
