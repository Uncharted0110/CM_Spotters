import React from 'react';
import NutritionWidget from '../components/NutritionWidget';

const Vaccines: React.FC = () => {
  const vaccineItems = [
    {
      title: 'BCG Vaccine (Bacillus Calmette–Guérin)',
      image: '/Vaccines/bcg.jpg',
      identifyingFeatures: [
        'Freeze-dried powder in small ampoule; given intradermally.',
        'Diluent: normal saline supplied separately.',
        'Reconstituted vaccine has a faint pinkish color.'
      ],
      publicHealthImportance: [
        'Protects against severe forms of childhood tuberculosis (meningitis, miliary TB).',
        'Given at birth under UIP.',
        'Demonstrates cell-mediated immunity with BCG scar formation.'
      ]
    },
    {
      title: 'OPV (Oral Polio Vaccine)',
      image: '/Vaccines/opv.jpg',
      identifyingFeatures: [
        'Liquid form in plastic dropper vial; pink color.',
        'Stored at 2–8°C or frozen for long-term.'
      ],
      publicHealthImportance: [
        'Protects against poliomyelitis.',
        'Given as birth dose and at 6, 10, 14 weeks, and during Pulse Polio rounds.',
        'Pivotal in India\'s polio eradication success (certified polio-free in 2014).'
      ]
    },
    {
      title: 'DPT Vaccine (Triple Antigen)',
      image: '/Vaccines/dpt.jpg',
      identifyingFeatures: [
        'Multidose vial with milky white suspension.',
        'Contains Diphtheria, Pertussis, and Tetanus toxoids.'
      ],
      publicHealthImportance: [
        'Prevents three killer childhood diseases.',
        'Given at 6, 10, 14 weeks, and booster doses at 16–24 months and 5 years.',
        'Replaced by Pentavalent vaccine in UIP.'
      ]
    },
    {
      title: 'Tetanus Toxoid (TT / Td)',
      image: '/Vaccines/tt.jpg',
      identifyingFeatures: [
        'Clear fluid in ampoule or vial labeled "Tetanus Toxoid."',
        'Administered intramuscularly.'
      ],
      publicHealthImportance: [
        'Prevents neonatal and maternal tetanus.',
        'Given to pregnant women, adolescents, and injury cases.',
        'Part of Elimination of Maternal & Neonatal Tetanus (MNTE) initiative.'
      ]
    },
    {
      title: 'Typhoid Vaccine (Vi Polysaccharide)',
      image: '/Vaccines/typhoid.jpg',
      identifyingFeatures: [
        'Clear liquid vaccine supplied in ampoule or prefilled syringe.',
        'Labeled as "Vi Polysaccharide Typhoid Vaccine."'
      ],
      publicHealthImportance: [
        'Prevents typhoid fever, especially in endemic areas.',
        'Used in school-based and outbreak immunization programs.',
        'Recommended for food handlers and travelers.'
      ]
    },
    {
      title: 'Measles Vaccine',
      image: '/Vaccines/measles.jpg',
      identifyingFeatures: [
        'Freeze-dried orange or light yellow powder in vial.',
        'Diluent: sterile water supplied separately.'
      ],
      publicHealthImportance: [
        'Prevents measles and its complications (pneumonia, encephalitis).',
        'Given at 9 months and 16–24 months under UIP.',
        'Part of Measles-Rubella (MR) elimination strategy.'
      ]
    },
    {
      title: 'MMR Vaccine (Measles, Mumps, Rubella)',
      image: '/Vaccines/mmr.jpg',
      identifyingFeatures: [
        'Freeze-dried powder with diluent, given subcutaneously.',
        'Pink to yellowish appearance after reconstitution.'
      ],
      publicHealthImportance: [
        'Provides triple protection against measles, mumps, and rubella.',
        'Prevents congenital rubella syndrome (CRS).',
        'Used in private and government MR campaigns.'
      ]
    },
    {
      title: 'Japanese Encephalitis (JE) Vaccine',
      image: '/Vaccines/je.jpg',
      identifyingFeatures: [
        'Freeze-dried vaccine (mouse brain-derived or live attenuated SA 14-14-2 strain).',
        'Reconstituted to a clear solution.'
      ],
      publicHealthImportance: [
        'Prevents encephalitis caused by JE virus in endemic districts.',
        'Targeted in special JE vaccination campaigns for children 1–15 years.',
        'Key intervention in National Vector Borne Disease Control Programme (NVBDCP).'
      ]
    },
    {
      title: 'Hepatitis A Vaccine (HAV Purified)',
      image: '/Vaccines/hepA.jpg',
      identifyingFeatures: [
        'Injectable, clear suspension; supplied in prefilled syringes.',
        'Inactivated whole-virus vaccine.'
      ],
      publicHealthImportance: [
        'Prevents acute hepatitis A infection.',
        'Recommended for children and travelers to endemic areas.',
        'Important in areas with improving sanitation but low natural immunity.'
      ]
    },
    {
      title: 'Easy Five (Pentavalent Vaccine)',
      image: '/Vaccines/pentavalent.jpg',
      identifyingFeatures: [
        'Combination vaccine containing DPT + Hepatitis B + Hib.',
        'Supplied as ready-to-use liquid formulation.'
      ],
      publicHealthImportance: [
        'Reduces number of injections and visits.',
        'Protects against five major childhood infections.',
        'Standard vaccine under UIP at 6, 10, 14 weeks.'
      ]
    },
    {
      title: 'Recombinant Hepatitis B Vaccine (Engerix-B)',
      image: '/Vaccines/hepB.jpg',
      identifyingFeatures: [
        'Clear liquid in prefilled syringe or vial.',
        'Labeled "Recombinant Hepatitis B Surface Antigen."'
      ],
      publicHealthImportance: [
        'Prevents hepatitis B infection and liver cancer.',
        'Given as birth dose and part of Pentavalent schedule.',
        'Ensures immunization of health workers and newborns.'
      ]
    },
    {
      title: 'Pneumococcal Conjugate Vaccine (PCV)',
      image: '/Vaccines/pcv.jpg',
      identifyingFeatures: [
        'Clear liquid in vial or prefilled syringe.',
        'Labeled "PCV 13" or "PCV 10".'
      ],
      publicHealthImportance: [
        'Prevents pneumonia, meningitis, and otitis media in children.',
        'Introduced under Mission Indradhanush for high-burden states.',
        'Reduces child mortality from ARI (Acute Respiratory Infections).'
      ]
    },
    {
      title: 'Human Diploid Cell Culture Rabies Vaccine (VERORAB)',
      image: '/Vaccines/rabies.jpg',
      identifyingFeatures: [
        'Freeze-dried vaccine with diluent; labeled "VERORAB."',
        'Clear or slightly opalescent after reconstitution.'
      ],
      publicHealthImportance: [
        'Prevents rabies after dog or animal bite.',
        'Used in pre- and post-exposure prophylaxis.',
        'Recommended under National Rabies Control Programme (NRCP).'
      ]
    },
    {
      title: 'Vaccine Carrier',
      image: '/Vaccines/vaccineCarrier.jpg',
      identifyingFeatures: [
        'Blue insulated box with tight lid and handle.',
        'Holds 4 ice packs; capacity 16–20 vials.'
      ],
      publicHealthImportance: [
        'Maintains cold chain (2–8°C) during outreach immunization.',
        'Used by ANMs and field workers during sessions.',
        'Essential component of immunization logistics.'
      ]
    },
    {
      title: 'Day Carrier',
      image: '/Vaccines/dayCarrier.jpg',
      identifyingFeatures: [
        'Smaller insulated box for same-day use.',
        'Portable; accommodates fewer vials (6–8).'
      ],
      publicHealthImportance: [
        'Ensures potency of vaccines during session days.',
        'Used for immunization camps and school health sessions.',
        'Integral to cold chain maintenance.'
      ]
    },
    {
      title: 'Ice Pack',
      image: '/Vaccines/icePack.jpg',
      identifyingFeatures: [
        'Plastic rectangular container filled with water; frozen before use.',
        'Used inside vaccine carriers.'
      ],
      publicHealthImportance: [
        'Maintains vaccine temperature between 2–8°C.',
        'Essential in cold chain equipment at all levels.',
        'Prevents vaccine spoilage during transport and storage.'
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FCD8CD' }}>
      <div style={{ padding: '80px 24px 24px 24px' }}>
        <h1 style={{ marginTop: 0, color: '#687FE5', fontSize: 32, textAlign: 'center' }}>
          Vaccines
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: '#687FE5', textAlign: 'center', maxWidth: 800, margin: '0 auto 32px' }}>
          Click on any item to learn more about its identifying features and public health importance.
        </p>
      </div>
      
      <NutritionWidget items={vaccineItems} />
    </div>
  );
};

export default Vaccines;
