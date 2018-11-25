import React from "react"
import HomeTitle from '../components/home/HomeTitle';
import ProfileImage from '../components/home/ProfileImage';
import MenuBar from '../components/MenuBar';
import HomeDesc from '../components/home/HomeDesc';
import styles from '../styles/main.module.css';

export default () => {
    return (
        <div className={styles.main}>
                <div className={styles.header}>
                    <MenuBar />
                </div>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <ProfileImage />
                        <HomeTitle />
                    </div>
                    <HomeDesc />

                    <div className={styles.projects}>
                        projects
                    </div>

                </div>
            </div>
    )
}
