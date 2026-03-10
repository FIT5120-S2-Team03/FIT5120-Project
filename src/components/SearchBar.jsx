import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(location.trim());
  };

  return (
    <form onSubmit={handleSearch} style={styles.container}>
      <div style={styles.searchWrapper}>
        <svg
          style={styles.searchIcon}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9CA3AF"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>

        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Postcode"
          style={styles.input}
        />

        <button type="submit" style={styles.searchButton}>
          Search
        </button>
      </div>
    </form>
  );
};

const styles = {
  container: {
    width: '100%',
    marginBottom: '20px',
  },
  searchWrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '8px 8px 8px 16px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    gap: '8px',
    width: '100%',
    minWidth: 0,
    boxSizing: 'border-box',
  },
  searchIcon: {
    flexShrink: 0,
  },
  input: {
    flex: 1,
    minWidth: 0,
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    color: '#1F2937',
    backgroundColor: 'transparent',
    padding: '8px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  searchButton: {
    flexShrink: 0,
    backgroundColor: '#FF6B35',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 20px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
};

export default SearchBar;
