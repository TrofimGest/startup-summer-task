import React from 'react';
import githubLogo from '../../assets/icons/github.svg';
import searchIcon from '../../assets/icons/search.svg';
import styles from './Header.module.css';

function Header({ username, setUsername, handleEnter }) {
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <header className={styles.header}>
      <div>
        <img className={styles.logo} src={githubLogo} alt="github logo" />
      </div>
      <div className={styles.search}>
        <div className={styles['icon-container']}>
          <img className={styles.icon} src={searchIcon} alt="search icon" />
        </div>
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
