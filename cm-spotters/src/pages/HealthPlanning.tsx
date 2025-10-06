import React from 'react';

const HealthPlanning: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0, color: '#1e293b', fontSize: 32 }}>Concept of Health Planning and Epidemiology</h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
        Study of epidemiological principles, disease surveillance, health planning strategies, 
        and public health administration.
      </p>
      <div style={{ marginTop: 24, padding: 16, background: '#f0fdf4', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, color: '#15803d' }}>Key Concepts:</h3>
        <ul style={{ lineHeight: 1.8, color: '#166534' }}>
          <li>Epidemiological Triad</li>
          <li>Disease Surveillance Systems</li>
          <li>Screening and Diagnostic Tests</li>
          <li>Health Planning Cycle</li>
          <li>Primary, Secondary, Tertiary Prevention</li>
          <li>National Health Policy</li>
          <li>NRHM & NUHM</li>
          <li>Health Information Systems</li>
        </ul>
      </div>
    </div>
  );
};

export default HealthPlanning;
