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
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLandscape, setIsLandscape] = useState<boolean>(window.innerWidth > window.innerHeight);

  // Update layout on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = (item: NutritionItem) => {
    const index = items.findIndex(i => i.title === item.title);
    setCurrentIndex(index);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
    setSelectedItem(items[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);
    setSelectedItem(items[prevIndex]);
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
              background: '#f29174ff',
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
              paddingTop: '100%',
              position: 'relative',
              background: '#f1f5f9',
              overflow: 'hidden'
            }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            {/* Title */}
            <div style={{ padding: 16 }}>
              <h3 style={{ margin: 0, color: '#0732f3ff', fontSize: 18, fontWeight: 600 }}>
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedItem && !isFullscreen && (
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
          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            style={{
              position: 'fixed',
              left: 40,
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#687FE5',
              border: 'none',
              borderRadius: '50%',
              width: 48,
              height: 48,
              color: '#ffffff',
              fontSize: 24,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              zIndex: 2001,
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#5568CC';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#687FE5';
            }}
          >
            ‹
          </button>

          {/* Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#FCD8CD',
              borderRadius: 16,
              maxWidth: 1000,
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              flexDirection: isLandscape ? 'row' : 'column'
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

            {/* Image - Top (portrait) or Left Side (landscape) */}
            <div style={{
              flex: isLandscape ? '0 0 40%' : '0 0 auto',
              minHeight: isLandscape ? '100%' : '300px',
              maxHeight: isLandscape ? 'auto' : '400px',
              background: '#FCD8CD',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'visible',
              borderTopLeftRadius: 16,
              borderTopRightRadius: isLandscape ? 0 : 16,
              borderBottomLeftRadius: isLandscape ? 16 : 0,
              position: 'relative',
              padding: '20px'
            }}>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  marginLeft: isLandscape ? '16px' : '0'
                }}
              />
              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                style={{
                  position: 'absolute',
                  bottom: 16,
                  right: 16,
                  background: '#3b82f6',
                  border: 'none',
                  borderRadius: 8,
                  padding: '8px 12px',
                  color: '#ffffff',
                  fontSize: 14,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#3b82f6';
                }}
              >
                ⛶
              </button>
            </div>

            {/* Content - Bottom (portrait) or Right Side (landscape) */}
            <div style={{ flex: '1', padding: 32, overflowY: 'auto' }}>
              <h2 style={{ marginTop: 0, color: '#687FE5', fontSize: 28, fontWeight: 700 }}>
                {selectedItem.title}
              </h2>

              {/* Identifying Features */}
              <div style={{ marginTop: 24 }}>
                <h3 style={{ color: '#687FE5', fontSize: 20, fontWeight: 600, fontStyle: 'italic' }}>
                  Identifying features:
                </h3>
                <ul style={{ lineHeight: 1.8, color: '#687FE5', marginTop: 12 }}>
                  {selectedItem.identifyingFeatures.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Public Health Importance */}
              <div style={{ marginTop: 24 }}>
                <h3 style={{ color: '#687FE5', fontSize: 20, fontWeight: 600, fontStyle: 'italic' }}>
                  Public health importance:
                </h3>
                <ul style={{ lineHeight: 1.8, color: '#687FE5', marginTop: 12 }}>
                  {selectedItem.publicHealthImportance.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            style={{
              position: 'fixed',
              right: 40,
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#687FE5',
              border: 'none',
              borderRadius: '50%',
              width: 48,
              height: 48,
              color: '#ffffff',
              fontSize: 24,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              zIndex: 2001,
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#5568CC';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#687FE5';
            }}
          >
            ›
          </button>
        </div>
      )}

      {/* Fullscreen Image Overlay */}
      {selectedItem && isFullscreen && (
        <div
          onClick={toggleFullscreen}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 3000,
            padding: 40
          }}
        >
          <img
            src={selectedItem.image}
            alt={selectedItem.title}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain'
            }}
          />
          {/* Close Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              background: '#ef4444',
              border: 'none',
              borderRadius: '50%',
              width: 48,
              height: 48,
              color: '#ffffff',
              fontSize: 24,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
            }}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default NutritionWidget;
