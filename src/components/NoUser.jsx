import React from 'react';
import styles from './NoUser.module.css';

function NoUser() {
  return (
    <section className={styles.nouser}>
      <div className={styles.logo} />
      <p className={styles.text}>User not found</p>
    </section>
  );
}

export default NoUser;
