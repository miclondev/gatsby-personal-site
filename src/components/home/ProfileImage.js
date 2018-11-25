import React from 'react';
import styles from '../../styles/image.module.css';

const ProfileImage = props => (
    <div className={styles.holder}>
        <div className={styles.back} />
        <div className={styles.profile} />
    </div>
)

export default ProfileImage;