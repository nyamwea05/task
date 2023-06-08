import React, { useState } from 'react';
import TaskForm from './TaskForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Task = ({ tasks, completeTask, removeTask, updateTask }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const updateTaskItem = (id, value) => {
    updateTask(id, value);

    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TaskForm edit={edit} onSubmit={updateTaskItem} />;
  }

  return tasks.map((task) => (
    <div className={task.isComplete ? 'task-row complete' : 'task-row'} key={task.id}>
      <div onClick={() => completeTask(task.id)}>
        <h3>{task.text}</h3>
        <p>Title: {task.title}</p>
        <p>Category: {task.category}</p>
        <p>Due Date: {task.dueDate}</p>
        <p>Start Time: {task.startTime}</p>
        <p>End Time: {task.endTime}</p>
        <p>Priority: {task.priority}</p>
        <p>Description: {task.description}</p>
      </div>
      <div className='icons'>
        <RiCloseCircleLine onClick={() => removeTask(task.id)} className='delete-icon' />
        <TiEdit onClick={() => setEdit({ id: task.id, value: task.text })} className='edit-icon' />
      </div>
    </div>
  ));
};

export default Task;