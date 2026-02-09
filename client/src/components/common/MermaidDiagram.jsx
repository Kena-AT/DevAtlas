import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import styles from './MermaidDiagram.module.css';

mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'Inter',
});

const MermaidDiagram = ({ chart }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && chart) {
      ref.current.removeAttribute('data-processed');
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div className={styles.container}>
      <div className="mermaid" ref={ref}>
        {chart}
      </div>
    </div>
  );
};

export default MermaidDiagram;
