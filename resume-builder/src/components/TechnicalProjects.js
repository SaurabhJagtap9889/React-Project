// src/components/TechnicalProjects.js
import React from 'react';

const TechnicalProjects = ({ formData, onChange }) => {
  return (
    <div className="form-section">
      <label>Technical Projects:</label>
      <textarea
        placeholder="Describe your technical projects..."
        value={formData}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TechnicalProjects;
