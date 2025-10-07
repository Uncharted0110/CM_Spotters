import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Apple, 
  Stethoscope, 
  Baby, 
  Syringe, 
  Activity, 
  BarChart3, 
  Leaf, 
  Bug, 
  Beaker, 
  Trash2 
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const topics = [
    { title: 'Nutrition', path: '/nutrition', color: '#EBD6FB', icon: Apple },
    { title: 'Communicable & Non-Communicable Diseases', path: '/diseases', color: '#EBD6FB', icon: Stethoscope },
    { title: 'MCH and Family Planning', path: '/mch', color: '#EBD6FB', icon: Baby },
    { title: 'Vaccines', path: '/vaccines', color: '#EBD6FB', icon: Syringe },
    { title: 'Health Planning & Epidemiology', path: '/health-planning', color: '#EBD6FB', icon: Activity },
    { title: 'Medical Statistics', path: '/statistics', color: '#EBD6FB', icon: BarChart3 },
    { title: 'Environment & Occupational Health', path: '/environment', color: '#EBD6FB', icon: Leaf },
    { title: 'Medical Entomology', path: '/entomology', color: '#EBD6FB', icon: Bug },
    { title: 'Insecticides & Disinfectants', path: '/insecticides', color: '#EBD6FB', icon: Beaker },
    { title: 'Biomedical Waste Management', path: '/biomedical-waste', color: '#EBD6FB', icon: Trash2 },
  ];

  const buttonStyle = (color: string): React.CSSProperties => ({
    padding: '14px 24px',
    fontSize: 15,
    fontWeight: 600,
    color: '#687FE5',
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
      background: '#FCD8CD',
      color: '#0927acff',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '40px 20px',
      overflowY: 'auto'
    }}>
      <img 
        src="/logo.jpeg" 
        alt="CM Spotters Logo" 
        style={{
          width: 250,
          height: 250,
          marginBottom: 24
        }}
      />
      <h1 style={{ fontSize: 48, marginBottom: 16, fontWeight: 700 }}>CM Companion</h1>
      <p style={{ fontSize: 20, marginBottom: 20, maxWidth: 700 }}>
        Your comprehensive platform for Community Medicine spotters, case studies, and learning resources.
      </p>

      <p style={{ fontSize: 15, maxWidth: 700, fontStyle: 'italic' }}>
        by Dr Shubha Davalagi, Professor, Community Medicine, JJMMC
      </p>
      
      <h2 style={{ fontSize: 24, marginBottom: 24, fontWeight: 600 }}>Select a Spotter to Learn</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 16,
        maxWidth: 1200,
        width: '100%',
        marginBottom: 32
      }}>
        {topics.map((topic, index) => {
          const IconComponent = topic.icon;
          return (
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
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <IconComponent size={20} />
                <span>{topic.title}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
