import React from "react"
import { Link } from 'gatsby'

import avatarStyles from './avatar.module.scss'
import Profile from "../images/profile.jpg"


const Avatar = () => {

    return (
        <Link to="/">
            <div className={avatarStyles.profileContainer}>
                <img src={Profile} alt="Avatar" />
                <div className={avatarStyles.online}></div>
            </div>
        </Link>
    )
}

export default Avatar