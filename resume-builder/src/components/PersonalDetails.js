// src/components/PersonalDetails.js
import React from 'react';

const PersonalDetails = ({ formData, onChange }) => {
  return (
    <div className="form-section">
      <label>Date of Birth:</label>
      <input
        type="date"
        value={formData.dob || ''}
        onChange={(e) => onChange('dob', e.target.value)}
      />
      <label>Nationality:</label>
      <input
        type="text"
        value={formData.nationality || ''}
        onChange={(e) => onChange('nationality', e.target.value)}
      />
      <label>Languages:</label>
      <textarea
        value={formData.languages || ''}
        onChange={(e) => onChange('languages', e.target.value)}
      />
    </div>
  );
};

export default PersonalDetails;
