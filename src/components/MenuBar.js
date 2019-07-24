import React from 'react';
import styles from '../styles/menu.module.css';
import { FaList,FaCloudDownloadAlt } from 'react-icons/fa';

export default () => {
    return(
        <div className={styles.icons}>
            <FaList/>
            <FaCloudDownloadAlt/>
        </div>
    )
}