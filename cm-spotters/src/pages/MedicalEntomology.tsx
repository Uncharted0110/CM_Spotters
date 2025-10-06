import React from 'react';

const MedicalEntomology: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0, color: '#1e293b', fontSize: 32 }}>Medical Entomology</h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
        Study of arthropods and insects that impact human health, vector-borne diseases, 
        and vector control strategies.
      </p>
      <div style={{ marginTop: 24, padding: 16, background: '#fef3c7', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, color: '#92400e' }}>Study Areas:</h3>
        <ul style={{ lineHeight: 1.8, color: '#78350f' }}>
          <li>Mosquitoes (Anopheles, Aedes, Culex)</li>
          <li>Malaria Vector Control</li>
          <li>Dengue and Chikungunya Vectors</li>
          <li>Filariasis and Japanese Encephalitis</li>
          <li>Flies and Disease Transmission</li>
          <li>Lice, Fleas, and Ticks</li>
          <li>Vector Control Methods</li>
          <li>Integrated Vector Management</li>
        </ul>
      </div>
    </div>
  );
};

export default MedicalEntomology;
