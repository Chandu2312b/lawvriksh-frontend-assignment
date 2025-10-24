import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app">
      <Header 
        onMenuClick={toggleSidebar}
        sidebarOpen={sidebarOpen}
      />
      <div className="app-body">
        <Sidebar 
          isOpen={sidebarOpen}
          activePage={activePage}
          onPageChange={setActivePage}
          onClose={() => setSidebarOpen(false)}
        />
        <MainContent 
          activePage={activePage}
          sidebarOpen={sidebarOpen}
        />
      </div>
    </div>
  );
}

export default App;
