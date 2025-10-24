import React from 'react';
import './QuickActions.css';

const QuickActions = () => {
  const actions = [
    {
      id: 1,
      title: 'New Project',
      description: 'Create a new project',
      icon: '📁',
      color: '#3b82f6',
      action: () => console.log('New project clicked')
    },
    {
      id: 2,
      title: 'Add Task',
      description: 'Create a new task',
      icon: '✅',
      color: '#10b981',
      action: () => console.log('Add task clicked')
    },
    {
      id: 3,
      title: 'Invite Team',
      description: 'Invite team members',
      icon: '👥',
      color: '#f59e0b',
      action: () => console.log('Invite team clicked')
    },
    {
      id: 4,
      title: 'Schedule Meeting',
      description: 'Schedule a team meeting',
      icon: '📅',
      color: '#8b5cf6',
      action: () => console.log('Schedule meeting clicked')
    }
  ];

  return (
    <div className="quick-actions-card">
      <div className="quick-actions-header">
        <h3>Quick Actions</h3>
        <p>Get things done faster</p>
      </div>
      
      <div className="actions-grid">
        {actions.map((action, index) => (
          <button
            key={action.id}
            className="action-button"
            onClick={action.action}
            style={{ 
              '--action-color': action.color,
              animationDelay: `${index * 100}ms`
            }}
          >
            <div 
              className="action-icon"
              style={{ backgroundColor: action.color }}
            >
              {action.icon}
            </div>
            <div className="action-content">
              <div className="action-title">{action.title}</div>
              <div className="action-description">{action.description}</div>
            </div>
            <div className="action-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
