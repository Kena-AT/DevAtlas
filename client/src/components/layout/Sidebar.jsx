import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Monitor, Server, Database, Network, Cloud, BookOpen, Settings } from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const navItems = [
    { path: '/app', label: 'Overview', icon: LayoutDashboard },
    { path: '/app/frontend', label: 'Frontend', icon: Monitor },
    { path: '/app/backend', label: 'Backend', icon: Server },
    { path: '/app/database', label: 'Database', icon: Database },
    { path: '/app/integration', label: 'Integration', icon: Network },
    { path: '/app/deployment', label: 'Deployment', icon: Cloud },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>DA</div>
        <span className={styles.logoText}>DevAtlas</span>
      </div>

      <nav className={styles.nav}>
        <div className={styles.sectionTitle}>Domains</div>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}

        <div className={styles.sectionTitle} style={{ marginTop: '2rem' }}>Resources</div>
        <NavLink to="/app/library" className={styles.navItem}>
          <BookOpen size={20} />
          <span>Library</span>
        </NavLink>
        <NavLink to="/app/settings" className={styles.navItem}>
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
