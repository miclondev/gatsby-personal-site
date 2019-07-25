import React from 'react'
import { DiReact, DiNodejsSmall} from 'react-icons/di'
import styles from "../../styles/techStack.module.scss"

const TechStack = () => (
    <div className={styles.main}>
         <p>Front End</p>
            <div   className={styles.block}>
                       
                        <span className={styles.icons}>
                            <DiReact/>
                            <DiReact/>
                            <DiReact/>
                            <DiReact/>
                            <DiReact/> 
                            <DiReact/>
                        </span>
                        <a>more ..</a>
            </div>
            <p>Back End</p>
            <div  className={styles.block}>
                    
                    <span className={styles.icons}>
                    <DiNodejsSmall/>
                    <DiNodejsSmall/>
                    <DiNodejsSmall/>
                    <DiNodejsSmall/>
                    <DiNodejsSmall/>
                    <DiNodejsSmall/>
                    </span>
                   
                        <a>more ..</a>
                 
            </div>
    </div>
)

export default TechStack