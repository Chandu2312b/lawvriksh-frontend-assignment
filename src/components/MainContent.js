import React from 'react';
import Dashboard from './Dashboard';
import Projects from './Projects';
import Tasks from './Tasks';
import Calendar from './Calendar';
import Team from './Team';
import Analytics from './Analytics';
import Settings from './Settings';
import './MainContent.css';

const MainContent = ({ activePage, sidebarOpen }) => {
  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'projects':
        return <Projects />;
      case 'tasks':
        return <Tasks />;
      case 'calendar':
        return <Calendar />;
      case 'team':
        return <Team />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="content-wrapper">
        {renderPage()}
      </div>
    </main>
  );
};

export default MainContent;
