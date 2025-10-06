import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const topics = [
    { title: 'Nutrition', path: '/nutrition', color: '#10b981' },
    { title: 'Communicable & Non-Communicable Diseases', path: '/diseases', color: '#f59e0b' },
    { title: 'MCH and Family Planning', path: '/mch', color: '#ec4899' },
    { title: 'Vaccines', path: '/vaccines', color: '#3b82f6' },
    { title: 'Health Planning & Epidemiology', path: '/health-planning', color: '#8b5cf6' },
    { title: 'Medical Statistics', path: '/statistics', color: '#eab308' },
    { title: 'Environment & Occupational Health', path: '/environment', color: '#14b8a6' },
    { title: 'Medical Entomology', path: '/entomology', color: '#f97316' },
    { title: 'Insecticides & Disinfectants', path: '/insecticides', color: '#a855f7' },
    { title: 'Biomedical Waste Management', path: '/biomedical-waste', color: '#ef4444' },
  ];

  const buttonStyle = (color: string): React.CSSProperties => ({
    padding: '14px 24px',
    fontSize: 15,
    fontWeight: 600,
    color: '#ffffff',
    background: color,
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    minWidth: 280,
  });

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#ffffff',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '40px 20px',
      overflowY: 'auto'
    }}>
      <h1 style={{ fontSize: 48, marginBottom: 16, fontWeight: 700 }}>CM Spotters</h1>
      <p style={{ fontSize: 20, marginBottom: 32, maxWidth: 700 }}>
        Your comprehensive platform for Community Medicine topics, case studies, and learning resources.
      </p>
      
      <h2 style={{ fontSize: 24, marginBottom: 24, fontWeight: 600 }}>Select a Topic to Explore</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 16,
        maxWidth: 1200,
        width: '100%',
        marginBottom: 32
      }}>
        {topics.map((topic, index) => (
          <button
            key={index}
            onClick={() => navigate(topic.path)}
            style={buttonStyle(topic.color)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            {topic.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
