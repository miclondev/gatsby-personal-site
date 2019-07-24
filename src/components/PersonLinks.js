import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import styles from "../styles/links.module.scss"

const IconLink = ({ link, icon }) => (
    <a href={link} target="__blank">
        {icon}
    </a>
)
const PersonLinks = (props) => (
    <div className={styles.main}>
        <IconLink icon={<FaFacebook/>} link="https://facebook.com"/>
        <IconLink icon={<FaTwitter/>} link="https://twitter.com"/>
        <IconLink icon={<FaGithub/>} link="https://github.com"/>
        <IconLink icon={<FaLinkedin/>} link="https://linkedin.com"/>
        <IconLink icon={<FaInstagram/>} link="https://Instagram.com"/>
    </div>
)


export default PersonLinks