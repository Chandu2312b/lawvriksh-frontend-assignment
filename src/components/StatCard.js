import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, change, changeType, icon, delay = 0 }) => {
  return (
    <div 
      className="stat-card"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="stat-header">
        <div className="stat-icon">{icon}</div>
        <div className="stat-change">
          <span className={`change-badge ${changeType}`}>
            {change}
          </span>
        </div>
      </div>
      
      <div className="stat-content">
        <div className="stat-value">{value}</div>
        <div className="stat-title">{title}</div>
      </div>
      
      <div className="stat-progress">
        <div className="progress-bar">
          <div 
            className={`progress-fill ${changeType}`}
            style={{ width: `${Math.min(parseInt(change.replace('%', '').replace('+', '')), 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
