import React from "react"
import { Link } from 'gatsby'

import avatarStyles from './avatar.module.scss'
import Profile from "../images/profile.jpg"


const Avatar = () => {

    return (
        <Link to="/">
            <div className="{avatarStyles.navHome">
                <div className={avatarStyles.avatar}>
                    <img src={Profile} alt="Avatar" />
                </div>
                
                <p className={avatarStyles.me}>Nathan Dorney</p>
            </div>
        </Link>
    )
}

export default Avatar