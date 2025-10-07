import React from 'react';
import NutritionWidget from '../components/Widget';

const EnvironmentHealth: React.FC = () => {
  const environmentHealthItems = [
    {
      title: 'Incinerator',
      image: '/EnvironmentHealth/incinerator.jpg',
      identifyingFeatures: [
        'High-temperature furnace with chimney for waste burning.',
        'Constructed of brick or metal; double-chambered in modern designs.',
        'Equipped with ash pit and air vents.'
      ],
      publicHealthImportance: [
        'Used for safe disposal of biomedical and hospital waste.',
        'Prevents spread of infection and environmental contamination.',
        'Recommended under Biomedical Waste Management Rules, 2016.'
      ]
    },
    {
      title: 'Horrock\'s Apparatus',
      image: '/EnvironmentHealth/horrocks.jpg',
      identifyingFeatures: [
        'Glass bottles, droppers, and standard alum solution used in sets.',
        'Designed to test optimum alum dose for water purification.'
      ],
      publicHealthImportance: [
        'Ensures effective coagulation and sedimentation in water treatment.',
        'Prevents wastage or inadequate use of alum.',
        'Helps maintain safe drinking water quality in community supplies.'
      ]
    },
    {
      title: 'Rapid Sand Filter',
      image: '/EnvironmentHealth/rapidSandFilter.jpg',
      identifyingFeatures: [
        'Large tank containing layers of sand and gravel.',
        'Water inlet, underdrain system, and backwash arrangement.'
      ],
      publicHealthImportance: [
        'Used in municipal water purification plants.',
        'Removes suspended impurities, bacteria, and turbidity.',
        'Key to ensuring safe potable water in urban populations.'
      ]
    },
    {
      title: 'P-Trap',
      image: '/EnvironmentHealth/pTrap.jpg',
      identifyingFeatures: [
        'U-shaped pipe below sinks or toilets.',
        'Always retains a small amount of water forming a seal.'
      ],
      publicHealthImportance: [
        'Prevents entry of foul gases and insects from sewers.',
        'Essential sanitary fitting in household plumbing.',
        'Simple but vital for maintaining environmental sanitation.'
      ]
    },
    {
      title: 'Sanitary Well',
      image: '/EnvironmentHealth/sanitaryWell.jpg',
      identifyingFeatures: [
        'Properly lined well with raised parapet (60–90 cm) and cover.',
        'Has cemented platform and drainage channel for spillover.'
      ],
      publicHealthImportance: [
        'Provides safe groundwater for domestic use.',
        'Prevents contamination from surface runoff or waste.',
        'Essential component of rural water supply and hygiene.'
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FCD8CD' }}>
      <div style={{ padding: '40px 24px 24px 24px' }}>
        <h1 style={{ marginTop: 0, color: '#687FE5', fontSize: 38, textAlign: 'center' }}>
          Environment and Occupational Health
        </h1>
      </div>
      
      <NutritionWidget items={environmentHealthItems} />
    </div>
  );
};

export default EnvironmentHealth;
