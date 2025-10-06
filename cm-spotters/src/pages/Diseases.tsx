import React from 'react';

const Diseases: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0, color: '#1e293b', fontSize: 32 }}>Communicable and Non-Communicable Diseases</h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
        Learn about infectious diseases, chronic diseases, epidemiology, prevention strategies, 
        and national disease control programs.
      </p>
      <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ padding: 16, background: '#fef3c7', borderRadius: 8 }}>
          <h3 style={{ marginTop: 0, color: '#92400e' }}>Communicable Diseases</h3>
          <ul style={{ lineHeight: 1.8, color: '#78350f' }}>
            <li>Tuberculosis</li>
            <li>Malaria</li>
            <li>HIV/AIDS</li>
            <li>Dengue & Chikungunya</li>
            <li>Leprosy</li>
            <li>Viral Hepatitis</li>
          </ul>
        </div>
        <div style={{ padding: 16, background: '#ddd6fe', borderRadius: 8 }}>
          <h3 style={{ marginTop: 0, color: '#5b21b6' }}>Non-Communicable Diseases</h3>
          <ul style={{ lineHeight: 1.8, color: '#6b21a8' }}>
            <li>Diabetes Mellitus</li>
            <li>Hypertension</li>
            <li>Cardiovascular Diseases</li>
            <li>Cancer</li>
            <li>COPD</li>
            <li>Mental Health Disorders</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Diseases;
