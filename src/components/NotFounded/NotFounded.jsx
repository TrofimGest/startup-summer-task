import React from 'react';
import styles from './NotFounded.module.css';

function NotFounded() {
  return (
    <section className={styles.nouser}>
      <div className={styles.logo} />
      <p className={styles.text}>User not found</p>
    </section>
  );
}

export default NotFounded;
