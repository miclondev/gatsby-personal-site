import React from 'react';
import MenuIcon from './menu/MenuIcon';
import styles from '../styles/menu.module.css';

export default () => {
    return(
        <div className={styles.icons}>
            <MenuIcon iconName="bars" iconText="Menu"/>
            <MenuIcon iconName="download" iconText="CV"/>
        </div>
    )
}