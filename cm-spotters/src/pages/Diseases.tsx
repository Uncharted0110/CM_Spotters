import React from 'react';
import NutritionWidget from '../components/NutritionWidget';

const Diseases: React.FC = () => {
  const communicableDiseaseItems = [
    {
      title: 'Oral Rehydration Solution (ORS)',
      image: '/Diseases/ors.jpg',
      identifyingFeatures: [
        'Packet containing white crystalline powder.',
        'On reconstitution, gives a clear solution with slightly saline taste.',
        'Composition includes glucose and electrolytes (NaCl, KCl, trisodium citrate, glucose).'
      ],
      publicHealthImportance: [
        'Life-saving in acute diarrheal diseases and dehydration.',
        'Cornerstone of the National Diarrhoeal Disease Control Programme.',
        'Promotes community-level management and reduces mortality.'
      ]
    },
    {
      title: 'Chloroquine (Antimalarial)',
      image: '/Diseases/chloroquine.jpg',
      identifyingFeatures: [
        'White crystalline tablets labeled as "Chloroquine phosphate."',
        'Commonly available in 150 mg base tablets.'
      ],
      publicHealthImportance: [
        'Once the mainstay for malaria treatment and prophylaxis.',
        'Now used selectively due to Plasmodium falciparum resistance.',
        'Part of National Vector Borne Disease Control Programme (NVBDCP) drug kits.'
      ]
    },
    {
      title: 'TB (DOTS Box / Antitubercular Drugs)',
      image: '/Diseases/tb.jpg',
      identifyingFeatures: [
        'Blister pack or box containing fixed-dose combinations of Rifampicin, Isoniazid, Pyrazinamide, Ethambutol.',
        'Usually color-coded for intensive and continuation phases.'
      ],
      publicHealthImportance: [
        'Directly Observed Treatment, Short Course (DOTS) is the core of the National TB Elimination Programme (NTEP).',
        'Ensures treatment compliance and prevents drug resistance.',
        'Essential for TB control and achieving elimination targets by 2025 (India).'
      ]
    },
    {
      title: 'Tuberculin Syringe',
      image: '/Diseases/tuberculinSyringe.jpg',
      identifyingFeatures: [
        '1 ml capacity syringe with fine gradations (0.1 ml marked clearly).',
        'Fixed fine-gauge needle, used for intradermal injection.'
      ],
      publicHealthImportance: [
        'Used for Mantoux test to detect latent TB infection.',
        'Aids in TB diagnosis and epidemiological surveys.',
        'Helps in assessing BCG vaccination response and infection prevalence.'
      ]
    },
    {
      title: 'Vitamin A Concentrate',
      image: '/Diseases/vitaminA.jpg',
      identifyingFeatures: [
        'Amber-colored liquid or capsules (blue plastic bottles in program use).',
        'Stored in light-resistant container.'
      ],
      publicHealthImportance: [
        'Prevents xerophthalmia and night blindness in children.',
        'Administered under the National Programme for Prophylaxis against Nutritional Blindness.',
        'Given at 9 months and every 6 months up to 5 years in RCH programs.'
      ]
    },
    {
      title: 'ART (Antiretroviral Therapy) Kit / Drugs',
      image: '/Diseases/art.jpg',
      identifyingFeatures: [
        'Pack of tablets such as Tenofovir, Lamivudine, and Efavirenz.',
        'Labeled as "ART" or "ARV drugs", distributed through government ART centers.'
      ],
      publicHealthImportance: [
        'Key to HIV/AIDS control under the National AIDS Control Programme (NACP).',
        'Reduces viral load, prevents opportunistic infections, and transmission.',
        'Ensures free universal access through government health facilities.'
      ]
    }
  ];

  const nonCommunicableDiseaseItems = [
    {
      title: 'Rule of Halves (Hypertension)',
      image: '/Diseases/ruleOfHalves.jpg',
      identifyingFeatures: [
        'A conceptual model or chart showing:',
        'Half of hypertensives are undiagnosed,',
        'Half of diagnosed are untreated,',
        'Half of treated are uncontrolled.'
      ],
      publicHealthImportance: [
        'Highlights the gap in detection and management of hypertension.',
        'Guides screening and awareness programs for NCDs.',
        'Supports health system strengthening under NPNCD.'
      ]
    },
    {
      title: 'Tracking of Blood Pressure',
      image: '/Diseases/trackingBP.jpg',
      identifyingFeatures: [
        'Mercury or digital sphygmomanometer with stethoscope.',
        'Charts or graphs showing periodic BP readings.'
      ],
      publicHealthImportance: [
        'Regular monitoring helps in early detection of hypertension.',
        'Essential for follow-up in NCD clinics.',
        'Promotes patient education and lifestyle modification.'
      ]
    },
    {
      title: 'Cigarette',
      image: '/Diseases/cigarette.jpg',
      identifyingFeatures: [
        'Cylindrical roll of tobacco wrapped in paper with filter tip.',
        'Distinct smell of burning tobacco.'
      ],
      publicHealthImportance: [
        'Major cause of lung cancer, COPD, and cardiovascular diseases.',
        'Targeted under National Tobacco Control Programme (NTCP).',
        'Subject to regulation under COTPA 2003 (warnings, advertising bans).'
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FCD8CD' }}>
      <div style={{ padding: '80px 24px 24px 24px' }}>
        <h1 style={{ marginTop: 0, color: '#687FE5', fontSize: 32, textAlign: 'center' }}>
          Communicable and Non-Communicable Diseases
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: '#687FE5', textAlign: 'center', maxWidth: 800, margin: '0 auto 32px' }}>
          Click on any item to learn more about its identifying features and public health importance.
        </p>
      </div>

      {/* Communicable Diseases Section */}
      <div style={{ padding: '24px', background: '#FEEBF6', marginBottom: 32 }}>
        <h2 style={{ color: '#687FE5', fontSize: 28, textAlign: 'center', marginTop: 0, marginBottom: 24 }}>
          Communicable Diseases
        </h2>
        <NutritionWidget items={communicableDiseaseItems} />
      </div>

      {/* Non-Communicable Diseases Section */}
      <div style={{ padding: '24px', background: '#FEEBF6' }}>
        <h2 style={{ color: '#687FE5', fontSize: 28, textAlign: 'center', marginTop: 0, marginBottom: 24 }}>
          Non-Communicable Diseases
        </h2>
        <NutritionWidget items={nonCommunicableDiseaseItems} />
      </div>
    </div>
  );
};

export default Diseases;
