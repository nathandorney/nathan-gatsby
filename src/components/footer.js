import React from "react"
import { Link } from 'gatsby'

import footerStyles from './footer.module.scss'

import Avatar from "../components/avatar"

const Footer = () => {

    return (
        <footer>
          <div className={footerStyles.avatar}>
            <Avatar />
          </div>
  
              <p className={footerStyles.message}>Thanks for reading! If you want to get in touch, you can find me on <a className={footerStyles.link} href="https://twitter.com/NathanDorney" target="_blank">Twitter</a> or send me a good old fashioned <a className={footerStyles.link} href="mailto: hello@nathandorney.co.uk">Email</a>.</p>
              <Link className={footerStyles.button} to="/notes">See all notes</Link>
        </footer>
    )
}

export default Footer

