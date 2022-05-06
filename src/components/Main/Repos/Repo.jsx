import React from 'react';
import styles from './Repo.module.css';

function Repo({ repo }) {
  return (
    <div className={styles.repo}>
      <div className={styles.title}>
        <a href={repo.html_url} rel="noreferrer" target="_blank">
          {repo.name}
        </a>
      </div>
      <div className={styles.subtitle}>{repo.description || ''}</div>
    </div>
  );
}

export default Repo;
