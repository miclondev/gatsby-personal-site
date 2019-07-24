import React from 'react';
import styles from '../../styles/desc.module.scss';
import PersonLinks from '../PersonLinks'

const HomeDesc = () => {
    return (
        <div className={styles.main}>
            <PersonLinks/>
            <div className={styles.desc}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in nisl elit. Aliquam lacus enim, luctus a lacinia ut, efficitur at est. Sed sed ornare nisl, nec tristique dolor. </p>
            </div>
            <div className={styles.icons}>
                 
            </div>
        </div>
    )
}
export default HomeDesc;