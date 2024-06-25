// src/components/EducationalProfile.js
import React from 'react';

const EducationalProfile = ({ formData, onChange }) => {
  return (
    <div className="form-section">
      <label>Educational Profile:</label>
      <textarea
        placeholder="Education of your profile..."
        value={formData}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default EducationalProfile;
