import React , {useState}from 'react';
import CreateTask from '../modals/createTask';

const TaskList = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


  return (
    <>
      <div className='header text-center'>
        <h3>Task Manager</h3>
        <button className='btn btn-primary mt-2 btn-animated btn-shadow shadow'>Create Task</button>
      </div>
      <div className='task-container'></div>
      <CreateTask toggle={toggle} modal={modal}/>
    </>
  );
};

export default TaskList;