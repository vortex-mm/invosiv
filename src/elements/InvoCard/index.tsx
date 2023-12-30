import React from 'react';
import styles from './styles.module.css';

const InvoCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Card Title</h2>
      </div>
      <div className={styles.body}>
        <p>Hello, CSS Modules in Vite with React and TypeScript!</p>
      </div>
    </div>
  );
};

export default InvoCard;
