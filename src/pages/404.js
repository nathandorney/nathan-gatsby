import React from 'react'
import { Link } from 'gatsby'
import introStyles from './intro.module.scss'
import Avatar from "../components/avatar"
import Head from '../components/head'


const NotFound = () => {
    return (
        <div className={introStyles.chat}>
                <Head title="404"/>
            <header>
                <div className={introStyles.avatar}><Avatar /></div>
                    <p className={introStyles.messageOne}>Whoops! The page you are looking for doesn't exist.</p>
                    <Link className={introStyles.button} to="/">Back home</Link>

            </header>
        </div>
    )
}

export default NotFound