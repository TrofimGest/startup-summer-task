import React from 'react';
import styles from './Profile.module.css';

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src="https://avatars.githubusercontent.com/u/73033225?v=4" alt="Avatar" />
      </div>
      <div className={styles.name}>Gest Trafim</div>
      <div className={styles.login}>
        <a href="https://github.com/TrofimGest" rel="noreferrer" target="_blank">
          TrofimGest
        </a>
      </div>
      <div className={styles.follows}>
        <div className={styles.followers}>
          <div className={styles.followers_img} />
          <p> followers</p>
        </div>
        <div className={styles.following}>
          <div className={styles.following_img} />
          <p> following</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
