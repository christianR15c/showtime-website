import React from 'react'

const Button = ({ styles, text, icon }) => (
    <button
        type='button'
        className={` ${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none border-none rounded-md`}>
        {text}
        <i class='bx bx-right-arrow-alt'></i>
    </button>
)


export default Button