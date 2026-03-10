import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import UVCard from '../components/UVCard';
import WarningCard from '../components/WarningCard';
import { melbourneData } from '../mockData';

const ResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchedLocation = location.state?.location || 'Melbourne';

  // TODO: replace with API call based on searchedLocation
  const uvData = melbourneData;

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
          label={uvData.label}
          progress={uvData.progress}
        />

        <WarningCard
          warningText={uvData.warning_text}
          damageTime={uvData.damage_time}
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
