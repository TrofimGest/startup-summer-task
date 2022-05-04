import React from 'react';
import followersIcon from '../../../assets/icons/followers.svg';
import followingIcon from '../../../assets/icons/following.svg';
import styles from './Profile.module.css';

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src="https://avatars.githubusercontent.com/u/73033225?v=4" alt="avatar" />
      </div>
      <div className={styles.name}>Gest Trafim</div>
      <div className={styles.login}>
        <a href="https://github.com/TrofimGest" rel="noreferrer" target="_blank">
          TrofimGest
        </a>
      </div>
      <div className={styles.follows}>
        <div className={styles.followers}>
          <div className={styles['icon-container']}>
            <img className={styles['followers-img']} src={followersIcon} alt="followers icon" />
          </div>
          <p> followers</p>
        </div>
        <div className={styles.following}>
          <div className={styles['icon-container']}>
            <img className={styles['following-img']} src={followingIcon} alt="following icon" />
          </div>
          <p> following</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
