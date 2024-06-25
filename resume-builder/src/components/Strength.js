// src/components/Strength.js
import React from 'react';

const Strength = ({ formData, onChange }) => {
  return (
    <div className="form-section">
      <label>Strengths:</label>
      <textarea
        placeholder="List your strengths..."
        value={formData}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Strength;
