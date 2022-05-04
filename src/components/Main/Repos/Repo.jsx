import React from 'react';
import styles from './Repo.module.css';

function Repo() {
  return (
    <div className={styles.repo}>
      <div className={styles.title}>
        <a
          href="https://github.com/TrofimGest/startup-summer-task"
          rel="noreferrer"
          target="_blank">
          startup-summer-task
        </a>
      </div>
      <div className={styles.subtitle}>No description</div>
    </div>
  );
}

export default Repo;
