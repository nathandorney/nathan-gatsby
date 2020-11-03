import React from "react"
import { Link } from 'gatsby'

import footerStyles from './footer.module.scss'


const Footer = () => {

    return (
        <footer>
            <p className={footerStyles.message}>Thanks for reading</p>
            <div className={footerStyles.button}>Read more</div>
        </footer>
    )
}

export default Footer

