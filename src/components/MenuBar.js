import React, { Component } from 'react';
import styles from '../styles/menu.module.scss';
import { MdMenu, MdClose, MdFileDownload } from 'react-icons/md';


class MenuBar extends Component {
    state = {
        menu: false
    }

    handleMenu = () => this.setState({ menu: !this.state.menu })

    render(){
    return (
        <div className={styles.icons}>
            <a className={styles.icon}
                onClick={() => this.handleMenu()}
            >
              {this.state.menu ? <MdClose/> : <MdMenu/>}
                <p>Menu</p>
            </a>
            <a className={styles.icon}>
                <MdFileDownload />
               <p> Cv</p>
            </a>
        </div>
    )
}
}


export default MenuBar