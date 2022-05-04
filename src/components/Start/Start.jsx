import React from 'react';
import searchIcon from '../../assets/icons/search.svg';
import styles from './Start.module.css';

function Start() {
  return (
    <section className={styles.start}>
      <div>
        <img className={styles.logo} src={searchIcon} alt="search icon" />
      </div>
      <p className={styles.text}>Start with searching a GitHub user</p>
    </section>
  );
}

export default Start;
