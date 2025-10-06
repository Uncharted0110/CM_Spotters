import React from 'react';

const MedicalStatistics: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0, color: '#1e293b', fontSize: 32 }}>Medical Statistics</h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
        Statistical methods in medicine, biostatistics, vital statistics, 
        and data interpretation for public health research.
      </p>
      <div style={{ marginTop: 24, padding: 16, background: '#fef9c3', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, color: '#854d0e' }}>Topics Include:</h3>
        <ul style={{ lineHeight: 1.8, color: '#713f12' }}>
          <li>Measures of Central Tendency</li>
          <li>Measures of Dispersion</li>
          <li>Probability and Distributions</li>
          <li>Hypothesis Testing</li>
          <li>Chi-Square Test, t-Test, ANOVA</li>
          <li>Correlation and Regression</li>
          <li>Vital Statistics (Birth Rate, Death Rate, IMR, MMR)</li>
          <li>Sampling Methods</li>
        </ul>
      </div>
    </div>
  );
};

export default MedicalStatistics;
