import React from 'react'
import playStyles from './play.module.scss'

const PlayButton = () => {

    return (
        <div>
            <div className={playStyles.playButton}>
                <svg className={playStyles.triangle} width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.848 7.68398L1.57802 1.11776C0.91576 0.648663 0 1.12222 0 1.93379V15.0662C0 15.8778 0.915759 16.3513 1.57802 15.8822L10.848 9.31602C11.4106 8.91749 11.4106 8.08251 10.848 7.68398Z" fill="black"/>
                </svg>
            </div>
        </div>
    )
} 

export default PlayButton