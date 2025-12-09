// AdminInput.js
import React, { useState } from 'react';
import axios from 'axios';

function AdminInput() {
  const [singleText, setSingleText] = useState('');
  const [csvFile, setCsvFile] = useState(null);
  const [results, setResults] = useState([]);

  const pageCenter = {
    minHeight: 'calc(100vh - 70px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px 16px'
  };

  const cardStyle = {
    background: 'rgba(15,23,42,0.94)',
    borderRadius: '18px',
    padding: '24px',
    boxShadow: '0 18px 45px rgba(15,23,42,0.9)',
    border: '1px solid rgba(148,163,184,0.45)',
    maxWidth: '1150px',
    width: '100%',
    color: '#e5e7eb'
  };

  const titleStyle = {
    margin: '0 0 4px',
    fontSize: '24px',
    color: '#e5e7eb'
  };

  const subtitleStyle = {
    margin: '0 0 20px',
    color: '#9ca3af',
    fontSize: '14px'
  };

  const layoutGrid = {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
    gap: '24px',
    marginBottom: '24px'
  };

  const sectionLabel = {
    margin: '0 0 8px',
    fontSize: '15px',
    fontWeight: 600,
    color: '#e5e7eb'
  };

  const textareaStyle = {
    width: '100%',
    minHeight: '180px',
    borderRadius: '12px',
    background: '#020617',
    border: '1px solid rgba(148,163,184,0.6)',
    padding: '12px',
    color: '#e5e7eb',
    fontSize: '14px',
    resize: 'vertical'
  };

  const uploadBox = {
    padding: '16px 14px',
    borderRadius: '12px',
    background: '#020617',
    border: '1px solid rgba(148,163,184,0.6)',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    color: '#e5e7eb'
  };

  const primaryBtn = {
    padding: '10px 24px',
    borderRadius: '999px',
    border: 'none',
    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
    color: '#0f172a',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '14px'
  };

  const secondaryBtn = {
    padding: '10px 24px',
    borderRadius: '999px',
    border: '1px solid rgba(148,163,184,0.7)',
    background: 'transparent',
    color: '#e5e7eb',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '14px'
  };

  // TABLE STYLES – updated text colors
  const tableWrapper = {
    marginTop: '18px',
    borderRadius: '14px',
    overflow: 'hidden',
    border: '1px solid rgba(148,163,184,0.45)',
    background: 'rgba(2,6,23,0.9)'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '13px'
  };

  const thStyle = {
    padding: '10px 14px',
    textAlign: 'left',
    background: 'rgba(15,23,42,0.95)',
    color: '#f9fafb',          // brighter header text
    borderBottom: '1px solid rgba(55,65,81,0.9)'
  };

  const tdStyle = {
    padding: '9px 14px',
    borderBottom: '1px solid rgba(31,41,55,0.85)',
    color: '#e5e7eb'           // brighter row text so it is visible
  };

  const trAltBackground = {
    background: 'rgba(15,23,42,0.9)'
  };

  const trDefaultBackground = {
    background: 'rgba(15,23,42,0.7)'
  };

  const resultsTitle = {
    margin: '18px 0 8px',
    fontSize: '16px',
    fontWeight: 600,
    color: '#e5e7eb'
  };

  const handleSingleSubmit = async () => {
    if (!singleText.trim()) return;
    try {
      const res = await axios.post('http://localhost:5000/api/analyze-text', {
        text: singleText
      });
      setResults([res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCsvSubmit = async () => {
    if (!csvFile) return;
    const formData = new FormData();
    formData.append('file', csvFile);

    try {
      const res = await axios.post(
        'http://localhost:5000/api/upload-csv',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      setResults(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main style={pageCenter}>
      <section style={cardStyle}>
        <h2 style={titleStyle}>Analyze Text / Upload CSV</h2>
        <p style={subtitleStyle}>
          Paste a single text sample or upload a CSV file with multiple rows for batch sentiment analysis.
        </p>

        <div style={layoutGrid}>
          <div>
            <p style={sectionLabel}>Single Text Analysis</p>
            <textarea
              style={textareaStyle}
              value={singleText}
              onChange={(e) => setSingleText(e.target.value)}
              placeholder="Type or paste text here..."
            />
            <div style={{ marginTop: '14px' }}>
              <button style={primaryBtn} onClick={handleSingleSubmit}>
                Analyze Text
              </button>
            </div>
          </div>

          <div>
            <p style={sectionLabel}>CSV Upload</p>
            <div style={uploadBox}>
              <input
                type="file"
                accept=".csv"
                onChange={(e) => setCsvFile(e.target.files[0])}
                style={{ color: '#e5e7eb', fontSize: '13px' }}
              />
              <button style={secondaryBtn} onClick={handleCsvSubmit}>
                Upload &amp; Analyze
              </button>
            </div>
          </div>
        </div>

        <h3 style={resultsTitle}>Results</h3>

        <div style={tableWrapper}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Text</th>
                <th style={thStyle}>Polarity</th>
                <th style={thStyle}>Subjectivity</th>
                <th style={thStyle}>Sentiment</th>
              </tr>
            </thead>
            <tbody>
              {results.map((row, index) => (
                <tr
                  key={index}
                  style={index % 2 === 0 ? trDefaultBackground : trAltBackground}
                >
                  <td style={tdStyle}>{row.text}</td>
                  <td style={tdStyle}>{row.polarity?.toFixed?.(3)}</td>
                  <td style={tdStyle}>{row.subjectivity?.toFixed?.(3)}</td>
                  <td style={tdStyle}>{row.sentiment}</td>
                </tr>
              ))}
              {results.length === 0 && (
                <tr style={trDefaultBackground}>
                  <td style={tdStyle} colSpan="4">
                    No results yet. Run a single text or CSV analysis to see output here.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default AdminInput;
