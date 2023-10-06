import React, { Dispatch, SetStateAction } from 'react'
import { LuMoonStar, LuSunMedium } from 'react-icons/lu'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import { allowedModeState } from '../PageComponents/Navbar/Offer';
type toogleModeProps = {
    activeMode: allowedModeState;
    setMode: Dispatch<SetStateAction<allowedModeState>>;
}
const ToggleMode = ({ activeMode, setMode }: toogleModeProps) => {
    const toggleSetMode = (mode: allowedModeState) => {
        setMode(mode);
    }
    return (
        <div>
            <ul className='p-1'>
                <li className='flex items-center cursor-pointer' onClick={() => { toggleSetMode('dark') }}><LuMoonStar color={activeMode === 'dark' ? 'blue' : ''} />&nbsp; Dark</li>
                <li className='flex items-center cursor-pointer' onClick={() => { toggleSetMode('light') }}><LuSunMedium color={activeMode === 'light' ? 'blue' : ''} />&nbsp;  Light</li>
                <li className='flex items-center cursor-pointer' onClick={() => { toggleSetMode('system') }}><HiOutlineComputerDesktop color={activeMode === 'system' ? 'blue' : ''} />&nbsp;  System</li>
            </ul>
        </div>
    )
}

export default ToggleMode