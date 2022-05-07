import React from 'react';
import Profile from './Profile/Profile';
import Repos from './Repos/Repos';
import NotFound from '../NotFound/NotFound';
import styles from './Main.module.css';

function Main({ profileData, reposData }) {
  return (
    <div className={styles.container}>
      {profileData.status !== 200 ? (
        <NotFound />
      ) : (
        <>
          <Profile profileData={profileData.data} />
          <Repos profileData={profileData.data} reposData={reposData} />
        </>
      )}
    </div>
  );
}

export default Main;
