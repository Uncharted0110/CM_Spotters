import React from 'react';
import { Link } from 'react-router-dom';

interface LeftNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeftNavigation: React.FC<LeftNavigationProps> = ({ isOpen, onClose }) => {
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
        width: 280,
        background: '#0b1220',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        boxSizing: 'border-box',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease',
        zIndex: 1000,
        overflowY: 'auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 18 }}>CM Spotters</div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontSize: 24,
              cursor: 'pointer',
              padding: 4,
              lineHeight: 1
            }}
          >
            ×
          </button>
        </div>
        <nav style={{ flex: '0 0 auto' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ margin: '10px 0' }}><Link onClick={onClose} style={{ color: '#cbd5e1', textDecoration: 'none' }} to="/nutrition">Nutrition</Link></li>
            <li style={{ margin: '10px 0' }}><Link onClick={onClose} style={{ color: '#cbd5e1', textDecoration: 'none' }} to="/diseases">Communicable and Non-Communicable Diseases</Link></li>
            <li style={{ margin: '10px 0' }}><Link onClick={onClose} style={{ color: '#cbd5e1', textDecoration: 'none' }} to="/mch">MCH and Family Planning</Link></li>
            <li style={{ margin: '10px 0' }}><Link onClick={onClose} style={{ color: '#cbd5e1', textDecoration: 'none' }} to="/vaccines">Vaccines</Link></li>
            <li style={{ margin: '10px 0' }}><Link onClick={onClose} style={{ color: '#cbd5e1', textDecoration: 'none' }} to="/health-planning">Concept of Health Planning and Epidemiology</Link></li>
            <li style={{ margin: '10px 0' }}><Link onClick={onClose} style={{ color: '#cbd5e1', textDecoration: 'none' }} to="/statistics">Medical Statistics</Link></li>
            <li style={{ margin: '10px 0' }}><Link onClick={onClose} style={{ color: '#cbd5e1', textDecoration: 'none' }} to="/environment">Environment and Occupational Health</Link></li>
            <li style={{ margin: '10px 0' }}><Link onClick={onClose} style={{ color: '#cbd5e1', textDecoration: 'none' }} to="/entomology">Medical Entomology</Link></li>
            <li style={{ margin: '10px 0' }}><Link onClick={onClose} style={{ color: '#cbd5e1', textDecoration: 'none' }} to="/insecticides">Insecticides and Disinfectants</Link></li>
            <li style={{ margin: '10px 0' }}><Link onClick={onClose} style={{ color: '#cbd5e1', textDecoration: 'none' }} to="/biomedical-waste">Biomedical Waste Management</Link></li>
          </ul>
        </nav>
        <div style={{ marginTop: 'auto', fontSize: 12, color: '#94a3b8' }}>v0.1</div>
      </aside>
    </>
  );
};

export default LeftNavigation;
