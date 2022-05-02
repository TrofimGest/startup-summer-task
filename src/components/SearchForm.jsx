import React from 'react';
import styles from './SearchForm.module.css';

function SeachForm() {
  return (
    <form action="" className={styles.search}>
      <button type="submit" className={styles.icon} />
      <input type="search" required placeholder="Enter GitHub username" className={styles.input} />
    </form>
  );
}

export default SeachForm;
