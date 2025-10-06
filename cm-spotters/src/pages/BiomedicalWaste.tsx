import React from 'react';

const BiomedicalWaste: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0, color: '#1e293b', fontSize: 32 }}>Biomedical Waste Management</h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
        Proper handling, segregation, treatment, and disposal of biomedical waste 
        to prevent health hazards and environmental pollution.
      </p>
      <div style={{ marginTop: 24, padding: 16, background: '#fee2e2', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, color: '#991b1b' }}>Key Concepts:</h3>
        <ul style={{ lineHeight: 1.8, color: '#7f1d1d' }}>
          <li>Biomedical Waste Categories (Yellow, Red, White, Blue)</li>
          <li>Segregation at Source</li>
          <li>Color-Coded Bins and Bags</li>
          <li>Treatment Technologies (Incineration, Autoclaving, Microwave)</li>
          <li>Biomedical Waste Management Rules 2016</li>
          <li>Sharps Management</li>
          <li>Cytotoxic Waste Handling</li>
          <li>Environmental and Health Impacts</li>
        </ul>
      </div>
    </div>
  );
};

export default BiomedicalWaste;
