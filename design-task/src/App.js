import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TaskList from './components/TaskList';

function App() {
  return (
    <div className="Task Manager">
      <TaskList />
    </div>
  );
}

export default App;