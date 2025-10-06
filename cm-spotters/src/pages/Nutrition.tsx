import React from 'react';
import NutritionWidget from '../components/NutritionWidget';

const Nutrition: React.FC = () => {
  const nutritionItems = [
    {
      title: 'Milled Rice',
      image: '/Nutrition/milledRice.jpg',
      identifyingFeatures: [
        'White, polished grains with husk and bran layers removed.',
        'Smooth texture and shiny appearance.',
        'Lacks outer coating and germ portion.'
      ],
      publicHealthImportance: [
        'Polishing removes thiamine → risk of beriberi.',
        'Common staple in South India; rice fortification with iron, folic acid, and B12 helps address micronutrient deficiencies.',
        'Indicator of diet quality and milling practices in communities.'
      ]
    },
    {
      title: 'Wheat',
      image: '/Nutrition/wheat.jpg',
      identifyingFeatures: [
        'Brownish-yellow elongated grains with crease on one side.',
        'Rough texture with bran intact (whole wheat).'
      ],
      publicHealthImportance: [
        'Rich in complex carbohydrates, fiber, and B vitamins.',
        'Staple cereal in North India; used in chapatis and bread.',
        'Whole wheat promotes digestive health and helps prevent NCDs.'
      ]
    },
    {
      title: 'Ragi (Finger Millet)',
      image: '/Nutrition/ragi.jpg',
      identifyingFeatures: [
        'Small round brown seeds.',
        'Hard texture, uniform in size.'
      ],
      publicHealthImportance: [
        'Rich in calcium, iron, and dietary fiber.',
        'Helps in anemia prevention and bone health.',
        'Good option for diabetics due to low glycemic index.'
      ]
    },
    {
      title: 'Jowar (Sorghum)',
      image: '/Nutrition/jowar.jpg',
      identifyingFeatures: [
        'Round to oval grains, pale yellow or white.',
        'Smooth, slightly shiny surface.'
      ],
      publicHealthImportance: [
        'Gluten-free cereal → useful for celiac patients.',
        'Source of energy and protein in semi-arid regions.',
        'Important for *food security* and drought resilience.'
      ]
    },
    {
      title: 'Puffed Rice (Mandakki / Lai / Murmura)',
      image: '/Nutrition/puffedRice.jpg',
      identifyingFeatures: [
        'Light, expanded, white grains.',
        'Crisp texture, low weight.'
      ],
      publicHealthImportance: [
        'Ready-to-eat, easily digestible.',
        'Low nutrient density — often fortified in nutrition programs.',
        'Popular street food; hygiene during preparation is important.'
      ]
    },
    {
      title: 'Flaked Rice (Avalakki / Poha)',
      image: '/Nutrition/flakedRice.jpg',
      identifyingFeatures: [
        'Flattened, white to off-white flakes',
        'Thin, dry, and light texture.'
      ],
      publicHealthImportance: [
        'Common breakfast item; often fortified with iron.',
        'Easy to cook and digest — used in supplementary feeding programs.',
        'Can be part of balanced diet if combined with pulses and vegetables.'
      ]
    },
    {
      title: 'Bengal Gram (Chana Dal)',
      image: '/Nutrition/chanaDal.jpg',
      identifyingFeatures: [
        'Yellow split lentils, round with angular edges.',
        'Matte surface, medium size.'
      ],
      publicHealthImportance: [
        'Rich in protein and iron.',
        'Improves protein quality when combined with cereals.',
        'Used in mid-day meals to address protein-energy malnutrition (PEM).'
      ]
    },
    {
      title: 'Green Gram (Moong)',
      image: '/Nutrition/greenGram.jpg',
      identifyingFeatures: [
        'Small green cylindrical seeds.',
        'Smooth and shiny surface.'
      ],
      publicHealthImportance: [
        'High in protein, vitamin C (when sprouted), and fiber.',
        'Easily digestible; suitable for infants and elderly.',
        'Common in therapeutic diets for recovery.'
      ]
    },
    {
      title: 'Red Gram Dal (Tur Dal / Arhar)',
      image: '/Nutrition/redGram.jpg',
      identifyingFeatures: [
        'Yellowish split dal, lens-shaped.',
        'Smooth surface, mild luster.'
      ],
      publicHealthImportance: [
        'Major source of dietary protein in Indian diets.',
        'Combines well with cereals to improve amino acid balance.',
        'Rich in folate and iron — important for maternal nutrition.'
      ]
    },
    {
      title: 'Soya Bean / Chunks',
      image: '/Nutrition/soyaChunk.jpg',
      identifyingFeatures: [
        'Pale yellow, round, flat beans (raw).',
        'Soya chunks: dehydrated, porous texture.'
      ],
      publicHealthImportance: [
        'Highest plant-based protein (~40%).',
        'Used in midday meal fortification and vegan diets.',
        'Helps reduce cholesterol and support heart health.'
      ]
    },
    {
      title: 'Black Gram Dal (Urad)',
      image: '/Nutrition/blackGram.jpg',
      identifyingFeatures: [
        'Small, black, oval seeds; creamy interior when split.',
        'Slightly sticky texture when cooked.'
      ],
      publicHealthImportance: [
        'Rich in protein and iron.',
        'Important for traditional fermented foods like idli and dosa.',
        'Enhances dietary diversity and protein adequacy.'
      ]
    },
    {
      title: 'Coconut Oil',
      image: '/Nutrition/coconutOil.jpg',
      identifyingFeatures: [
        'Clear, colorless to pale yellow oil.',
        'Distinct coconut aroma.'
      ],
      publicHealthImportance: [
        'High in saturated fats (medium-chain triglycerides).',
        'Used traditionally in South India; moderation needed in heart disease.',
        'Locally available and used for cooking and hair care.'
      ]
    },
    {
      title: 'Palm Oil',
      image: '/Nutrition/palmOil.jpg',
      identifyingFeatures: [
        'Semi-solid at room temperature; orange-yellow color.',
        'Mild aroma, neutral taste.'
      ],
      publicHealthImportance: [
        'Rich in vitamin A precursors (carotenoids).',
        'Widely used in commercial foods due to low cost.',
        'Requires regulation to limit trans fats and promote heart health.'
      ]
    },
    {
      title: 'Groundnut Oil',
      image: '/Nutrition/groundnutOil.jpg',
      identifyingFeatures: [
        'Light yellow oil with nutty smell.',
        'Smooth, non-sticky texture.'
      ],
      publicHealthImportance: [
        'Contains unsaturated fatty acids → heart-healthy.',
        'Locally available edible oil in rural India.',
        'Used in nutrition programs and household cooking.'
      ]
    },
    {
      title: 'Sunflower Oil',
      image: '/Nutrition/sunflowerOil.jpg',
      identifyingFeatures: [
        'Clear, light yellow oil.',
        'Odorless or mild smell.'
      ],
      publicHealthImportance: [
        'Rich in PUFAs and vitamin E.',
        'Recommended oil for cardiovascular health.',
        'Common in edible oil fortification programs.'
      ]
    },
    {
      title: 'Groundnut (Peanut)',
      image: '/Nutrition/groundnut.jpg',
      identifyingFeatures: [
        'Oval seeds covered by thin brown skin.',
        'Enclosed in a light brown shell with 2–3 seeds inside.'
      ],
      publicHealthImportance: [
        'Rich in protein, healthy fats, and niacin.',
        'Used in energy-dense snacks and ready-to-use therapeutic food (RUTF).',
        'Can cause allergy in sensitive individuals.'
      ]
    },
    {
      title: 'Green Leafy Vegetables',
      image: '/Nutrition/greenLeafy.jpg',
      identifyingFeatures: [
        'Various leafy parts (spinach, amaranth, etc.).',
        'Deep green color, soft texture.'
      ],
      publicHealthImportance: [
        'Rich in iron, folate, calcium, and vitamin A.',
        'Crucial for anemia and malnutrition prevention.',
        'Promote dietary diversity and gut health.'
      ]
    },
    {
      title: 'Jaggery',
      image: '/Nutrition/jaggery.jpg',
      identifyingFeatures: [
        'Golden brown, amorphous solid or block.',
        'Sticky and sweet; unrefined sugarcane product.'
      ],
      publicHealthImportance: [
        'Contains iron, calcium, and molasses.',
        'Healthier alternative to refined sugar.',
        'Used in iron supplementation programs and traditional diets.'
      ]
    },
    {
      title: 'Milk',
      image: '/Nutrition/milk.jpg',
      identifyingFeatures: [
        'White opaque liquid, smooth consistency.',
        'Characteristic odor and bland taste.'
      ],
      publicHealthImportance: [
        'Rich in calcium, protein, and riboflavin.',
        'Essential for child growth and bone health.',
        'Used in school feeding and maternal nutrition programs.'
      ]
    },
    {
      title: 'Egg',
      image: '/Nutrition/egg.jpg',
      identifyingFeatures: [
        'Oval white or brown shell; distinct albumen and yolk.',
        'Uniform size and shape.'
      ],
      publicHealthImportance: [
        'High-quality protein and vitamin B12 source.',
        'Part of midday meal and ICDS menu.',
        'Promotes child growth and prevents protein deficiency.'
      ]
    },
    {
      title: 'Iodized Salt',
      image: '/Nutrition/salt.jpg',
      identifyingFeatures: [
        'Fine, white crystals.',
        'Slight iodine odor (mild chemical smell).'
      ],
      publicHealthImportance: [
        'Prevents iodine deficiency disorders (IDD).',
        'Universal salt iodization is a major public health success.',
        'Simple, cost-effective intervention for goiter prevention.'
      ]
    },
    {
      title: 'Alcoholic Beverages',
      image: '/Nutrition/alcoholic.jpg',
      identifyingFeatures: [
        'Fermented or distilled liquids (beer, wine, spirits).',
        'Characteristic odor, color varies with type.'
      ],
      publicHealthImportance: [
        'Contributes to NCDs, accidents, and social problems.',
        'Regulated under National Mental Health and Substance Control Programs.',
        'Public health focus on harm reduction and awareness.'
      ]
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <div style={{ padding: '80px 24px 24px 24px' }}>
        <h1 style={{ marginTop: 0, color: '#1e293b', fontSize: 32, textAlign: 'center' }}>
          Nutrition
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: '#475569', textAlign: 'center', maxWidth: 800, margin: '0 auto 32px' }}>
          Click on any item to learn more about its identifying features and public health importance.
        </p>
      </div>
      
      <NutritionWidget items={nutritionItems} />
    </div>
  );
};

export default Nutrition;
