import ToggleMode from '@/components/UI/ToggleMode';
import React, { useEffect, useState } from 'react'
import { BsShop } from 'react-icons/bs'
import { LuMoonStar, LuSunMedium } from 'react-icons/lu'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
export type allowedModeState = "dark" | "light" | "system";
const Offer = () => {
    const [mode, setMode] = useState<allowedModeState>('light')
    const [isToggle, setIsToggle] = useState<boolean>(false)
    function toogleTheme() {
        setIsToggle(!isToggle);
    }
    function selectValidIcon() {
        if (mode === 'dark') return <LuMoonStar color='blue' />;
        if (mode === 'light') return <LuSunMedium color='blue' />;
        if (mode === 'system') return <HiOutlineComputerDesktop color='blue' />;
    }
    return (
        <div className='flex flex-row justify-between px-10 py-2 items-center bg-slate-200 text-slate-600'>
            <div className='flex items-center gap-3 justify-around'>
                <BsShop />
                <p>Up to 70% off the entire store!</p>
            </div>

            <div className='flex gap-12 items-center'>
                <p>USD</p>
                <p>English</p>

                <div className='cursor-pointer' onClick={toogleTheme}>{selectValidIcon()}
                    <div className={`relative ${isToggle ? "" : 'hidden'}`}>
                        <div className='absolute bg-slate-100 w-[100px] top-2 left-0 rounded-md p-1 drop-shadow-md'>
                            {isToggle && <ToggleMode activeMode={mode} setMode={setMode} />}
                        </div>
                    </div>
                </div>
                <div />
            </div>
        </div>
    )
}

export default Offer