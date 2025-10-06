import React, { useState } from 'react';

interface NutritionItem {
  title: string;
  image: string;
  identifyingFeatures: string[];
  publicHealthImportance: string[];
}

interface NutritionWidgetProps {
  items: NutritionItem[];
}

const NutritionWidget: React.FC<NutritionWidgetProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<NutritionItem | null>(null);

  const openModal = (item: NutritionItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      {/* Grid of cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: 20,
        padding: 24
      }}>
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => openModal(item)}
            style={{
              background: '#ffffff',
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            {/* Image */}
            <div style={{
              width: '100%',
              height: 180,
              background: '#f1f5f9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            {/* Title */}
            <div style={{ padding: 16 }}>
              <h3 style={{ margin: 0, color: '#1e293b', fontSize: 18, fontWeight: 600 }}>
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedItem && (
        <div
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: 20,
            overflowY: 'auto'
          }}
        >
          {/* Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              borderRadius: 16,
              maxWidth: 700,
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: '#ef4444',
                border: 'none',
                borderRadius: '50%',
                width: 36,
                height: 36,
                color: '#ffffff',
                fontSize: 20,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                zIndex: 1
              }}
            >
              ×
            </button>

            {/* Image */}
            <div style={{
              width: '100%',
              height: 300,
              background: '#f1f5f9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16
            }}>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Content */}
            <div style={{ padding: 32 }}>
              <h2 style={{ marginTop: 0, color: '#1e293b', fontSize: 28, fontWeight: 700 }}>
                {selectedItem.title}
              </h2>

              {/* Identifying Features */}
              <div style={{ marginTop: 24 }}>
                <h3 style={{ color: '#667eea', fontSize: 20, fontWeight: 600, fontStyle: 'italic' }}>
                  Identifying features:
                </h3>
                <ul style={{ lineHeight: 1.8, color: '#475569', marginTop: 12 }}>
                  {selectedItem.identifyingFeatures.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Public Health Importance */}
              <div style={{ marginTop: 24 }}>
                <h3 style={{ color: '#667eea', fontSize: 20, fontWeight: 600, fontStyle: 'italic' }}>
                  Public health importance:
                </h3>
                <ul style={{ lineHeight: 1.8, color: '#475569', marginTop: 12 }}>
                  {selectedItem.publicHealthImportance.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NutritionWidget;
