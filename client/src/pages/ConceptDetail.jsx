import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Terminal, Layout, Share2, Bookmark } from 'lucide-react';
import CodeBlock from '../components/common/CodeBlock';
import MermaidDiagram from '../components/common/MermaidDiagram';
import styles from './ConceptDetail.module.css';

const ConceptDetail = () => {
  const { id } = useParams();
  const [concept, setConcept] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/v1/concepts/${id}`)
      .then(res => res.json())
      .then(data => {
        setConcept(data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch concept", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className={styles.loading}>Loading detailed knowledge...</div>;
  if (!concept) return <div className={styles.error}>Concept not found.</div>;

  return (
    <div className={styles.container}>
      <Link to="/app" className={styles.backLink}>
        <ChevronLeft size={16} />
        <span>Back to Dashboard</span>
      </Link>

      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerMain}>
            <div className={styles.meta}>
              <span className={styles.domain}>{concept.domain}</span>
              <span className={styles.dot}>•</span>
              <span className={styles.readTime}>15 min read</span>
            </div>
            <h1 className={styles.title}>{concept.title}</h1>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.actionBtn}><Bookmark size={18} /></button>
            <button className={styles.actionBtn}><Share2 size={18} /></button>
          </div>
        </header>

        <section className={styles.body}>
          <p className={styles.description}>{concept.fullDescription || concept.description}</p>
          
          {concept.diagram && (
            <div className={styles.visualSection}>
              <h3 className={styles.subTitle}>Architecture Flow</h3>
              <MermaidDiagram chart={concept.diagram} />
            </div>
          )}

          {concept.codeSnippet && (
            <div className={styles.visualSection}>
              <h3 className={styles.subTitle}>Implementation Example</h3>
              <CodeBlock 
                code={concept.codeSnippet} 
                language={concept.language || 'javascript'} 
                filename={concept.filename} 
              />
            </div>
          )}

          {concept.bestPractices && (
            <div className={styles.bestPractices}>
              <h3 className={styles.subTitle}>Best Practices</h3>
              <ul>
                {concept.bestPractices.map((bp, i) => (
                  <li key={i}>{bp}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ConceptDetail;
