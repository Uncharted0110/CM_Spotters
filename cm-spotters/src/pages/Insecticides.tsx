import React from 'react';

const Insecticides: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0, color: '#1e293b', fontSize: 32 }}>Insecticides and Disinfectants</h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
        Chemical agents for vector control, classification of insecticides, disinfection methods, 
        and safe usage practices.
      </p>
      <div style={{ marginTop: 24, padding: 16, background: '#ede9fe', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, color: '#6b21a8' }}>Topics Covered:</h3>
        <ul style={{ lineHeight: 1.8, color: '#581c87' }}>
          <li>Classification of Insecticides (Organophosphates, Pyrethroids, etc.)</li>
          <li>DDT and Its Use in Public Health</li>
          <li>Insecticide Resistance</li>
          <li>Larvicides and Adulticides</li>
          <li>Disinfection and Sterilization Methods</li>
          <li>Chemical Disinfectants (Phenol, Chlorine, Formaldehyde)</li>
          <li>Fumigation Techniques</li>
          <li>Safety and Toxicity</li>
        </ul>
      </div>
    </div>
  );
};

export default Insecticides;
