import React, { useState, useEffect, useRef } from 'react';



function TaskForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = e => {
    setCategory(e.target.value);
  };

  const handleDueDateChange = e => {
    setDueDate(e.target.value);
  };

  const handleStartTimeChange = e => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = e => {
    setEndTime(e.target.value);
  };

  const handlePriorityChange = e => {
    setPriority(e.target.value);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make an API call to add the new task to the database
      const response = await fetch('http://localhost:9292/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: input,
          title,
          category,
          dueDate,
          startTime,
          endTime,
          priority,
          description
        }),
      });
      if (response.ok) {
        const data = await response.json();
        // Call the onSubmit function and pass the response data
        props.onSubmit(data);
        // Reset the form fields
        setInput('');
        setTitle('');
        setCategory('');
        setDueDate('');
        setStartTime('');
        setEndTime('');
        setPriority('');
        setDescription('');
      } else {
        throw new Error('Error adding task');
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="task-input edit"
          />
          <button onClick={handleSubmit} className="task-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="craft task"
            value={input}
            onChange={handleChange}
            name="text"
            className="task-input"
            ref={inputRef}
          />
          <input
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            name="title"
            className="task-input"
          />
          <input
            placeholder="Category"
            value={category}
            onChange={handleCategoryChange}
            name="category"
            className="task-input"
          />
          <div className="datetime-container">
            <input
              type="date"
              value={dueDate}
              onChange={handleDueDateChange}
              name="dueDate"
              className="task-input"
            />
            <input
              type="time"
              value={startTime}
              onChange={handleStartTimeChange}
              name="startTime"
              className="task-input"
            />
            <input
              type="time"
              value={endTime}
              onChange={handleEndTimeChange}
              name="endTime"
              className="task-input"
            />
          </div>
          <select
            value={priority}
            onChange={handlePriorityChange}
            name="priority"
            className="task-input"
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <textarea
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
            name="description"
            className="task-input"
          ></textarea>
          <button type="submit" className="task-button">
            Add Task
          </button>
        </>
      )}
    </form>
  );
}

export default TaskForm;