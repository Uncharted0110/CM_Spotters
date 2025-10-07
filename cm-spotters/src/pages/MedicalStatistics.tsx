import React from 'react';
import NutritionWidget from '../components/NutritionWidget';

const MedicalStatistics: React.FC = () => {
  const statisticsItems = [
    {
      title: 'Simple Bar Chart',
      image: '/MedicalStatistics/simpleBar.jpg',
      identifyingFeatures: [
        'Single bars of equal width with unequal heights.',
        'Represents one variable across different categories.',
        'Bars separated by equal gaps.'
      ],
      publicHealthImportance: [
        'Used for comparing discrete data (e.g., malaria cases by village).',
        'Simplest and most commonly used statistical diagram.',
        'Aids in quick visual comparison of frequencies.'
      ]
    },
    {
      title: 'Multiple Bar Chart',
      image: '/MedicalStatistics/multipleBar.jpg',
      identifyingFeatures: [
        'Two or more bars grouped together for each category.',
        'Each bar represents a different sub-group (e.g., male vs female).'
      ],
      publicHealthImportance: [
        'Used to compare two or more related variables over the same categories.',
        'Demonstrates sex-wise or year-wise comparisons in health data.',
        'Useful in trend analysis and report presentations.'
      ]
    },
    {
      title: 'Histogram',
      image: '/MedicalStatistics/histogram.jpg',
      identifyingFeatures: [
        'Adjacent bars without gaps, representing continuous data.',
        'X-axis shows class intervals; Y-axis shows frequency.'
      ],
      publicHealthImportance: [
        'Depicts frequency distribution of variables like age or Hb levels.',
        'Helps visualize skewness or normality of data.',
        'Foundation for constructing frequency polygons.'
      ]
    },
    {
      title: 'Frequency Polygon',
      image: '/MedicalStatistics/frequencyPolygon.jpg',
      identifyingFeatures: [
        'Line graph joining midpoints of histogram bars.',
        'Starts and ends at baseline (zero frequency).'
      ],
      publicHealthImportance: [
        'Useful to compare two frequency distributions on one graph.',
        'Simpler visual for continuous data.',
        'Illustrates dispersion and distribution shape.'
      ]
    },
    {
      title: 'Line Diagram',
      image: '/MedicalStatistics/lineDiagram.jpg',
      identifyingFeatures: [
        'Points plotted on graph paper joined by straight lines.',
        'Represents data over time (time series).'
      ],
      publicHealthImportance: [
        'Ideal for trend analysis (e.g., malaria cases over months).',
        'Quick tool for epidemic monitoring and forecasting.',
        'Commonly used in surveillance reports.'
      ]
    },
    {
      title: 'Pie Chart',
      image: '/MedicalStatistics/pieChart.jpg',
      identifyingFeatures: [
        'Circle divided into sectors proportional to data values.',
        'Each slice represents a category; often colored distinctly.'
      ],
      publicHealthImportance: [
        'Displays composition of a total (e.g., causes of death).',
        'Easy to interpret for general audiences.',
        'Commonly used in health education and reports.'
      ]
    },
    {
      title: 'Pictogram (Pictorial Diagram)',
      image: '/MedicalStatistics/pictogram.jpg',
      identifyingFeatures: [
        'Uses symbols or pictures to represent data values.',
        'Each picture represents a fixed quantity.'
      ],
      publicHealthImportance: [
        'Simplifies complex information for low-literacy populations.',
        'Effective tool in health education and IEC material.',
        'Useful for presenting community survey findings.'
      ]
    },
    {
      title: 'Spot Map',
      image: '/MedicalStatistics/spotMap.jpg',
      identifyingFeatures: [
        'Map showing spots or dots where cases occur.',
        'Each spot corresponds to one or more cases.'
      ],
      publicHealthImportance: [
        'Used for geographical distribution of disease cases.',
        'Helps identify clusters and outbreak sources.',
        'Classical tool in epidemiological field investigations (John Snow\'s cholera map).'
      ]
    },
    {
      title: 'Scatter Diagram (Scatter Plot)',
      image: '/MedicalStatistics/scatterPlot.jpg',
      identifyingFeatures: [
        'Dots plotted on X–Y axis showing relationship between two variables.',
        'Pattern may show positive, negative, or no correlation.'
      ],
      publicHealthImportance: [
        'Used to study correlation (e.g., smoking vs BP).',
        'Helps visualize strength and direction of association.',
        'Supports interpretation in epidemiological research.'
      ]
    },
    {
      title: 'Normal Curve (Gaussian Distribution)',
      image: '/MedicalStatistics/normalCurve.jpg',
      identifyingFeatures: [
        'Bell-shaped, symmetrical curve.',
        'Mean = Median = Mode at the center.'
      ],
      publicHealthImportance: [
        'Fundamental in biostatistics and probability.',
        'Describes distribution of biological variables (height, BP, Hb).',
        'Basis for standard deviation, Z-scores, and inferential statistics.'
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FCD8CD' }}>
      <div style={{ padding: '80px 24px 24px 24px' }}>
        <h1 style={{ marginTop: 0, color: '#687FE5', fontSize: 32, textAlign: 'center' }}>
          Medical Statistics
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: '#687FE5', textAlign: 'center', maxWidth: 800, margin: '0 auto 32px' }}>
          Click on any item to learn more about its identifying features and public health importance.
        </p>
      </div>
      
      <NutritionWidget items={statisticsItems} />
    </div>
  );
};

export default MedicalStatistics;
