import React from 'react';
import styles from './Start.module.css';

function Start() {
  return (
    <section className={styles.start}>
      <div className={styles.logo} />
      <p className={styles.text}>Start with searching a GitHub user</p>
    </section>
  );
}

export default Start;
