import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Show error passed back from ResultsPage
  useEffect(() => {
    if (location.state?.error) {
      setErrorMessage(location.state.error);
      setShowError(true);
    }
  }, [location.state]);

  // auto-dismiss after 3s
  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => setShowError(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showError]);

  const handleSearch = (location) => {
    if (!location || location.trim() === '') {
      setErrorMessage('Please enter a valid postcode');
      setShowError(true);
    } else if (!/^\d{4}$/.test(location.trim())) {
      setErrorMessage('Please enter a valid 4-digit Australian postcode');
      setShowError(true);
    } else {
      navigate('/results', { state: { location } });
    }
  };

  const handleUseCurrentLocation = () => {
    navigate('/results', { state: { location: 'Melbourne' } });
  };

  const handleDismissError = () => {
    setShowError(false);
  };

  return (
    <div style={styles.container}>
      {showError && (
        <div style={styles.errorToast}>
          <div style={styles.errorContent}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={styles.errorIcon}>
              <circle cx="12" cy="12" r="10" stroke="#EF4444" strokeWidth="2" />
              <line x1="12" y1="8" x2="12" y2="12" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="16" r="1" fill="#EF4444" />
            </svg>
            <span style={styles.errorText}>{errorMessage}</span>
            <button onClick={handleDismissError} style={styles.closeButton}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div style={styles.content}>
        <div style={styles.logoContainer}>
          <div style={styles.logoCircle}>
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="20" fill="#FF6B35" />
              <rect x="47" y="10" width="6" height="15" rx="3" fill="#FF6B35" />
              <rect x="47" y="75" width="6" height="15" rx="3" fill="#FF6B35" />
              <rect x="10" y="47" width="15" height="6" rx="3" fill="#FF6B35" />
              <rect x="75" y="47" width="15" height="6" rx="3" fill="#FF6B35" />
              <rect x="23" y="23" width="6" height="15" rx="3" fill="#FF6B35" transform="rotate(-45 26 26)" />
              <rect x="71" y="71" width="6" height="15" rx="3" fill="#FF6B35" transform="rotate(-45 74 74)" />
              <rect x="71" y="23" width="6" height="15" rx="3" fill="#FF6B35" transform="rotate(45 74 26)" />
              <rect x="23" y="71" width="6" height="15" rx="3" fill="#FF6B35" transform="rotate(45 26 74)" />
            </svg>
          </div>
        </div>

        <h1 style={styles.title}>SunSmart</h1>

        <p style={styles.description}>
          Track real-time UV exposure and get personalized protection tips for your location.
        </p>

        <SearchBar onSearch={handleSearch} />

        <button onClick={handleUseCurrentLocation} style={styles.locationButton}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            style={styles.locationIcon}
          >
            <circle cx="12" cy="12" r="3" />
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="2" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22" y2="12" />
          </svg>
          Use Current Location
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#E5E5E5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  errorToast: {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    width: '90%',
    maxWidth: '360px',
    animation: 'slideDown 0.3s ease-out',
  },
  errorContent: {
    backgroundColor: '#1F2937',
    borderRadius: '12px',
    padding: '14px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
  errorIcon: {
    flexShrink: 0,
  },
  errorText: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: '15px',
    fontWeight: '500',
  },
  closeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  content: {
    width: '100%',
    maxWidth: '390px',
    padding: '60px 24px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: '30px',
  },
  logoCircle: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: '#FFE5E0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '48px',
    fontWeight: '700',
    color: '#1F2937',
    margin: '0 0 16px 0',
    textAlign: 'center',
  },
  description: {
    fontSize: '16px',
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: '1.6',
    margin: '0 0 40px 0',
    maxWidth: '320px',
  },
  locationButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#6B7280',
    fontSize: '15px',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  locationIcon: {
    flexShrink: 0,
  },
};

export default HomePage;
