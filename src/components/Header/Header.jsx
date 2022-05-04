import React, { useState } from 'react';
import styles from './Header.module.css';

function Header() {
  const [username, setUsername] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      console.log(username);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} />
      <div className={styles.search}>
        <div className={styles.icon} />
        <input
          type="search"
          value={username}
          onKeyDown={handleEnter}
          onChange={handleChange}
          placeholder="Enter GitHub username"
          className={styles.input}
        />
      </div>
    </header>
  );
}

export default Header;
