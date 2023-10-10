"use client"
import React from 'react'
import Offer from './Offer'
import LowerBar from './LowerBar'
type navProps = {
    activeCat: string;
    setActiveCat: React.Dispatch<React.SetStateAction<string>>;
}
const Navbar = ({ activeCat, setActiveCat }: navProps) => {
    return (
        <div className=''>
            <Offer />
            <LowerBar activeCat={activeCat} setActiveCat={setActiveCat} />
        </div>
    )
}

export default Navbar