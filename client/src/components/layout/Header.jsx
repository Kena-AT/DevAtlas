import React, { useState, useEffect } from 'react';
import { Search, Bell, Settings, User } from 'lucide-react';
import SearchOverlay from '../common/SearchOverlay';
import styles from './Header.module.css';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className={styles.header}>
        {/* Search Bar */}
        <div className={styles.searchContainer} onClick={() => setIsSearchOpen(true)}>
          <Search className={styles.searchIcon} size={18} />
          <input 
            type="text" 
            placeholder="Search Concepts, Frameworks, or Commands..." 
            className={styles.searchInput}
            readOnly
          />
          <div className={styles.searchShortcut}>Cmd + K</div>
        </div>

        {/* Right Actions */}
        <div className={styles.actions}>
          <div className={styles.networkStatus}>
            <span className={styles.statusDot}></span>
            Network Status: <span className={styles.statusText}>Optimized</span>
          </div>
          
          <button className={styles.iconButton}>
            <Bell size={20} />
          </button>
          <button className={styles.iconButton}>
            <Settings size={20} />
          </button>
          <button className={styles.profileButton}>
            <User size={20} />
          </button>
        </div>
      </header>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;
