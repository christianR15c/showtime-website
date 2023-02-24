import React from 'react'
import styles from '../style'
import Button from './Button'
import { twitter, instagram, facebook, parting, showtime } from '../assets'


const icon = 'bx bx-right-arrow-alt'

const Home = () => {
    return (
        <section
            id='home'
            className={`flex flex-col-reverse sm:flex-row items-center w-full justify-around ${styles.paddingY}`} >
            <div className='flex sm:flex-col w-[20%] flex-row sm:items-center items-start ml-10 gap-10 sm:pt-0 pt-12'>

                <a href="https://twitter.com/showtime_rwanda" target='_blank'>
                    <div className='bg-blue-gradient flex justify-center items-center rounded-full h-12 w-12'>
                        <img src={twitter} alt="" />
                    </div>
                </a>
                <a href="https://www.instagram.com/showtimerw/" target='_blank'>
                    <div className='bg-blue-gradient flex justify-center items-center rounded-full h-12 w-12'>
                        <img src={instagram} alt="" />
                    </div>
                </a>
                <div className='bg-blue-gradient flex justify-center items-center rounded-full h-12 w-12'>
                    <img src={facebook} alt="" />
                </div>
            </div>
            <div className='w-[80%] flex flex-col justify-center items-center'>
                <h1 className='font-poppins text-center font-semibold ss:text-[60px] text-[52px] text-white scale-up-center'>
                    Your choice for
                    <br className='sm:block hidden' /> {' '}
                    <span className='text-gradient'>Conference Management</span>
                </h1>
                <p className={`${styles.paragraph} py-6 text-center`} >
                    With over 15 years of proven delivery within the corporate event and weediding,
                    the team behind ShowTime Agency are making waves in the events world with
                    a focus on innovative experiences and instigating change.
                </p>
                <div className="mt-5">
                    <Button text='Talk to us' icon={icon} />
                </div>
            </div>
        </section>
    )
}

export default Home

/*

ss:leading-[100px] leading-[75px]

*/