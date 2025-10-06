import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftNavigation from './LeftNavigation';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  // Override browser back button behavior
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      e.preventDefault();
      navigate('/', { replace: true });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  const handleBackToHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif', position: 'relative' }}>
      <LeftNavigation isOpen={isNavOpen} onClose={closeNav} />

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

      {/* Back to Home Button */}
      <button
        onClick={handleBackToHome}
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 998,
          background: '#667eea',
          border: 'none',
          borderRadius: 8,
          padding: '12px 20px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          color: '#ffffff',
          fontSize: 14,
          fontWeight: 600,
          transition: 'background 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#5568d3'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#667eea'}
      >
        ← Home
      </button>

      {/* Main content area */}
      <main style={{ minHeight: '100vh', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
