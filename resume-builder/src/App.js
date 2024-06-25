import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ResumeHeader from './components/ResumeHeader';
import Objective from './components/Objective';
import Highlights from './components/Highlights';
import TechnicalSkills from './components/TechnicalSkills';
import TechnicalProjects from './components/TechnicalProjects';
import EducationalProfile from './components/EducationalProfile';
import Strength from './components/Strength';
import PersonalDetails from './components/PersonalDetails';
import Declaration from './components/Declaration';
import './App.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const App = () => {
  const [expandedSections, setExpandedSections] = useState({
    header: true,
    objective: false,
    highlights: false,
    technicalSkills: false,
    technicalProjects: false,
    educationalProfile: false,
    strength: false,
    personalDetails: false,
    declaration: false,
  });

  const [formData, setFormData] = useState({
    header: {},
    objective: '',
    highlights: '',
    technicalSkills: '',
    technicalProjects: '',
    educationalProfile: '',
    strength: '',
    personalDetails: {},
    declaration: '',
  });

  const handleInputChange = (section, field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  };

  const handleTextareaChange = (section, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [section]: value,
    }));
  };

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const addSectionHeader = (doc, text, yPosition) => {
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text(text, 10, yPosition);
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    return yPosition + 10;
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    let yPosition = 10;

    // Add Header section
    yPosition = addSectionHeader(doc, 'Header', yPosition);
    doc.text(`Name: ${formData.header.name || ''}`, 10, yPosition);
    doc.text(`Title: ${formData.header.title || ''}`, 10, yPosition + 10);
    doc.text(`Email: ${formData.header.email || ''}`, 10, yPosition + 20);
    doc.text(`Phone: ${formData.header.phone || ''}`, 10, yPosition + 30);
    doc.text(`LinkedIn: ${formData.header.linkedin || ''}`, 10, yPosition + 40);
    doc.text(`GitHub: ${formData.header.github || ''}`, 10, yPosition + 50);

    yPosition += 60;

    // Add Objective section
    if (formData.objective) {
      yPosition = addSectionHeader(doc, 'Objective', yPosition);
      doc.text(formData.objective, 10, yPosition);
      yPosition += 20;
    }

    // Add Highlights section
    if (formData.highlights) {
      yPosition = addSectionHeader(doc, 'Highlights', yPosition);
      doc.text(formData.highlights, 10, yPosition);
      yPosition += 20;
    }

    // Add Technical Skills section
    if (formData.technicalSkills) {
      yPosition = addSectionHeader(doc, 'Technical Skills', yPosition);
      doc.text(formData.technicalSkills, 10, yPosition);
      yPosition += 20;
    }

    // Add Technical Projects section
    if (formData.technicalProjects) {
      yPosition = addSectionHeader(doc, 'Technical Projects', yPosition);
      doc.text(formData.technicalProjects, 10, yPosition);
      yPosition += 20;
    }

    // Add Educational Profile section
    if (formData.educationalProfile) {
      yPosition = addSectionHeader(doc, 'Educational Profile', yPosition);
      doc.text(formData.educationalProfile, 10, yPosition);
      yPosition += 20;
    }

    // Add Strengths section
    if (formData.strength) {
      yPosition = addSectionHeader(doc, 'Strengths', yPosition);
      doc.text(formData.strength, 10, yPosition);
      yPosition += 20;
    }

    // Add Personal Details section
    if (formData.personalDetails) {
      yPosition = addSectionHeader(doc, 'Personal Details', yPosition);
      doc.text(`Date of Birth: ${formData.personalDetails.dob || ''}`, 10, yPosition);
      doc.text(`Nationality: ${formData.personalDetails.nationality || ''}`, 10, yPosition + 10);
      doc.text(`Languages: ${formData.personalDetails.languages || ''}`, 10, yPosition + 20);
      yPosition += 30;
    }

    // Add Declaration section
    if (formData.declaration) {
      yPosition = addSectionHeader(doc, 'Declaration', yPosition);
      doc.text(formData.declaration, 10, yPosition);
      yPosition += 20;
    }

    return doc;
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const doc = new jsPDF(); // Declare doc here

    // Define page height and margin
    const pageHeight = doc.internal.pageSize.height;
    const margin = 10;

    let y = margin; // Initial y position
    let currentPage = 1; // Track current page number

    // Function to check if content fits on current page
    const checkPageHeight = (height) => {
      if (y + height > pageHeight - margin) {
        doc.addPage();
        currentPage++;
        y = margin; // Reset y position for new page
      }
    };

    // Function to add section header
    const addSectionHeader = (title) => {
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      doc.text(title, margin, y);
      y += 10; // Adjust y position after header
    };

    // Function to calculate text height based on width
    const getTextHeight = (text, width) => {
      const lineHeight = 10; // Assuming font size 12
      const splitText = doc.splitTextToSize(text, width);
      const height = splitText.length * lineHeight;
      return height;
    };

    // Add Header section
    addSectionHeader('Header');
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.text(`Name: ${formData.header.name || ''}`, margin, y);
    y += 10;
    doc.text(`Title: ${formData.header.title || ''}`, margin, y);
    y += 10;
    doc.text(`Email: ${formData.header.email || ''}`, margin, y);
    y += 10;
    doc.text(`Phone: ${formData.header.phone || ''}`, margin, y);
    y += 10;
    doc.text(`LinkedIn: ${formData.header.linkedin || ''}`, margin, y);
    y += 10;
    doc.text(`GitHub: ${formData.header.github || ''}`, margin, y);
    y += 20;

    // Check if content fits on current page
    checkPageHeight(90);

    // Add Objective section
    if (formData.objective) {
      addSectionHeader('Objective');
      doc.setFontSize(12);
      doc.setFont(undefined, 'normal');
      const objectiveTextHeight = getTextHeight(formData.objective, 190); // Calculate text height
      doc.text(formData.objective, margin, y);
      y += objectiveTextHeight + 10; // Adjust y position based on text height and add padding
    }

    // Check if content fits on current page
    checkPageHeight(30 + getTextHeight(formData.objective, 190));

    // Add Highlights section
    if (formData.highlights) {
      addSectionHeader('Highlights');
      doc.setFontSize(12);
      doc.setFont(undefined, 'normal');
      const highlightsTextHeight = getTextHeight(formData.highlights, 190); // Calculate text height
      doc.text(formData.highlights, margin, y);
      y += highlightsTextHeight + 10; // Adjust y position based on text height and add padding
    }

    // Check if content fits on current page
    checkPageHeight(30 + getTextHeight(formData.highlights, 190));

    // Add Technical Skills section
    if (formData.technicalSkills) {
      addSectionHeader('Technical Skills');
      doc.setFontSize(12);
      doc.setFont(undefined, 'normal');
      const technicalSkillsTextHeight = getTextHeight(formData.technicalSkills, 190); // Calculate text height
      doc.text(formData.technicalSkills, margin, y);
      y += technicalSkillsTextHeight + 10; // Adjust y position based on text height and add padding
    }

    // Check if content fits on current page
    checkPageHeight(30 + getTextHeight(formData.technicalSkills, 190));

    // Add Technical Projects section
    if (formData.technicalProjects) {
      addSectionHeader('Technical Projects');
      doc.setFontSize(12);
      doc.setFont(undefined, 'normal');
      const technicalProjectsTextHeight = getTextHeight(formData.technicalProjects, 190); // Calculate text height
      doc.text(formData.technicalProjects, margin, y);
      y += technicalProjectsTextHeight + 10; // Adjust y position based on text height and add padding
    }

    // Check if content fits on current page
    checkPageHeight(30 + getTextHeight(formData.technicalProjects, 190));

    // Add Educational Profile section
    if (formData.educationalProfile) {
      addSectionHeader('Educational Profile');
      doc.setFontSize(12);
      doc.setFont(undefined, 'normal');
      const educationalProfileTextHeight = getTextHeight(formData.educationalProfile, 190); // Calculate text height
      doc.text(formData.educationalProfile, margin, y);
      y += educationalProfileTextHeight + 10; // Adjust y position based on text height and add padding
    }

    // Check if content fits on current page
    checkPageHeight(30 + getTextHeight(formData.educationalProfile, 190));

    // Add Strengths section
    if (formData.strength) {
      addSectionHeader('Strengths');
      doc.setFontSize(12);
      doc.setFont(undefined, 'normal');
      const strengthsTextHeight = getTextHeight(formData.strength, 190); // Calculate text height
      doc.text(formData.strength, margin, y);
      y += strengthsTextHeight + 10; // Adjust y position based on text height and add padding
    }

    // Check if content fits on current page
    checkPageHeight(30 + getTextHeight(formData.strength, 190));

    // Add Personal Details section
    if (formData.personalDetails) {
      addSectionHeader('Personal Details');
      doc.setFontSize(12);
      doc.setFont(undefined, 'normal');
      doc.text(`Date of Birth: ${formData.personalDetails.dob || ''}`, margin, y);
      y += 10;
      doc.text(`Nationality: ${formData.personalDetails.nationality || ''}`, margin, y);
      y += 10;
      doc.text(`Languages: ${formData.personalDetails.languages || ''}`, margin, y);
      const languagesTextHeight = getTextHeight(formData.personalDetails.languages || '', 190); // Calculate text height
      y += languagesTextHeight + 10; // Adjust y position based on text height and add padding
    }

    // Check if content fits on current page
    checkPageHeight(50 + getTextHeight(formData.personalDetails.languages || '', 190));

    // Add Declaration section
    if (formData.declaration) {
      addSectionHeader('Declaration');
      doc.setFontSize(12);
      doc.setFont(undefined, 'normal');
      const declarationTextHeight = getTextHeight(formData.declaration, 190); // Calculate text height
      doc.text(formData.declaration, margin, y);
      y += declarationTextHeight + 10; // Adjust y position based on text height and add padding
    }

    // Save the PDF
    doc.save('resume.pdf');
  };

  return (
    <>
     < Navbar/>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-section-header" onClick={() => toggleSection('header')}>
          <h2>Header</h2>
        </div>
        {expandedSections.header && (
          <ResumeHeader
            formData={formData.header}
            onChange={(field, value) => handleInputChange('header', field, value)}
          />
        )}

        <div className="form-section-header" onClick={() => toggleSection('objective')}>
          <h2>Objective</h2>
        </div>
        {expandedSections.objective && (
          <Objective
            formData={formData.objective}
            onChange={(value) => handleTextareaChange('objective', value)}
          />
        )}

        <div className="form-section-header" onClick={() => toggleSection('highlights')}>
          <h2>Highlights</h2>
        </div>
        {expandedSections.highlights && (
          <Highlights
            formData={formData.highlights}
            onChange={(value) => handleTextareaChange('highlights', value)}
          />
        )}

        <div className="form-section-header" onClick={() => toggleSection('technicalSkills')}>
          <h2>Technical Skills</h2>
        </div>
        {expandedSections.technicalSkills && (
          <TechnicalSkills
            formData={formData.technicalSkills}
            onChange={(value) => handleTextareaChange('technicalSkills', value)}
          />
        )}

        <div className="form-section-header" onClick={() => toggleSection('technicalProjects')}>
          <h2>Technical Projects</h2>
        </div>
        {expandedSections.technicalProjects && (
          <TechnicalProjects
            formData={formData.technicalProjects}
            onChange={(value) => handleTextareaChange('technicalProjects', value)}
          />
        )}

        <div className="form-section-header" onClick={() => toggleSection('educationalProfile')}>
          <h2>Educational Profile</h2>
        </div>
        {expandedSections.educationalProfile && (
          <EducationalProfile
            formData={formData.educationalProfile}
            onChange={(value) => handleTextareaChange('educationalProfile', value)}
          />
        )}

        <div className="form-section-header" onClick={() => toggleSection('strength')}>
          <h2>Strengths</h2>
        </div>
        {expandedSections.strength && (
          <Strength
            formData={formData.strength}
            onChange={(value) => handleTextareaChange('strength', value)}
          />
        )}

        <div className="form-section-header" onClick={() => toggleSection('personalDetails')}>
          <h2>Personal Details</h2>
        </div>
        {expandedSections.personalDetails && (
          <PersonalDetails
            formData={formData.personalDetails}
            onChange={(field, value) => handleInputChange('personalDetails', field, value)}
          />
        )}

        <div className="form-section-header" onClick={() => toggleSection('declaration')}>
          <h2>Declaration</h2>
        </div>
        {expandedSections.declaration && (
          <Declaration
            formData={formData.declaration}
            onChange={(value) => handleTextareaChange('declaration', value)}
          />
        )}

        <button type="submit" onClick={generatePDF}>Submit</button>
      </form>
    </div>
    </>
  );
};

export default App;
