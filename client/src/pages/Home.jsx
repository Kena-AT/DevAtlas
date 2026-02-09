import React, { useEffect, useState } from 'react';
import Card from '../components/common/Card';
import { Server, Code, Database } from 'lucide-react';

const Home = () => {
  const [concepts, setConcepts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v1/concepts')
      .then(res => res.json())
      .then(data => {
        setConcepts(data.data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch concepts", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>Master the Modern <span style={{ color: 'var(--accent-blue)' }}>Tech Stack</span></h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', maxWidth: '800px' }}>
        Explore curated software engineering concepts, best practices, and architecture patterns.
      </p>

      {loading ? (
        <div style={{ color: 'var(--text-tertiary)' }}>Loading concepts...</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {concepts.map(concept => (
            <Card 
              key={concept.id}
              title={concept.title}
              description={concept.description}
              icon={concept.domain === 'Backend' ? Server : concept.domain === 'Frontend' ? Code : Database}
              tags={[concept.domain]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
