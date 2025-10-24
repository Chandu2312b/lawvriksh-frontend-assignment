import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Complete redesign of the company website',
      status: 'in-progress',
      progress: 75,
      team: ['Sarah', 'Mike', 'Alex'],
      dueDate: '2024-02-15',
      priority: 'high'
    },
    {
      id: 2,
      name: 'Mobile App',
      description: 'New mobile application for iOS and Android',
      status: 'planning',
      progress: 25,
      team: ['John', 'Emma'],
      dueDate: '2024-03-30',
      priority: 'medium'
    },
    {
      id: 3,
      name: 'API Integration',
      description: 'Third-party API integration project',
      status: 'completed',
      progress: 100,
      team: ['David', 'Lisa'],
      dueDate: '2024-01-20',
      priority: 'low'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return '#10b981';
      case 'in-progress':
        return '#3b82f6';
      case 'planning':
        return '#f59e0b';
      default:
        return '#6b7280';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return '#ef4444';
      case 'medium':
        return '#f59e0b';
      case 'low':
        return '#10b981';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>Projects</h1>
        <button className="new-project-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          New Project
        </button>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="project-header">
              <div className="project-title">
                <h3>{project.name}</h3>
                <div 
                  className="priority-badge"
                  style={{ backgroundColor: getPriorityColor(project.priority) }}
                >
                  {project.priority}
                </div>
              </div>
              <div 
                className="status-badge"
                style={{ backgroundColor: getStatusColor(project.status) }}
              >
                {project.status.replace('-', ' ')}
              </div>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-progress">
              <div className="progress-header">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ 
                    width: `${project.progress}%`,
                    backgroundColor: getStatusColor(project.status)
                  }}
                />
              </div>
            </div>

            <div className="project-meta">
              <div className="team-members">
                <span>Team:</span>
                <div className="team-avatars">
                  {project.team.map((member, i) => (
                    <div key={i} className="team-avatar">
                      {member.charAt(0)}
                    </div>
                  ))}
                </div>
              </div>
              <div className="due-date">
                <span>Due: {new Date(project.dueDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
