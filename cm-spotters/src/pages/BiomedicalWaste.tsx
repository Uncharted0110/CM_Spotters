import React from 'react';
import NutritionWidget from '../components/NutritionWidget';

const BiomedicalWaste: React.FC = () => {
  const biomedicalWasteItems = [
    {
      title: 'Yellow-Colored Bin',
      image: '/BiomedicalWaste/yellowBin.jpg',
      identifyingFeatures: [
        'Bright yellow container or bag labeled with biohazard symbol.',
        'Designated for infectious, pathological, and soiled waste.'
      ],
      publicHealthImportance: [
        'Used for human/animal tissue, soiled dressings, body fluids, expired medicines.',
        'Waste treated by incineration or plasma pyrolysis.',
        'Prevents cross-infection and occupational exposure.'
      ]
    },
    {
      title: 'Red-Colored Bin',
      image: '/BiomedicalWaste/redBin.jpg',
      identifyingFeatures: [
        'Red non-chlorinated plastic container.',
        'Labeled for contaminated recyclable waste.'
      ],
      publicHealthImportance: [
        'Collects tubing, catheters, IV sets, gloves, plastic syringes.',
        'Subjected to autoclaving, shredding, or microwaving before recycling.',
        'Reduces plastic load and environmental pollution.'
      ]
    },
    {
      title: 'Blue-Colored Bin',
      image: '/BiomedicalWaste/blueBin.jpg',
      identifyingFeatures: [
        'Blue cardboard box or puncture-proof plastic container.',
        'Often labeled for metallic and glass waste.'
      ],
      publicHealthImportance: [
        'Used for broken glassware, metallic implants, needles (after disinfection).',
        'Ensures safe handling and recycling.',
        'Prevents injuries from sharps and contaminated metal.'
      ]
    },
    {
      title: 'Black-Colored Bin',
      image: '/BiomedicalWaste/blackBin.jpg',
      identifyingFeatures: [
        'Black container for discarded medicines, general and non-infectious waste (no biohazard label).',
        'Non-chlorinated plastic material.'
      ],
      publicHealthImportance: [
        'Collects discarded medicines, paper waste, food remains.',
        'Sent for municipal disposal or landfill.',
        'Keeps biomedical and general waste streams separate.'
      ]
    },
    {
      title: 'Disposable Syringe',
      image: '/BiomedicalWaste/disposableSyringe.jpg',
      identifyingFeatures: [
        'Transparent plastic barrel with rubber piston and detachable needle.',
        'Sterile, packed individually.'
      ],
      publicHealthImportance: [
        'Ensures safe injection practices and prevents cross-infection.',
        'Must be destroyed after single use in white puncture-proof containers.',
        'Critical for infection control and needle-stick injury prevention.'
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <div style={{ padding: '80px 24px 24px 24px' }}>
        <h1 style={{ marginTop: 0, color: '#1e293b', fontSize: 32, textAlign: 'center' }}>
          Biomedical Waste Management
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: '#475569', textAlign: 'center', maxWidth: 800, margin: '0 auto 32px' }}>
          Click on any item to learn more about its identifying features and public health importance.
        </p>
      </div>
      
      <NutritionWidget items={biomedicalWasteItems} />
    </div>
  );
};

export default BiomedicalWaste;
