import React from 'react';

const EnvironmentHealth: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0, color: '#1e293b', fontSize: 32 }}>Environment and Occupational Health</h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
        Environmental health hazards, pollution control, occupational diseases, 
        and workplace safety measures.
      </p>
      <div style={{ marginTop: 24, padding: 16, background: '#dcfce7', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, color: '#166534' }}>Key Topics:</h3>
        <ul style={{ lineHeight: 1.8, color: '#14532d' }}>
          <li>Air Pollution and Control</li>
          <li>Water Supply and Sanitation</li>
          <li>Solid Waste Management</li>
          <li>Occupational Diseases (Pneumoconiosis, Silicosis)</li>
          <li>Industrial Toxicology</li>
          <li>Noise Pollution</li>
          <li>Housing and Health</li>
          <li>Climate Change and Health</li>
        </ul>
      </div>
    </div>
  );
};

export default EnvironmentHealth;
