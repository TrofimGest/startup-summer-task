import React from 'react';
import SeachForm from './SearchForm';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo} />
      <SeachForm />
    </header>
  );
}

export default Header;
