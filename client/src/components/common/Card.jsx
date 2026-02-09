import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, description, icon: Icon, tags, footer }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {Icon && <div className={styles.iconWrapper}><Icon size={24} /></div>}
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
      
      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      )}

      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default Card;
