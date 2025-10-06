import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LeftNavigation from './LeftNavigation';

const Dashboard: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', fontFamily: 'Arial, sans-serif', position: 'relative' }}>
      <LeftNavigation isOpen={isNavOpen} onClose={closeNav} />

      {/* Main content area - renders nested routes */}
      <main style={{ flex: 1, overflowY: 'auto', width: '100%' }}>
        {/* Hamburger Menu Button */}
        <button
          onClick={toggleNav}
          style={{
            position: 'fixed',
            top: 20,
            left: 20,
            zIndex: 998,
            background: '#667eea',
            border: 'none',
            borderRadius: 8,
            padding: '12px 16px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#5568d3'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#667eea'}
        >
          <div style={{ width: 24, height: 3, background: '#ffffff', borderRadius: 2 }} />
          <div style={{ width: 24, height: 3, background: '#ffffff', borderRadius: 2 }} />
          <div style={{ width: 24, height: 3, background: '#ffffff', borderRadius: 2 }} />
        </button>
        
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
