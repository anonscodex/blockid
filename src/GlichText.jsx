import React from 'react';
import './GlitchText.css'; // Import the CSS file for styling

const GlitchText = ({ text }) => {
  return (
    <div className="glitch text-4xl md:text-6xl lg:text-8xl " data-text={text}>
      {text}
    </div>
  );
};

export default GlitchText;