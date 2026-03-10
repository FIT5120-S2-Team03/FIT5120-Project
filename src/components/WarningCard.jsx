import React from 'react';

const WarningCard = ({ warningText, damageTime }) => {
  // highlight the damage time value in the warning text
  const renderWarningText = () => {
    const timePattern = new RegExp(`(${damageTime}\\s*mins?)`, 'gi');
    const parts = warningText.split(timePattern);

    return parts.map((part, index) =>
      part.match(timePattern)
        ? <span key={index} style={styles.highlightedTime}>{part}</span>
        : <span key={index}>{part}</span>
    );
  };

  return (
    <div style={styles.card}>
      <div style={styles.content}>
        <div style={styles.iconContainer}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L2 20h20L12 2z"
              stroke="#EF4444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <line x1="12" y1="10" x2="12" y2="14" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="17" r="1" fill="#EF4444" />
          </svg>
        </div>

        <div style={styles.textContent}>
          <h3 style={styles.title}>Exposure Warning</h3>
          <p style={styles.message}>{renderWarningText()}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '20px',
    width: '100%',
    maxWidth: '390px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  },
  content: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: '#FEE2E2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 8px 0',
  },
  message: {
    fontSize: '15px',
    color: '#4B5563',
    lineHeight: '1.6',
    margin: 0,
  },
  highlightedTime: {
    color: '#FF4500',
    fontWeight: '600',
  },
};

export default WarningCard;
