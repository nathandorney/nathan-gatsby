import React from "react"

import avatarStyles from './avatar.module.scss'
import Profile from "../images/profile.jpg"


const Avatar = () => {

    return (
            <div className="{avatarStyles.navHome">
                <div className={avatarStyles.avatar}>
                    <img src={Profile} alt="Avatar" />
                </div>
            </div>
    )
}

export default Avatar