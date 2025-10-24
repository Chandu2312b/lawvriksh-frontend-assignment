import React from 'react';
import StatCard from './StatCard';
import ChartCard from './ChartCard';
import RecentActivity from './RecentActivity';
import QuickActions from './QuickActions';
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Projects',
      value: '24',
      change: '+12%',
      changeType: 'positive',
      icon: '📁'
    },
    {
      title: 'Active Tasks',
      value: '156',
      change: '+8%',
      changeType: 'positive',
      icon: '✅'
    },
    {
      title: 'Team Members',
      value: '12',
      change: '+2',
      changeType: 'positive',
      icon: '👥'
    },
    {
      title: 'Completion Rate',
      value: '87%',
      change: '+5%',
      changeType: 'positive',
      icon: '📈'
    }
  ];

  const activities = [
    {
      id: 1,
      type: 'project',
      title: 'New project "Website Redesign" created',
      time: '2 hours ago',
      user: 'Sarah Johnson'
    },
    {
      id: 2,
      type: 'task',
      title: 'Task "Update homepage" completed',
      time: '4 hours ago',
      user: 'Mike Chen'
    },
    {
      id: 3,
      type: 'team',
      title: 'New team member "Alex Smith" joined',
      time: '1 day ago',
      user: 'Admin'
    },
    {
      id: 4,
      type: 'milestone',
      title: 'Milestone "Phase 1" reached',
      time: '2 days ago',
      user: 'Project Manager'
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome back, John!</h1>
        <p>Here's what's happening with your projects today.</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
            icon={stat.icon}
            delay={index * 100}
          />
        ))}
      </div>

      <div className="dashboard-content">
        <div className="dashboard-left">
          <ChartCard />
          <RecentActivity activities={activities} />
        </div>
        
        <div className="dashboard-right">
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
