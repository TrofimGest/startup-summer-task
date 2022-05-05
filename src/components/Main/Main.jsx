import React from 'react';
import Profile from './Profile/Profile';
import Repos from './Repos/Repos';
import styles from './Main.module.css';

function Main({ data }) {
  return (
    <div className={styles.container}>
      <Profile data={data} />
      <Repos />
    </div>
  );
}

export default Main;
