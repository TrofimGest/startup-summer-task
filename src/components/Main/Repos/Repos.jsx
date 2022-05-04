import React from 'react';
import styles from './Repos.module.css';
import Repo from './Repo';

function Repos() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Repositories (249)</h2>
      <div className={styles.repos}>
        <Repo />
        <Repo />
        <Repo />
      </div>
    </div>
  );
}

export default Repos;
