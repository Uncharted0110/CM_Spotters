import React, { useState, useEffect, useCallback } from 'react';
import {
  Hash,
  User,
  Building,
  Book as BookIcon,
  X,
  Ruler,
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';

export interface StoreLink {
  name: string;
  url: string;
  logo: string;
  bg: string;
  hoverBg: string;
}

export interface BookData {
  title: string;
  isbn: string;
  authors: string;
  publisher: string;
  edition: string;
  dimensions: string;
  pages: string;
  description: string;
  salientFeatures: { icon: React.ReactNode; text: string }[];
  images: string[];
  stores: StoreLink[];
}

const Book: React.FC<{ book: BookData }> = ({ book }) => {
  const [selectedImage, setSelectedImage] = useState(book.images[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [thumbStart, setThumbStart] = useState(0);
  const thumbWindow = 4;
  const selectedIdx = book.images.indexOf(selectedImage);

  const showPrev = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setSelectedImage(book.images[(selectedIdx - 1 + book.images.length) % book.images.length]);
  }, [selectedIdx, book.images]);
  const showNext = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setSelectedImage(book.images[(selectedIdx + 1) % book.images.length]);
  }, [selectedIdx, book.images]);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
      if (e.key === ' ChevronLeft') showPrev(e);
      if (e.key === ' ChevronRight') showNext(e);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalOpen, showPrev, showNext]);

  return (
    <div style={{
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
      padding: 36,
      display: 'flex',
      flexDirection: 'row',
      gap: 48,
      maxWidth: 1100,
      width: '95%',
      alignItems: 'flex-start',
    }}>
      {/* Image Gallery */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 320 }}>
        <div
          style={{
            width: 300,
            height: 400,
            border: '1px solid #eee',
            borderRadius: 8,
            marginBottom: 16,
            background: '#fafafa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-in',
            boxShadow: '0 2px 8px #0001',
          }}
          onClick={() => setModalOpen(true)}
          title="Click to view larger"
        >
          <img
            src={selectedImage}
            alt="Book Preview"
            style={{ maxWidth: '95%', maxHeight: '95%', borderRadius: 6, objectFit: 'contain' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 2 }}>
          {/* Left Arrow */}
          <button
            onClick={() => setThumbStart(Math.max(0, thumbStart - 1))}
            disabled={thumbStart === 0}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 28,
              color: thumbStart === 0 ? '#ccc' : '#ff9800',
              cursor: thumbStart === 0 ? 'not-allowed' : 'pointer',
              padding: 0,
              marginRight: 2,
              userSelect: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Previous images"
          >
            <ChevronLeft />
          </button>
          {/* Thumbnails Window */}
          <div style={{ display: 'flex', gap: 8 }}>
            {book.images.slice(thumbStart, thumbStart + thumbWindow).map((img, idx) => (
              <img
                key={img}
                src={img}
                alt={`Book thumbnail ${thumbStart + idx + 1}`}
                onClick={() => { setSelectedImage(img); setModalOpen(false); }}
                style={{
                  width: 48,
                  height: 64,
                  objectFit: 'cover',
                  border: selectedImage === img ? '2px solid #ff9800' : '1px solid #ccc',
                  borderRadius: 4,
                  cursor: 'pointer',
                  boxShadow: selectedImage === img ? '0 2px 8px #ff980033' : 'none',
                  transition: 'border 0.2s, box-shadow 0.2s',
                  background: '#fff',
                  flex: '0 0 auto',
                }}
              />
            ))}
          </div>
          {/* Right Arrow */}
          <button
            onClick={() => setThumbStart(Math.min(book.images.length - thumbWindow, thumbStart + 1))}
            disabled={thumbStart >= book.images.length - thumbWindow}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 28,
              color: thumbStart >= book.images.length - thumbWindow ? '#ccc' : '#ff9800',
              cursor: thumbStart >= book.images.length - thumbWindow ? 'not-allowed' : 'pointer',
              padding: 0,
              marginLeft: 2,
              userSelect: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Next images"
          >
            <ChevronRight />
          </button>
        </div>
        {/* Store Links */}
        <div style={{ width: '100%', marginTop: 24, textAlign: 'center' }}>
          <div style={{ fontWeight: 600, fontSize: 18, color: '#0927acff', marginBottom: 10 }}>Stores</div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: 400,
              margin: '0 auto',
            }}
          >
            {book.stores.map(store => (
              <a
                key={store.name}
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: store.bg,
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 17,
                  padding: '10px 18px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.10)',
                  transition: 'background 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.background = store.hoverBg)}
                onMouseOut={e => (e.currentTarget.style.background = store.bg)}
              >
                <img src={store.logo} alt={store.name} style={{ width: 28, height: 28, objectFit: 'contain', background: '#fff', borderRadius: 4, padding: 2 }} /> {store.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Book Details */}
      <div style={{ maxWidth: 520, textAlign: 'left' }}>
        <h1 style={{ fontSize: 32, marginBottom: 8, color: '#0927acff' }}>{book.title}</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 10, flexWrap: 'wrap' }}>
          <Hash size={20} color="#667eea" />
          <span style={{ fontSize: 17, color: '#555' }}>ISBN: {book.isbn}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 10, flexWrap: 'wrap' }}>
          <User size={20} color="#667eea" />
          <span style={{ fontSize: 17, color: '#555' }}>{book.authors}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 10, flexWrap: 'wrap' }}>
          <Building size={20} color="#667eea" />
          <span style={{ fontSize: 17, color: '#555' }}>{book.publisher}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 10, flexWrap: 'wrap' }}>
          <BookIcon size={20} color="#667eea" />
          <span style={{ fontSize: 17, color: '#555' }}>{book.edition}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18, flexWrap: 'wrap' }}>
          <Ruler size={20} color="#667eea" />
          <span style={{ fontSize: 17, color: '#555' }}>{book.dimensions} | {book.pages} pages</span>
        </div>
        <div style={{ fontSize: 16, marginBottom: 18, color: '#222' }}>{book.description}</div>
        <div style={{ marginBottom: 18 }}>
          <b style={{ fontSize: 18, color: '#0927acff' }}>Salient Features</b>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: 10 }}>
            {book.salientFeatures.map((f, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 8, fontSize: 16, color: '#444' }}>
                {f.icon}
                {f.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Modal for viewing image with navigation and close */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            transition: 'background 0.2s',
          }}
          title="Click to close"
        >
          {/* Left arrow */}
          <button
            onClick={showPrev}
            style={{
              position: 'absolute',
              left: 32,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.4)',
              border: 'none',
              color: '#fff',
              borderRadius: '50%',
              width: 48,
              height: 48,
              cursor: 'pointer',
              zIndex: 10001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px #0006',
            }}
            aria-label="Previous image"
            tabIndex={0}
            onMouseDown={e => e.stopPropagation()}
          >
            < ChevronLeft size={32} color="#fff" />
          </button>
          {/* Main image */}
          <img
            src={selectedImage}
            alt="Book Large Preview"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: 12,
              boxShadow: '0 8px 32px #0008',
              background: '#fff',
              zIndex: 10000,
              cursor: 'default',
            }}
            onClick={e => e.stopPropagation()}
          />
          {/* Right arrow */}
          <button
            onClick={showNext}
            style={{
              position: 'absolute',
              right: 32,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.4)',
              border: 'none',
              color: '#fff',
              borderRadius: '50%',
              width: 48,
              height: 48,
              cursor: 'pointer',
              zIndex: 10001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px #0006',
            }}
            aria-label="Next image"
            tabIndex={0}
            onMouseDown={e => e.stopPropagation()}
          >
            < ChevronRight size={32} color="#fff" />
          </button>
          {/* Close button */}
          <button
            onClick={e => { e.stopPropagation(); setModalOpen(false); }}
            style={{
              position: 'absolute',
              top: 32,
              right: 32,
              background: 'rgba(0,0,0,0.4)',
              border: 'none',
              color: '#fff',
              borderRadius: '50%',
              width: 44,
              height: 44,
              cursor: 'pointer',
              zIndex: 10001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px #0006',
            }}
            aria-label="Close image viewer"
            tabIndex={0}
            onMouseDown={e => e.stopPropagation()}
          >
            <X size={28} color="#fff" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Book;
