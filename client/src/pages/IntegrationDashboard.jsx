import React from 'react';
import Card from '../components/common/Card';
import MermaidDiagram from '../components/common/MermaidDiagram';
import { Network, Cloud, GitBranch, Activity, ShieldCheck, Container } from 'lucide-react';
import styles from './Dashboard.module.css';

const IntegrationDashboard = () => {
  const ciCdFlow = `graph LR
    A[Git Push] --> B(CI Build)
    B --> C{Tests Passed?}
    C -- Yes --> D(CD Deploy)
    C -- No --> E[Notify Developer]`;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.breadcrumb}>Dashboard &gt; Integration & DevOps</div>
        <h1 className={styles.title}>System Integration & Deployment</h1>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}><Activity size={18} /> CI/CD Pipeline Flow</h2>
        <Card 
          title="Automated Deployment Workflow"
          description="A visual representation of the standard GitOps pipeline from code push to production."
          footer={<MermaidDiagram chart={ciCdFlow} />}
        />
      </section>

      <div className={styles.twoColumn}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}><Container size={18} /> Infrastructure</h2>
          <div className={styles.grid}>
            <Card 
              title="Docker"
              description="Containerizing applications for consistent environments."
              icon={Container}
              tags={['v24.x', 'Compose']}
            />
            <Card 
              title="Kubernetes"
              description="Orchestrating containerized workloads at scale."
              icon={Cloud}
              tags={['Helm', 'K8s']}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}><Network size={18} /> API & Proxies</h2>
          <div className={styles.verticalGrid}>
            <Card 
              title="Reverse Proxies (Nginx)"
              description="Managing incoming traffic, SSL termination, and caching."
              tags={['Proxy', 'Nginx']}
            />
            <Card 
              title="Message Brokers (Kafka)"
              description="Event-driven integration using distributed streaming."
              tags={['Kafka', 'PubSub']}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default IntegrationDashboard;
