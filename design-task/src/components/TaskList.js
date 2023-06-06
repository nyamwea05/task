import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }

    const newTasks = [task, ...tasks];
    setTasks(newTasks);
  };

  const completeTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const updateTask = (id, value) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, text: value };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list-container">
      <h1>What's The Game Plan Currently?</h1>
      <TaskForm onSubmit={addTask} />
      <Task
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    </div>
  );
}

export default TaskList;