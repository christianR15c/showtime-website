import React from 'react'
import homevidoe from '../assets/exhibition.mp4'
import styles from '../style'
import Navbar from './Navbar'
import { logo } from '../assets'
import Home from './Home'

const Landingpage = () => {
    return (
        <div className='flex h-[84vh]'>
            <div className="relative w-full h-full">
                <video
                    src={homevidoe}
                    type='video/mp4'
                    loop
                    muted
                    controls={false}
                    autoPlay
                    className='w-full h-full object-cover' />
                <div className='absolute flex flex-col justify-start top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                    <div className={`z-50 ${styles.paddingX} ${styles.flexCenter}`}>
                        <div className={`${styles.boxWidth}`}>
                            <Navbar />
                        </div>
                    </div>
                </div>
                <div className='absolute flex flex-col justify-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                    <div className={`z-10 ${styles.paddingX} ${styles.flexCenter}`}>
                        <div className={`${styles.boxWidth}`}>
                            <Home />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

{/* <Navbar /> */ }

export default Landingpage