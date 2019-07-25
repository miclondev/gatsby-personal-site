import React from 'react';
import styles from '../../styles/desc.module.scss';
import PersonLinks from '../PersonLinks'
import TechStackSummary from '../user/TechStackSummary'

const HomeDesc = () => {
    return (
        <div className={styles.main}>
            <div className={styles.left}>
                
                <div className={styles.desc}>
                    <p>
                       Currently I do codes with Javascript; I build backends usign NodeJs on AWS cloud for fast, secure serverless backends that scale as you go.
                       I love using React for frontend Components, though I can work with Vue and Angular if you prefer, contact me below.
                       <a> More..</a>
                    </p>
                </div>
                <PersonLinks/>
            </div>

            <div className={styles.right}>
                    <TechStackSummary/>  
            </div>
        </div>
    )
}
export default HomeDesc;