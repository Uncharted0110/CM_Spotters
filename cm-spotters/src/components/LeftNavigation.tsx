import React from 'react';
import { Link } from 'react-router-dom';
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
  Trash2,
  X
} from 'lucide-react';

interface LeftNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeftNavigation: React.FC<LeftNavigationProps> = ({ isOpen, onClose }) => {
  const navItems = [
    { title: 'Nutrition', path: '/nutrition', icon: Apple },
    { title: 'Diseases', path: '/diseases', icon: Stethoscope },
    { title: 'MCH & Family Planning', path: '/mch', icon: Baby },
    { title: 'Vaccines', path: '/vaccines', icon: Syringe },
    { title: 'Health Planning', path: '/health-planning', icon: Activity },
    { title: 'Medical Statistics', path: '/statistics', icon: BarChart3 },
    { title: 'Environment Health', path: '/environment', icon: Leaf },
    { title: 'Medical Entomology', path: '/entomology', icon: Bug },
    { title: 'Insecticides', path: '/insecticides', icon: Beaker },
    { title: 'Biomedical Waste', path: '/biomedical-waste', icon: Trash2 },
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            transition: 'opacity 0.3s ease'
          }}
        />
      )}
      
      {/* Sidebar */}
      <aside style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: 300,
        background: 'linear-gradient(to bottom, #FCD8CD, #EBD6FB)',
        color: '#687FE5',
        display: 'flex',
        flexDirection: 'column',
        padding: 24,
        boxSizing: 'border-box',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease',
        zIndex: 1000,
        overflowY: 'auto',
        boxShadow: '4px 0 20px rgba(0, 0, 0, 0.15)'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: 32,
          paddingBottom: 16,
          borderBottom: '2px solid rgba(104, 127, 229, 0.2)'
        }}>
          <div style={{ fontWeight: 700, fontSize: 22, color: '#687FE5' }}>CM Companion</div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(104, 127, 229, 0.1)',
              border: 'none',
              color: '#687FE5',
              cursor: 'pointer',
              padding: 8,
              lineHeight: 1,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(104, 127, 229, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(104, 127, 229, 0.1)'}
          >
            <X size={20} />
          </button>
        </div>
        <nav style={{ flex: '1 1 auto' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <li key={index} style={{ margin: '8px 0' }}>
                  <Link 
                    onClick={onClose}
                    to={item.path}
                    style={{
                      color: '#687FE5',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '12px 16px',
                      borderRadius: 10,
                      background: hoveredIndex === index ? 'rgba(104, 127, 229, 0.15)' : 'rgba(255, 255, 255, 0.5)',
                      transition: 'all 0.2s',
                      fontWeight: 500,
                      fontSize: 15,
                      boxShadow: hoveredIndex === index ? '0 4px 12px rgba(104, 127, 229, 0.2)' : '0 2px 6px rgba(0, 0, 0, 0.08)'
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <IconComponent size={20} />
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div style={{ 
          marginTop: 24, 
          fontSize: 12, 
          color: '#687FE5',
          opacity: 0.6,
          textAlign: 'center',
          paddingTop: 16,
          borderTop: '2px solid rgba(104, 127, 229, 0.2)'
        }}>
          by Dr Shubha Davalagi, Professor, Community Medicine, JJMMC
        </div>
      </aside>
    </>
  );
};

export default LeftNavigation;
