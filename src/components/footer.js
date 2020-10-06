import React from "react"
import { Link } from 'gatsby'

import footerStyles from './footer.module.scss'


const Footer = () => {

    return (
        <footer>
          <div className={footerStyles.divider}></div>
            <p>No, cookies, tracking or analytics.</p>
              <Link className={footerStyles.button} to="/projects">#projects</Link>
              <Link className={footerStyles.button} to="/notes">#notes</Link>
              <Link className={footerStyles.button} to="/about">#about</Link>
              <Link className={footerStyles.button} to="/reading">#reading</Link>
              <Link className={footerStyles.button} to="/reading">#using</Link>

        </footer>
    )
}

export default Footer

