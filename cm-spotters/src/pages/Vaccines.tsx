import React from 'react';

const Vaccines: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0, color: '#1e293b', fontSize: 32 }}>Vaccines</h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
        Comprehensive coverage of immunization, vaccine schedules, vaccine-preventable diseases, 
        cold chain management, and national immunization programs.
      </p>
      <div style={{ marginTop: 24, padding: 16, background: '#e0f2fe', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, color: '#075985' }}>Topics Covered:</h3>
        <ul style={{ lineHeight: 1.8, color: '#0c4a6e' }}>
          <li>Universal Immunization Program (UIP)</li>
          <li>National Immunization Schedule</li>
          <li>Vaccine Types (Live, Killed, Toxoid, etc.)</li>
          <li>Cold Chain and Vaccine Storage</li>
          <li>Adverse Events Following Immunization (AEFI)</li>
          <li>Pulse Polio Program</li>
          <li>Mission Indradhanush</li>
          <li>COVID-19 Vaccination</li>
        </ul>
      </div>
    </div>
  );
};

export default Vaccines;
