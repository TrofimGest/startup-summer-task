import React from 'react';
import Profile from './Profile/Profile';
import Repos from './Repos/Repos';
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.container}>
      <Profile />
      <Repos />
    </div>
  );
}

export default Main;
