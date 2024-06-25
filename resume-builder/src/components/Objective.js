import React from 'react';

const Objective = ({ formData, onChange }) => {
  return (
    <div className="form-section">
      <label>Objective:</label>
      <textarea
        placeholder="To obtain a challenging position..."
        value={formData}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Objective;

