import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, activePage, onPageChange, onClose }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'projects', label: 'Projects', icon: '📁' },
    { id: 'tasks', label: 'Tasks', icon: '✅' },
    { id: 'calendar', label: 'Calendar', icon: '📅' },
    { id: 'team', label: 'Team', icon: '👥' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Workspace</h2>
          <button 
            className="sidebar-close"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => {
                    onPageChange(item.id);
                    onClose();
                  }}
                  aria-current={activePage === item.id ? 'page' : undefined}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar-small">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face" 
                alt="User" 
              />
            </div>
            <div className="user-details">
              <div className="user-name">John Doe</div>
              <div className="user-email">john@example.com</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
