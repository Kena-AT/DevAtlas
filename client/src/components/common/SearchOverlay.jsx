import React, { useState, useEffect } from 'react';
import { Search, X, ChevronRight, Command } from 'lucide-react';
import styles from './SearchOverlay.module.css';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.searchHeader}>
          <Search className={styles.searchIcon} size={20} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search concepts, frameworks, or commands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button onClick={onClose} className={styles.closeButton}>
            <X size={20} />
          </button>
        </div>
        
        <div className={styles.results}>
          {/* Placeholder results */}
          <div className={styles.resultGroup}>
            <div className={styles.groupTitle}>Recent</div>
            <div className={styles.resultItem}>
              <div className={styles.resultIcon}><Command size={14} /></div>
              <span>React Hooks</span>
              <ChevronRight size={14} className={styles.arrow} />
            </div>
          </div>
        </div>
        
        <div className={styles.footer}>
          Search by <span>Concept</span>, <span>Framework</span>, or <span>Command</span>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
