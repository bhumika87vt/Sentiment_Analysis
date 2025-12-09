// AnalysisPage.js
import { Chart, LinearScale, PointElement, Tooltip, Legend, CategoryScale, Title, LineElement } from 'chart.js';
Chart.register(LinearScale, PointElement, Tooltip, Legend, CategoryScale, Title, LineElement);
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

function AnalysisPage() {
  const [data, setData] = useState([]);

  const pageCenter = {
    minHeight: 'calc(100vh - 70px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const cardStyle = {
    background: 'rgba(15,23,42,0.94)',
    borderRadius: '18px',
    padding: '24px',
    boxShadow: '0 18px 45px rgba(15,23,42,0.9)',
    border: '1px solid rgba(148,163,184,0.45)',
    maxWidth: '1000px',
    width: '100%'
  };

  const titleStyle = {
    margin: '0 0 4px',
    fontSize: '24px',
    color: '#e5e7eb'
  };

  const subtitleStyle = {
    margin: '0 0 18px',
    color: '#9ca3af',
    fontSize: '14px'
  };

  const chartsGrid = {
    display: 'grid',
    gridTemplateColumns: 'minmax(0,1fr)',
    gap: '18px',
    marginTop: '12px'
  };

  const chartCard = {
    padding: '16px',
    borderRadius: '14px',
    background: 'radial-gradient(circle at top, #020617 0, #050816 100%)',
    border: '1px solid rgba(148,163,184,0.6)'
  };

  const sectionTitle = {
    margin: '0 0 8px',
    fontSize: '15px',
    color: '#e5e7eb'
  };

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('http://localhost:5000/api/analysis-data');
      setData(res.data);
    }
    fetchData();
  }, []);

  // Labels for X axis: index of sample
  const labels = data.map((_, i) => `Sample ${i + 1}`);

  // Data for Polarity graph
  const polarityChartData = {
    labels,
    datasets: [
      {
        label: 'Polarity',
        data: data.map(d => d.polarity),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.3)',
        fill: false,
        tension: 0.25,
        borderWidth: 0.5, // thickness set to 0.5
        pointRadius: 2
      }
    ]
  };

  // Data for Subjectivity graph
  const subjectivityChartData = {
    labels,
    datasets: [
      {
        label: 'Subjectivity',
        data: data.map(d => d.subjectivity),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        fill: false,
        tension: 0.25,
        borderWidth: 0.5, // thickness set to 0.5
        pointRadius: 2
      }
    ]
  };

  const polarityOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Polarity Trend' }
    },
    scales: {
      y: {
        min: -1,
        max: 1,
        title: { display: true, text: 'Polarity Score (-1 to 1)' }
      },
      x: {
        title: { display: true, text: 'Sample Index' }
      }
    }
  };

  const subjectivityOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Subjectivity Trend' }
    },
    scales: {
      y: {
        min: 0,
        max: 1,
        title: { display: true, text: 'Subjectivity Score (0 to 1)' }
      },
      x: {
        title: { display: true, text: 'Sample Index' }
      }
    }
  };

  return (
    <main style={pageCenter}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Sentiment Analysis Charts</h2>
        <p style={subtitleStyle}>
          Visualize polarity and subjectivity for all processed text samples.
        </p>

        <div style={chartsGrid}>
          <div style={chartCard}>
            <h3 style={sectionTitle}>Polarity</h3>
            <Line data={polarityChartData} options={polarityOptions} />
          </div>
          <div style={chartCard}>
            <h3 style={sectionTitle}>Subjectivity</h3>
            <Line data={subjectivityChartData} options={subjectivityOptions} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default AnalysisPage;
