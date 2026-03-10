import React from 'react';

const UVCard = ({ location, uvIndex, label, progress }) => {
  const progressPercent = Math.min(progress * 100, 100);

  // gradient based on UV index only
  const getGradientStyle = () => {
    if (uvIndex >= 8) return { background: 'linear-gradient(135deg, #FF6B35 0%, #C41E3A 100%)' };
    if (uvIndex >= 6) return { background: 'linear-gradient(135deg, #FFD93D 0%, #FF8C42 100%)' };
    if (uvIndex >= 3) return { background: 'linear-gradient(135deg, #FFF9C4 0%, #FFB74D 100%)' };
    return { background: 'linear-gradient(135deg, #81C784 0%, #4DB6AC 100%)' };
  };

  return (
    <div style={{ ...styles.card, ...getGradientStyle() }}>
      <div style={styles.conditionsLabel}>CURRENT CONDITIONS</div>
      <h2 style={styles.location}>{location}</h2>
      <div style={styles.uvIndex}>{uvIndex}</div>
      <div style={styles.levelBadge}>
        <span style={styles.levelText}>{label}</span>
      </div>

      <div style={styles.progressContainer}>
        <div style={styles.progressBar}>
          <div style={styles.progressTrack}></div>
          <div style={{ ...styles.progressIndicator, width: `${progressPercent}%` }}></div>
        </div>
        <div style={styles.progressLabels}>
          <span style={styles.progressLabelLeft}>LOW</span>
          <span style={styles.progressLabelRight}>EXTREME</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    borderRadius: '24px',
    padding: '32px 24px',
    width: '100%',
    maxWidth: '390px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  conditionsLabel: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: '1px',
    marginBottom: '8px',
    opacity: 0.9,
  },
  location: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#FFFFFF',
    margin: '0 0 24px 0',
    textAlign: 'center',
  },
  uvIndex: {
    fontSize: '96px',
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: '1',
    margin: '0 0 16px 0',
  },
  levelBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '20px',
    padding: '8px 20px',
    marginBottom: '24px',
  },
  levelText: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#FFFFFF',
  },
  progressContainer: {
    width: '100%',
    marginTop: '8px',
  },
  progressBar: {
    position: 'relative',
    width: '100%',
    height: '8px',
    marginBottom: '8px',
  },
  progressTrack: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '4px',
  },
  progressIndicator: {
    position: 'absolute',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: '4px',
    transition: 'width 0.3s ease',
  },
  progressLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  progressLabelLeft: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: '0.5px',
  },
  progressLabelRight: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: '0.5px',
  },
};

export default UVCard;
