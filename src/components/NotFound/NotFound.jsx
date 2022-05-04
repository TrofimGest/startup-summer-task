import React from 'react';
import userIcon from '../../assets/icons/user.svg';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <section className={styles['not-found']}>
      <div>
        <img className={styles.logo} src={userIcon} alt="user icon" />
      </div>
      <p className={styles.text}>User not found</p>
    </section>
  );
}

export default NotFound;
