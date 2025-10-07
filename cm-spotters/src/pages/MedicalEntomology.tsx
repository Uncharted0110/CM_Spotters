import React from 'react';
import NutritionWidget from '../components/NutritionWidget';

const MedicalEntomology: React.FC = () => {
  const entomologyItems = [
    {
      title: 'Adult Anopheles Female Mosquito',
      image: '/MedicalEntomology/anopheles.jpg',
      identifyingFeatures: [
        'Rests at a 45° angle to the surface (body and proboscis in one straight line).',
        'Wings have spotted appearance (dark and light scales).',
        'Palpi in females are as long as the proboscis.'
      ],
      publicHealthImportance: [
        'Transmits malaria (Plasmodium species).',
        'Breeds in clean stagnant water.',
        'Vector control includes insecticide spraying, bed nets, and larval control.'
      ]
    },
    {
      title: 'Adult Culex Female Mosquito',
      image: '/MedicalEntomology/culex.jpg',
      identifyingFeatures: [
        'Rests parallel to the surface (body and proboscis not in one line).',
        'Uniformly colored brown wings without spots.',
        'Palpi in females are shorter than proboscis.'
      ],
      publicHealthImportance: [
        'Vector of filariasis (Wuchereria bancrofti) and Japanese Encephalitis.',
        'Breeds in dirty, stagnant water like drains and pits.',
        'Controlled by environmental sanitation and anti-larval measures.'
      ]
    },
    {
      title: 'Culex Larva',
      image: '/MedicalEntomology/culexLarva.jpg',
      identifyingFeatures: [
        'Hangs at an angle to the water surface.',
        'Has a long breathing siphon at posterior end.',
        'Moves jerkily when disturbed.'
      ],
      publicHealthImportance: [
        'Larval stage of Culex — easily identifiable for control operations.',
        'Indicator of poor drainage and sanitation.',
        'Target for larvicides (e.g., temephos) and biological control (larvivorous fish).'
      ]
    },
    {
      title: 'Mouthparts of Housefly',
      image: '/MedicalEntomology/houseflyMouth.jpg',
      identifyingFeatures: [
        'Sponging type mouthparts with labellum (no piercing structures).',
        'Adapted for sucking liquid or semi-solid substances.'
      ],
      publicHealthImportance: [
        'Mechanical vector of typhoid, cholera, dysentery.',
        'Contamination occurs through regurgitation or defecation on food.',
        'Controlled by waste management, sanitation, and fly-proofing.'
      ]
    },
    {
      title: 'Sand Fly (Phlebotomus species)',
      image: '/MedicalEntomology/sandFly.jpg',
      identifyingFeatures: [
        'Very small, hairy fly with erect wings and humped back.',
        'Characteristic short hopping flight.'
      ],
      publicHealthImportance: [
        'Vector of Kala-azar (Visceral Leishmaniasis).',
        'Breeds in cracks, crevices, and animal shelters.',
        'Controlled by indoor residual spraying (IRS) and environmental hygiene.'
      ]
    },
    {
      title: 'Adult Aedes Female Mosquito',
      image: '/MedicalEntomology/aedes.jpg',
      identifyingFeatures: [
        'Medium-sized, black mosquito with white spots (silver-white markings) on the body and legs — hence called the "tiger mosquito".',
        'Rests parallel to the surface (body and proboscis in a straight line)',
        'Short palpi in females (shorter than proboscis)'
      ],
      publicHealthImportance: [
        'Principal vector of Dengue, Chikungunya, Zika virus, and Yellow Fever.',
        'Day-biting mosquito — peaks early morning and late afternoon.',
        'Control strategies include source reduction (removal of breeding sites), larviciding, covering water containers, and community participation.'
      ]
    },
    {
      title: 'Hard Tick (Ixodes or Boophilus species)',
      image: '/MedicalEntomology/hardTick.jpg',
      identifyingFeatures: [
        'Flattened, oval body covered with a hard dorsal scutum (shield).',
        'Four pairs of legs, visible mouthparts at the front.'
      ],
      publicHealthImportance: [
        'Vector of tick-borne diseases like Crimean–Congo hemorrhagic fever, Kyasanur Forest Disease (KFD).',
        'Causes tick paralysis and allergic reactions.',
        'Controlled by acaricides and livestock management.'
      ]
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <div style={{ padding: '80px 24px 24px 24px' }}>
        <h1 style={{ marginTop: 0, color: '#1e293b', fontSize: 32, textAlign: 'center' }}>
          Medical Entomology
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: '#475569', textAlign: 'center', maxWidth: 800, margin: '0 auto 32px' }}>
          Click on any item to learn more about its identifying features and public health importance.
        </p>
      </div>
      
      <NutritionWidget items={entomologyItems} />
    </div>
  );
};

export default MedicalEntomology;
