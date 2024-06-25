// src/components/Highlights.js
import React from 'react';

const Highlights = ({ formData, onChange }) => {
  return (
    <div className="form-section">
      <label>Highlights:</label>
      <textarea
        placeholder="Highlights of your profile..."
        value={formData}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Highlights;
