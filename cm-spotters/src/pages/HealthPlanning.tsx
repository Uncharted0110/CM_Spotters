import React from 'react';
import NutritionWidget from '../components/NutritionWidget';

const HealthPlanning: React.FC = () => {
  const healthPlanningItems = [
    {
      title: 'Epidemiological Triad',
      image: '/HealthPlanning/epiTriad.jpg',
      identifyingFeatures: [
        'Diagram showing Agent–Host–Environment interconnected by triangles or circles.',
        'Each component labeled with examples.'
      ],
      publicHealthImportance: [
        'Simplest model to explain disease causation.',
        'Forms basis of preventive strategies by targeting any of the three components.',
        'Applied to both infectious and non-communicable diseases.'
      ]
    },
    {
      title: 'Web of Causation',
      image: '/HealthPlanning/webOfCausation.jpg',
      identifyingFeatures: [
        'Complex diagram with multiple interlinked factors contributing to disease.',
        'No single "primary cause"; shows multifactorial etiology.'
      ],
      publicHealthImportance: [
        'Useful for understanding chronic diseases like diabetes or CVD.',
        'Promotes multi-sectoral approach in prevention and health promotion.',
        'Highlights interrelationship of biological, behavioral, and social factors.'
      ]
    },
    {
      title: 'Iceberg Phenomenon of Disease',
      image: '/HealthPlanning/iceberg.jpg',
      identifyingFeatures: [
        'Diagram of iceberg: visible portion above water (clinical cases) and larger hidden portion below (subclinical/inapparent cases).'
      ],
      publicHealthImportance: [
        'Demonstrates that most disease burden is hidden or subclinical.',
        'Emphasizes importance of screening, surveillance, and prevention.',
        'Central concept in epidemiology and community diagnosis.'
      ]
    },
    {
      title: 'World Health Day',
      image: '/HealthPlanning/worldHealthDay.jpg',
      identifyingFeatures: [
        'Observed annually on 7th April.',
        'WHO\'s annual theme prominently displayed (e.g., "My Health, My Right" for 2024).'
      ],
      publicHealthImportance: [
        'Promotes global awareness on priority health issues.',
        'Encourages community participation and intersectoral collaboration.',
        'Acts as a platform for health education and advocacy.'
      ]
    },
    {
      title: 'Planning Cycle',
      image: '/HealthPlanning/planningCycle.jpg',
      identifyingFeatures: [
        'Circular flow diagram showing stages: Assessment → Setting objectives → Planning → Implementation → Evaluation → Replanning.'
      ],
      publicHealthImportance: [
        'Framework for systematic health program development.',
        'Used in National Health Programmes and project planning.',
        'Ensures rational use of resources and continuous improvement.'
      ]
    },
    {
      title: 'Propagated Epidemic',
      image: '/HealthPlanning/propagatedEpidemic.jpg',
      identifyingFeatures: [
        'Epidemic curve with multiple peaks at regular intervals.',
        'Reflects person-to-person transmission.'
      ],
      publicHealthImportance: [
        'Indicates diseases with secondary transmission (e.g., measles, hepatitis A).',
        'Guides control measures like isolation and contact tracing.',
        'Differentiates from common source outbreaks.'
      ]
    },
    {
      title: 'International Form of Death Certificate',
      image: '/HealthPlanning/deathCertificate.jpg',
      identifyingFeatures: [
        'WHO-standard form with Part I (sequence of causes) and Part II (other conditions).',
        'Includes fields for age, sex, date, and certifier\'s details.'
      ],
      publicHealthImportance: [
        'Ensures uniform coding of mortality data (ICD-10/11).',
        'Basis for vital statistics, health planning, and disease surveillance.',
        'Enables international comparison of mortality trends.'
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <div style={{ padding: '80px 24px 24px 24px' }}>
        <h1 style={{ marginTop: 0, color: '#1e293b', fontSize: 32, textAlign: 'center' }}>
          Concept of Health Planning and Epidemiology
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: '#475569', textAlign: 'center', maxWidth: 800, margin: '0 auto 32px' }}>
          Click on any item to learn more about its identifying features and public health importance.
        </p>
      </div>
      
      <NutritionWidget items={healthPlanningItems} />
    </div>
  );
};

export default HealthPlanning;
