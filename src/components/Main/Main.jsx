import React from 'react';
import Profile from './Profile/Profile';
import Repos from './Repos/Repos';
import styles from './Main.module.css';

function Main({ profileData, reposData }) {
  return (
    <div className={styles.container}>
      <Profile profileData={profileData} />
      <Repos profileData={profileData} reposData={reposData} />
    </div>
  );
}

export default Main;
