// src/components/TechnicalSkills.js
import React from 'react';

const TechnicalSkills = ({ formData, onChange }) => {
  return (
    <div className="form-section">
      <label>Technical Skills:</label>
      <textarea
        placeholder="List your technical skills..."
        value={formData}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TechnicalSkills;
