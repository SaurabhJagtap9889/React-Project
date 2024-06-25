// src/components/Declaration.js
import React from 'react';

const Declaration = ({ formData, onChange }) => {
  return (
    <div className="form-section">
      <label>Declaration:</label>
      <textarea
        placeholder="Write your declaration..."
        value={formData}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Declaration;
