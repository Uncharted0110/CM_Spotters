import React from 'react';
import NutritionWidget from '../components/NutritionWidget';

const MCHFamilyPlanning: React.FC = () => {
  const mchItems = [
    {
      title: 'Iron & Folic Acid (IFA) Tablets',
      image: '/MCH/ifa.jpg',
      identifyingFeatures: [
        'Small red tablets (adult) or blue (child), packaged in blister strips.',
        'Each adult tablet contains 100 mg elemental iron + 500 µg folic acid.'
      ],
      publicHealthImportance: [
        'Prevents iron deficiency anemia in women and children.',
        'Distributed free under the Anemia Mukt Bharat initiative.',
        'Reduces maternal mortality and improves pregnancy outcomes.'
      ]
    },
    {
      title: 'Disposable Delivery Kit (DDK)',
      image: '/MCH/ddk.jpg',
      identifyingFeatures: [
        'Sterile packet containing blade, cord clamp, soap, plastic sheet, and ties.',
        'Usually labeled as "Clean Delivery Kit."'
      ],
      publicHealthImportance: [
        'Promotes clean and safe home deliveries.',
        'Prevents puerperal sepsis and neonatal infections.',
        'Part of Safe Motherhood and Janani Suraksha Yojana (JSY) strategies.'
      ]
    },
    {
      title: 'Under-Five Clinic',
      image: '/MCH/underFiveClinic.jpg',
      identifyingFeatures: [
        'Designated clinic area for child growth monitoring and immunization.',
        'Provides comprehensive, preventive, promotive, curative and educational services for childeren under the age of 5.'
      ],
      publicHealthImportance: [
        'Provides preventive, promotive, and curative care for under-five children.',
        'Helps in early detection of malnutrition and developmental delays.',
        'Backbone of RCH-II and IMNCI programs.'
      ]
    },
    {
      title: 'Growth Chart (ICDS)',
      image: '/MCH/growthChart.jpg',
      identifyingFeatures: [
        'Chart with weight-for-age curves (color-coded zones).',
        'X-axis: Age in months; Y-axis: Weight in kg.'
      ],
      publicHealthImportance: [
        'Tool for growth monitoring and nutrition surveillance.',
        'Helps classify undernutrition (mild/moderate/severe).',
        'Integral part of Anganwadi and under-five clinics.'
      ]
    },
    {
      title: 'Intrauterine Contraceptive Device (IUCD)',
      image: '/MCH/iucd.jpg',
      identifyingFeatures: [
        'T-shaped plastic device with copper wire (e.g., CuT 380A).',
        'Has threads for retrieval.'
      ],
      publicHealthImportance: [
        'Long-term reversible contraceptive (up to 10 years).',
        'Part of Family Planning Programme under RCH.',
        'Reduces unintended pregnancies and maternal mortality.'
      ]
    },
    {
      title: 'Oral Contraceptive Pills (OCPs)',
      image: '/MCH/ocps.jpg',
      identifyingFeatures: [
        'Blister pack containing 21 or 28 small tablets.',
        'Each tablet labeled with day of the week.'
      ],
      publicHealthImportance: [
        'Provides temporary reversible contraception.',
        'Part of OCP promotional scheme in family planning.',
        'Helps in spacing births and reducing unsafe abortions.'
      ]
    },
    {
      title: 'Condom',
      image: '/MCH/condom.jpg',
      identifyingFeatures: [
        'Latex sheath, rolled and packaged individually.',
        'Available in various sizes and colors.'
      ],
      publicHealthImportance: [
        'Prevents pregnancy and sexually transmitted infections (including HIV).',
        'Promoted under NACP and Family Welfare Programme.',
        'Encourages male participation in contraception and reproductive health.'
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <div style={{ padding: '80px 24px 24px 24px' }}>
        <h1 style={{ marginTop: 0, color: '#1e293b', fontSize: 32, textAlign: 'center' }}>
          MCH and Family Planning
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: '#475569', textAlign: 'center', maxWidth: 800, margin: '0 auto 32px' }}>
          Click on any item to learn more about its identifying features and public health importance.
        </p>
      </div>
      
      <NutritionWidget items={mchItems} />
    </div>
  );
};

export default MCHFamilyPlanning;
