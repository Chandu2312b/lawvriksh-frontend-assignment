import React from 'react';
import './ChartCard.css';

const ChartCard = () => {
  // Mock data for the chart
  const chartData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 78 },
    { month: 'Mar', value: 85 },
    { month: 'Apr', value: 92 },
    { month: 'May', value: 88 },
    { month: 'Jun', value: 95 }
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>Project Progress</h3>
        <div className="chart-actions">
          <button className="chart-action-btn" aria-label="Export chart">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="chart-action-btn" aria-label="More options">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="1" stroke="currentColor" strokeWidth="2"/>
              <circle cx="19" cy="12" r="1" stroke="currentColor" strokeWidth="2"/>
              <circle cx="5" cy="12" r="1" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="chart-content">
        <div className="chart-container">
          <svg className="chart-svg" viewBox="0 0 400 200">
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Chart line */}
            <polyline
              className="chart-line"
              points={chartData.map((d, i) => 
                `${(i * 400) / (chartData.length - 1)},${200 - (d.value * 160) / maxValue}`
              ).join(' ')}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Gradient definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            
            {/* Data points */}
            {chartData.map((d, i) => (
              <g key={i}>
                <circle
                  className="chart-point"
                  cx={(i * 400) / (chartData.length - 1)}
                  cy={200 - (d.value * 160) / maxValue}
                  r="4"
                  fill="#3b82f6"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text
                  className="chart-label"
                  x={(i * 400) / (chartData.length - 1)}
                  y="195"
                  textAnchor="middle"
                  fontSize="12"
                  fill="#6b7280"
                >
                  {d.month}
                </text>
              </g>
            ))}
          </svg>
        </div>
        
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#3b82f6' }}></div>
            <span>Completed Projects</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#10b981' }}></div>
            <span>In Progress</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
