import React from 'react';
import styles from './Repos.module.css';
import Repo from './Repo';

function Repos({ profileData, reposData }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Repositories ({profileData.public_repos})</h2>
      <div className={styles.repos}>
        {reposData.map((repo) => (
          <Repo repo={repo} key={repo.id} />
        ))}
        ,
      </div>
    </div>
  );
}

export default Repos;
