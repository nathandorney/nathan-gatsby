import React from "react"
import { Link } from 'gatsby'
import Avatar from './avatar'

import headerStyles from './header.module.scss'


const Header = () => {

    return (
        <header className={headerStyles.header}>
            <Avatar className={headerStyles.title} to="/">Nathan Dorney</Avatar>

            <ul className={headerStyles.navList}>
                <li><Link className={headerStyles.navItem} to="/projects">Projects</Link></li>
                <li><Link className={headerStyles.navItem} to="/notes">Notes</Link></li>
                <li><Link className={headerStyles.navItem} to="/about">About</Link></li>
            </ul>

        </header>
    )
}

export default Header

