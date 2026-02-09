import React from 'react';
import Card from '../components/common/Card';
import MermaidDiagram from '../components/common/MermaidDiagram';
import { Database, Zap, HardDrive, Search, ShieldCheck } from 'lucide-react';
import styles from './Dashboard.module.css';

const DatabaseDashboard = () => {
  const dbs = [
    { id: 'postgres', title: 'PostgreSQL', description: 'Advanced open source relational database.', icon: HardDrive, tags: ['Relational', 'SQL'] },
    { id: 'mongodb', title: 'MongoDB', description: 'NoSQL document-oriented database.', icon: Database, tags: ['NoSQL', 'JSON'] },
    { id: 'redis', title: 'Redis', description: 'In-memory data structure store.', icon: Zap, tags: ['Cache', 'KV-Store'] }
  ];

  const erdDiagram = `erDiagram
    USER ||--o{ POST : writes
    USER {
        string username
        string email
    }
    POST {
        string title
        string content
    }`;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.breadcrumb}>Dashboard &gt; Database Knowledge</div>
        <h1 className={styles.title}>Database Design & Persistence</h1>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Framework Ecosystem</h2>
        <div className={styles.grid}>
          {dbs.map(db => (
            <Card 
              key={db.id}
              title={db.title}
              description={db.description}
              icon={db.icon}
              tags={db.tags}
            />
          ))}
        </div>
      </section>

      <div className={styles.twoColumn}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}><Search size={18} /> Schema Design & Normalization</h2>
          <Card 
            title="ERD: User-Post Relationship"
            description="Visualizing the many-to-one relationship between users and their content."
            footer={<MermaidDiagram chart={erdDiagram} />}
          />
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}><ShieldCheck size={18} /> Best Practices</h2>
          <div className={styles.verticalGrid}>
            <Card 
              title="Indexing Strategies"
              description="Learn when to use B-Tree, GIN, or Hash indexes for optimized queries."
              tags={['Performance', 'Optimization']}
            />
            <Card 
              title="Sharding & Replication"
              description="Scaling databases horizontally through partitioning and high availability."
              tags={['Scalability', 'Reliability']}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DatabaseDashboard;
