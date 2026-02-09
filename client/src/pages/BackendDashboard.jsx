import React from 'react';
import Card from '../components/common/Card';
import { Server, Lock, Zap, BarChart3, Globe, Database } from 'lucide-react';
import styles from './Dashboard.module.css';

const BackendDashboard = () => {
  const categories = [
    { title: 'API Design Patterns', icon: Globe, items: [
      { id: 'rest', title: 'RESTful Architecture', description: 'Resource-oriented designs using HTTP verbs.', tag: 'v3.4' },
      { id: 'graphql', title: 'GraphQL Implementations', description: 'Type-safe queries, mutations, and resolvers.', tag: 'New' }
    ]},
    { title: 'Security & Auth', icon: Lock, items: [
      { id: 'jwt', title: 'JWT Strategy', description: 'Handling stateless authentication and rotation.', tag: 'CRITICAL' },
      { id: 'oauth', title: 'OAuth 2.1 & OIDC', description: 'Implementing authorization flows for third-party.', tag: 'CORE' }
    ]}
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.breadcrumb}>Dashboard &gt; Backend Architecture</div>
        <div className={styles.headerFlex}>
          <h1 className={styles.title}>Backend Architecture</h1>
          <div className={styles.headerActions}>
            <button className={styles.actionButton}>Export Map</button>
            <button className={`${styles.actionButton} ${styles.primary}`}>New Resource</button>
          </div>
        </div>
        <p className={styles.subtitle}>Deep dive into scalable infrastructure, patterns, and security.</p>
      </header>

      <div className={styles.backendGrid}>
        {categories.map((cat, idx) => (
          <div key={idx} className={styles.categoryCard}>
            <div className={styles.catHeader}>
              <cat.icon size={18} className={styles.catIcon} />
              <h3 className={styles.catTitle}>{cat.title}</h3>
            </div>
            <div className={styles.subGrid}>
              {cat.items.map(item => (
                <div key={item.id} className={styles.resourceItem}>
                  <div className={styles.resourceHeader}>
                    <span className={styles.resourceTitle}>{item.title}</span>
                    <span className={styles.versionTag}>{item.tag}</span>
                  </div>
                  <p className={styles.resourceDesc}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className={styles.section} style={{ marginTop: '3rem' }}>
        <h2 className={styles.sectionTitle}><BarChart3 size={20} /> Performance & Scalability</h2>
        <div className={styles.metricsCard}>
          <div className={styles.metricItem}>
            <span className={styles.metricLabel}>Rate Limiting Effectiveness</span>
            <div className={styles.progressBar}><div className={styles.progress} style={{ width: '85%' }}></div></div>
          </div>
          <div className={styles.metricItem}>
            <span className={styles.metricLabel}>Caching Topologies</span>
            <div className={styles.tagGroup}>
              <span className={styles.statusBadge}>Redis (92% Hit)</span>
              <span className={styles.statusBadge}>Edge Cache (68% Hit)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BackendDashboard;
