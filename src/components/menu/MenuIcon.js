import React from 'react';
import { Icon } from 'semantic-ui-react';
import styles from '../../styles/menu.module.css';

const MenuIcon = props => (
    <div className={styles.icon}>
            <Icon name={props.iconName}/>
            <p>{props.iconText}</p>
    </div>
)

export default MenuIcon;