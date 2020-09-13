import React from "react"
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {

    return (
        <header className={headerStyles.header}>
            <Link className={headerStyles.button} to="/">Back home</Link>
        </header>
    )
}

export default Header