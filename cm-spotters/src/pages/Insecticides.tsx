import React from 'react';
import NutritionWidget from '../components/NutritionWidget';

const Insecticides: React.FC = () => {
  const insecticideItems = [
    {
      title: 'Paris Green',
      image: '/Insecticides/parisGreen.jpg',
      identifyingFeatures: [
        'Fine green powder (copper acetoarsenite).',
        'Insoluble in water; used as larvicide.'
      ],
      publicHealthImportance: [
        'Used for mosquito larval control in stagnant water (esp. Anopheles).',
        'Replaced by safer larvicides due to arsenic toxicity.',
        'Historically important in malaria control programs.'
      ]
    },
    {
      title: 'Bleaching Powder',
      image: '/Insecticides/bleachingPowder.jpg',
      identifyingFeatures: [
        'White powder with strong chlorine odor.',
        'Contains 30–35% available chlorine.'
      ],
      publicHealthImportance: [
        'Used for disinfection of water, latrines, and surfaces.',
        'Acts as oxidizing and deodorizing agent.',
        'Inexpensive and widely used for chlorination of wells.'
      ]
    },
    {
      title: 'Dettol / Savlon',
      image: '/Insecticides/dettol.jpg',
      identifyingFeatures: [
        'Liquid antiseptic solutions with distinct smell.',
        'Dettol (chloroxylenol base, amber color); Savlon (cetrimide + chlorhexidine, colorless/blue).'
      ],
      publicHealthImportance: [
        'Used for hand hygiene, wound cleansing, and surface disinfection.',
        'Reduces hospital-acquired infections.',
        'Common in first-aid kits and domestic hygiene.'
      ]
    },
    {
      title: 'Formaldehyde',
      image: '/Insecticides/formaldehyde.jpg',
      identifyingFeatures: [
        'Colorless liquid with strong pungent odor.',
        'Usually available as 40% formalin solution.'
      ],
      publicHealthImportance: [
        'Powerful gaseous disinfectant for rooms, instruments, and vaccines.',
        'Used for fumigation of operation theatres.',
        'Effective against spores and viruses.'
      ]
    },
    {
      title: 'Phenol',
      image: '/Insecticides/phenol.jpg',
      identifyingFeatures: [
        'Colorless to pink crystalline solid with characteristic odor.',
        'Soluble in water forming disinfectant solution (Lysol).'
      ],
      publicHealthImportance: [
        'Used for disinfecting excreta, floors, and hospital surfaces.',
        'One of the oldest disinfectants in public health.',
        'Basis for "phenol coefficient test" for disinfectant potency.'
      ]
    },
    {
      title: 'Hydrogen Peroxide',
      image: '/Insecticides/hydrogenPeroxide.jpg',
      identifyingFeatures: [
        'Clear liquid; effervesces on contact with organic matter.',
        'Available in 3% or 6% solutions.'
      ],
      publicHealthImportance: [
        'Used as antiseptic for wounds and ulcers.',
        'Releases nascent oxygen → kills anaerobic organisms.',
        'Environmentally friendly surface and instrument disinfectant.'
      ]
    },
    {
      title: 'Potassium Permanganate (KMnO₄)',
      image: '/Insecticides/kmno4.jpg',
      identifyingFeatures: [
        'Deep purple crystals, water-soluble.',
        'Produces pink solution upon dilution.'
      ],
      publicHealthImportance: [
        'Used for disinfection of wells (oxidizing agent).',
        'Serves as antiseptic and deodorant.',
        'Also used for snakebite first aid and water purification.'
      ]
    },
    {
      title: 'Iodine',
      image: '/Insecticides/iodine.jpg',
      identifyingFeatures: [
        'Brown crystalline solid; antiseptic solution (Lugol\'s iodine / tincture).',
        'Strong characteristic odor.'
      ],
      publicHealthImportance: [
        'Used for wound disinfection and skin preparation.',
        'Essential micronutrient for thyroid function.',
        'Deficiency prevention via iodized salt fortification programs.'
      ]
    },
    {
      title: 'Alum (Aluminum Potassium Sulphate)',
      image: '/Insecticides/alum.jpg',
      identifyingFeatures: [
        'Colorless crystalline solid with astringent taste.',
        'Soluble in warm water; forms clear solution.'
      ],
      publicHealthImportance: [
        'Used as coagulant in water purification.',
        'Mild astringent and antiseptic in minor cuts.',
        'Important for community water supply safety.'
      ]
    },
    {
      title: 'Soap',
      image: '/Insecticides/soap.jpg',
      identifyingFeatures: [
        'Solid or liquid cleansing agent; lathers with water.',
        'Fatty acid salts of sodium or potassium.'
      ],
      publicHealthImportance: [
        'Fundamental to hand hygiene and infection prevention.',
        'Disrupts lipid membrane of microbes including viruses.',
        'Key intervention in disease prevention (e.g., diarrheal diseases, COVID-19).'
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <div style={{ padding: '80px 24px 24px 24px' }}>
        <h1 style={{ marginTop: 0, color: '#1e293b', fontSize: 32, textAlign: 'center' }}>
          Insecticides and Disinfectants
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: '#475569', textAlign: 'center', maxWidth: 800, margin: '0 auto 32px' }}>
          Click on any item to learn more about its identifying features and public health importance.
        </p>
      </div>
      
      <NutritionWidget items={insecticideItems} />
    </div>
  );
};

export default Insecticides;
