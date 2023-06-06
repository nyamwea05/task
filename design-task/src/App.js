import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TaskList from './components/TaskList';

function App() {
  return (
    <div className="Task Manager">
        <div className="emoji-decoration">(　-_･) ︻デ═一 ▸</div>
      <TaskList />
    </div>
  );
}

export default App;