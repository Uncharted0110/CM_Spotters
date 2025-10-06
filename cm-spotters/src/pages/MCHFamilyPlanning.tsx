import React from 'react';

const MCHFamilyPlanning: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0, color: '#1e293b', fontSize: 32 }}>MCH and Family Planning</h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
        Maternal and Child Health (MCH) services, reproductive health, family planning methods, 
        and national programs for mother and child welfare.
      </p>
      <div style={{ marginTop: 24, padding: 16, background: '#fce7f3', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, color: '#9f1239' }}>Key Areas:</h3>
        <ul style={{ lineHeight: 1.8, color: '#be123c' }}>
          <li>Antenatal Care (ANC)</li>
          <li>Intranatal Care</li>
          <li>Postnatal Care (PNC)</li>
          <li>Immunization Schedule</li>
          <li>Family Planning Methods (Temporary & Permanent)</li>
          <li>Janani Suraksha Yojana (JSY)</li>
          <li>PMSMA (Pradhan Mantri Surakshit Matritva Abhiyan)</li>
          <li>Mission Indradhanush</li>
        </ul>
      </div>
    </div>
  );
};

export default MCHFamilyPlanning;
