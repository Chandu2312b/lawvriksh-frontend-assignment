import React from 'react';
import './RecentActivity.css';

const RecentActivity = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'project':
        return '📁';
      case 'task':
        return '✅';
      case 'team':
        return '👥';
      case 'milestone':
        return '🎯';
      default:
        return '📝';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'project':
        return '#3b82f6';
      case 'task':
        return '#10b981';
      case 'team':
        return '#f59e0b';
      case 'milestone':
        return '#8b5cf6';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="activity-card">
      <div className="activity-header">
        <h3>Recent Activity</h3>
        <button className="view-all-btn">View All</button>
      </div>
      
      <div className="activity-list">
        {activities.map((activity, index) => (
          <div 
            key={activity.id} 
            className="activity-item"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div 
              className="activity-icon"
              style={{ backgroundColor: getActivityColor(activity.type) }}
            >
              {getActivityIcon(activity.type)}
            </div>
            
            <div className="activity-content">
              <div className="activity-title">{activity.title}</div>
              <div className="activity-meta">
                <span className="activity-user">{activity.user}</span>
                <span className="activity-time">{activity.time}</span>
              </div>
            </div>
            
            <div className="activity-indicator">
              <div 
                className="indicator-dot"
                style={{ backgroundColor: getActivityColor(activity.type) }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
