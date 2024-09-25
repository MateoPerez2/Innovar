// CustomArrow.js
import React from 'react';

export const PrevArrow = ({ className, style, onClick }) => (
  <button
    className={className}
    style={{
      ...style,
      display: 'block',
      position: 'absolute',
      left: '10px',
      zIndex: 2,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    }}
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" width="24" height="24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

export const NextArrow = ({ className, style, onClick }) => (
  <button
    className={className}
    style={{
      ...style,
      display: 'block',
      position: 'absolute',
      right: '10px',
      zIndex: 2,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    }}
    onClick={onClick}
    aria-label="Next Slide"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" width="24" height="24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);
