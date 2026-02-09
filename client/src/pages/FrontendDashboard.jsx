import React from 'react';
import Card from '../components/common/Card';
import CodeBlock from '../components/common/CodeBlock';
import { Monitor, Cpu, Layers, Palette, Terminal } from 'lucide-react';
import styles from './Dashboard.module.css';

const FrontendDashboard = () => {
  const frameworks = [
    { id: 'react', title: 'React', description: 'Library for UI components', icon: Cpu, tags: ['v19', 'Hooks'] },
    { id: 'angular', title: 'Angular', description: 'The Modern Web Platform', icon: Layers, tags: ['v18', 'Signals'] },
    { id: 'vue', title: 'Vue.js', description: 'Progressive Framework', icon: Monitor, tags: ['v3', 'Composition'] },
    { id: 'flutter', title: 'Flutter', description: 'Multi-platform UI toolkit', icon: Palette, tags: ['v3.x', 'Dart'] }
  ];

  const folderStructure = `src/
  features/        // Auth, Dashboard, Checkout...
  components/      // Reusable UI components
  hooks/           // Custom React Hooks
  services/        // API calls, Utils
  shared/          // Constants, Types`;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.breadcrumb}>Dashboard &gt; Frontend Atlas</div>
        <h1 className={styles.title}>Frontend Knowledge Dashboard</h1>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Select Framework Ecosystem</h2>
        <div className={styles.grid}>
          {frameworks.map(fw => (
            <Card 
              key={fw.id}
              title={fw.title}
              description={fw.description}
              icon={fw.icon}
              tags={fw.tags}
            />
          ))}
        </div>
      </section>

      <div className={styles.twoColumn}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Core UI/UX Principles</h2>
          <div className={styles.verticalGrid}>
            <Card 
              title="Accessibility (A11y)"
              description="Implementing ARIA roles, semantic HTML, and keyboard navigation standards."
              tags={['WCAG 2.1', 'ARIA']}
            />
            <Card 
              title="Responsive Design"
              description="Mastering Fluid Layouts, Container Queries, and Mobile-First strategies."
              tags={['Flexbox', 'Grid']}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Project Organization</h2>
          <CodeBlock 
            code={folderStructure} 
            language="text" 
            filename="FEATURE-BASED-STRUCTURE.JSON" 
          />
          <p className={styles.note}>
            "The feature-based structure is recommended for enterprise scale to ensure isolation and maintainability."
          </p>
        </section>
      </div>
    </div>
  );
};

export default FrontendDashboard;
