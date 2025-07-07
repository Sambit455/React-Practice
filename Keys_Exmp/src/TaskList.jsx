import React from 'react'

const tasks = [
  { id: 't1', title: 'Buy milk' },
  { id: 't2', title: 'Wash car' },
  { id: 't3', title: 'Pay bills' }
];

function TaskList() {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}

export default TaskList