// Home.js
import React from 'react';

function Home() {
  const pageStyle = {
    minHeight: 'calc(100vh - 70px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 20px',
  };

  const containerStyle = {
    maxWidth: '1100px',
    width: '100%',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '42px',
    fontWeight: 800,
    color: '#f9fafb',
    margin: '0 0 12px',
  };

  const titleAccentStyle = {
    background: 'linear-gradient(135deg, #3b82f6, #10b981)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const subtitleStyle = {
    fontSize: '16px',
    color: '#cbd5e1',
    maxWidth: '640px',
    margin: '0 auto 28px',
    lineHeight: 1.6,
  };

  const ctaRowStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '14px',
    marginBottom: '40px',
    flexWrap: 'wrap',
  };

  const primaryBtn = {
    padding: '12px 30px',
    borderRadius: '999px',
    border: 'none',
    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    color: '#f9fafb',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    boxShadow: '0 10px 25px rgba(59,130,246,0.45)',
  };

  const secondaryBtn = {
    padding: '12px 30px',
    borderRadius: '999px',
    border: '1px solid #475569',
    background: 'transparent',
    color: '#e5e7eb',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const cardsRowStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '18px',
    alignItems: 'stretch',
  };

  const cardStyle = {
    padding: '22px 20px',
    borderRadius: '18px',
    background: 'rgba(15,23,42,0.9)',
    border: '1px solid rgba(148,163,184,0.35)',
    textAlign: 'left',
  };

  const cardHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    marginBottom: '10px',
  };

  const iconBoxStyle = {
    width: '44px',
    height: '44px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    color: '#f9fafb',
  };

  const cardTitleStyle = {
    margin: 0,
    fontSize: '16px',
    fontWeight: 700,
    color: '#f9fafb',
  };

  const cardTextStyle = {
    margin: 0,
    fontSize: '13px',
    lineHeight: 1.6,
    color: '#cbd5e1',
  };

  return (
    <main style={pageStyle}>
      <section style={containerStyle}>
        <h1 style={titleStyle}>
          Simple <span style={titleAccentStyle}>Sentiment</span> Analysis
        </h1>

        <p style={subtitleStyle}>
          Quickly classify text as positive, negative, or neutral and view clear sentiment scores in a
          single dashboard.
        </p>

        <div style={ctaRowStyle}>
          <a href="/admin-login" style={primaryBtn}>
            Get Started
          </a>
          <a href="/analysis" style={secondaryBtn}>
            Try Demo
          </a>
        </div>

        <div style={cardsRowStyle}>
          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <div
                style={{
                  ...iconBoxStyle,
                  background: 'linear-gradient(135deg, #22c55e, #4ade80)',
                }}
              >
                📄
              </div>
              <h3 style={cardTitleStyle}>Text Analysis</h3>
            </div>
            <p style={cardTextStyle}>
              Upload CSV files or check single messages in real-time with sentiment labels.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <div
                style={{
                  ...iconBoxStyle,
                  background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                }}
              >
                📊
              </div>
              <h3 style={cardTitleStyle}>Visual Reports</h3>
            </div>
            <p style={cardTextStyle}>
              See sentiment distribution with simple charts and easy-to-read summaries.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <div
                style={{
                  ...iconBoxStyle,
                  background: 'linear-gradient(135deg, #f97316, #fbbf24)',
                }}
              >
                ⚡
              </div>
              <h3 style={cardTitleStyle}>Real-time Results</h3>
            </div>
            <p style={cardTextStyle}>
              Get instant scores for polarity and subjectivity as soon as text is processed.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
