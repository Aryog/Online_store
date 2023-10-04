import React from 'react'
import { BsShop } from 'react-icons/bs'

const Offer = () => {
    return (
        <div className='flex flex-row justify-between px-10 items-center bg-slate-200 text-slate-600'>
            <div className='flex items-center gap-3 justify-around'>
                <BsShop />
                <p>Up to 70% off the entire store!</p>
            </div>

            <div className='flex gap-10'>
                <p>USD</p>
                <p>English</p>
            </div>
        </div>
    )
}

export default Offer