import React, { useState } from 'react';
import githubLogo from '../../assets/icons/github.svg';
import searchIcon from '../../assets/icons/search.svg';
import githubApi from '../../services/api';
import styles from './Header.module.css';

function Header() {
  const [username, setUsername] = useState('');

  async function fetchUser(user) {
    const response = await githubApi(user);
    console.log(response);
  }

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      fetchUser(username);
    }
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
