import React from 'react';
import Profile from './Profile/Profile';
import Repos from './Repos/Repos';
import styles from './Main.module.css';
import getUser from '../../services/api';

function Main({ username }) {
  async function fetchUser() {
    const response = await getUser(username);
    return response;
  }

  return (
    <div className={styles.container}>
      <Profile />
      <Repos />
    </div>
  );
}

export default Main;
