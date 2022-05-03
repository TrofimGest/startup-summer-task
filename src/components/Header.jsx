import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo} />
      <form action="" className={styles.search}>
        <button type="submit" className={styles.icon} />
        <input
          type="search"
          required
          placeholder="Enter GitHub username"
          className={styles.input}
        />
      </form>
    </header>
  );
}

export default Header;
