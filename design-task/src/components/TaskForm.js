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

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      title: title,
      category: category,
      dueDate: dueDate,
      startTime: startTime,
      endTime: endTime,
      priority: priority,
      description: description
    });

    setInput('');
    setTitle('');
    setCategory('');
    setDueDate('');
    setStartTime('');
    setEndTime('');
    setPriority('');
    setDescription('');
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