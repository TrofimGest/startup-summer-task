import React from 'react';
import styles from './ReposNotFound.module.css';
import reposIcon from '../../assets/icons/norepos.svg';

function ReposNotFound() {
  return (
    <section className={styles['not-found']}>
      <div>
        <img className={styles.logo} src={reposIcon} alt="repositories icon" />
      </div>
      <p className={styles.text}>Repository list is empty</p>
    </section>
  );
}

export default ReposNotFound;
