import React from 'react';
import followersIcon from '../../../assets/icons/followers.svg';
import followingIcon from '../../../assets/icons/following.svg';
import styles from './Profile.module.css';

function Profile({ profileData }) {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={profileData.avatar_url} alt="avatar" />
      </div>
      <div className={styles.name}>{profileData.name || 'No Name'}</div>
      <div className={styles.login}>
        <a href={profileData.html_url} rel="noreferrer" target="_blank">
          {profileData.login}
        </a>
      </div>
      <div className={styles.follows}>
        <div className={styles.followers}>
          <div className={styles['icon-container']}>
            <img className={styles['followers-img']} src={followersIcon} alt="followers icon" />
          </div>
          <p>{profileData.followers} followers</p>
        </div>
        <div className={styles.following}>
          <div className={styles['icon-container']}>
            <img className={styles['following-img']} src={followingIcon} alt="following icon" />
          </div>
          <p>{profileData.following} following</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
