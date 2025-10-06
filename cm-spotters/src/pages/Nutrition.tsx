import React from 'react';

const Nutrition: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0, color: '#1e293b', fontSize: 32 }}>Nutrition</h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
        This section covers nutritional science, dietary requirements, malnutrition, 
        micronutrient deficiencies, and public health nutrition programs.
      </p>
      <div style={{ marginTop: 24, padding: 16, background: '#f1f5f9', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, color: '#334155' }}>Key Topics:</h3>
        <ul style={{ lineHeight: 1.8, color: '#475569' }}>
          <li>Macronutrients and Micronutrients</li>
          <li>Protein-Energy Malnutrition (PEM)</li>
          <li>Vitamin Deficiencies (A, B, C, D)</li>
          <li>Mineral Deficiencies (Iron, Iodine, Calcium)</li>
          <li>National Nutrition Programs</li>
          <li>Mid-Day Meal Scheme</li>
          <li>ICDS (Integrated Child Development Services)</li>
        </ul>
      </div>
    </div>
  );
};

export default Nutrition;
