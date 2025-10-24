import React from 'react';
import './Tasks.css';

const Tasks = () => {
  return (
    <div className="tasks-page">
      <div className="page-header">
        <h1>Tasks</h1>
        <button className="new-task-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          New Task
        </button>
      </div>
      <div className="tasks-content">
        <p>Task management interface coming soon...</p>
      </div>
    </div>
  );
};

export default Tasks;
