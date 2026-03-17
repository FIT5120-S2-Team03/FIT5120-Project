import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import UVCard from '../components/UVCard';
import WarningCard from '../components/WarningCard';
import { getUVLevel } from '../uvConfig';

const ResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchedLocation = location.state?.location || 'Melbourne';

  const [uvData, setUvData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchUVData = async () => {
    try {
      const response = await fetch(
        `https://fit5120-project-47j6.onrender.com/api/uv?postcode=${searchedLocation}`
      );
      const data = await response.json();
      if (!data.success) {
        navigate('/', { state: { error: data.message } });
        return;
      }
      setUvData(data);
    } catch (error) {
      console.error('Failed to fetch UV data:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchUVData();
}, [searchedLocation, navigate]);

if (loading) return <div>Loading...</div>;
if (!uvData) return <div>Something went wrong</div>;

  // Derive UV level info (label, warning_text, damage_time, progress) from uv_index
  const uvLevel = getUVLevel(uvData.uv_index);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <button onClick={handleBack} style={styles.backButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F2937" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <h1 style={styles.title}>SunSmart</h1>

        <div style={styles.spacer}></div>
      </header>

      <div style={styles.content}>
        <UVCard
          location={uvData.location}
          uvIndex={uvData.uv_index}
          label={uvLevel.label}
          progress={uvLevel.progress}
        />

        <WarningCard
          warningText={uvLevel.warning_text}
          damageTime={uvLevel.damage_time}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#E5E5E5',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  header: {
    backgroundColor: '#E5E5E5',
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  backButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
  },
  title: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1F2937',
    margin: 0,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  spacer: {
    width: '40px',
  },
  content: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '390px',
    margin: '0 auto',
  },
};

export default ResultsPage;
