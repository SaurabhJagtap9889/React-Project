import React from 'react';

const ResumeHeader = ({ formData, onChange }) => {
  return (
    <div className="form-section">
      <label>Name:</label>
      <input
        type="text"
        placeholder="text"
        value={formData.name || ''}
        onChange={(e) => onChange('name', e.target.value)}
      />
      <label>Title:</label>
      <input
        type="text"
        placeholder="Software Engineer"
        value={formData.title || ''}
        onChange={(e) => onChange('title', e.target.value)}
      />
      <label>Email:</label>
      <input
        type="email"
        placeholder="example@gmail.com"
        value={formData.email || ''}
        onChange={(e) => onChange('email', e.target.value)}
      />
      <label>Phone:</label>
      <input
        type="text"
        placeholder="number"
        value={formData.phone || ''}
        onChange={(e) => onChange('phone', e.target.value)}
      />
      <label>LinkedIn:</label>
      <input
        type="text"
        placeholder="LinkedIn URL"
        value={formData.linkedin || ''}
        onChange={(e) => onChange('linkedin', e.target.value)}
      />
      <label>GitHub:</label>
      <input
        type="text"
        placeholder="GitHub URL"
        value={formData.github || ''}
        onChange={(e) => onChange('github', e.target.value)}
      />
    </div>
  );
};

export default ResumeHeader;
