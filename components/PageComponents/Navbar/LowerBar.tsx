import React from 'react'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa';
const LowerBar = () => {
    return (
        <div className='w-5/6 m-auto flex justify-between items-center mt-4'>
            {/* left */}
            <div className='flex justify-start'>
                <p className='text-3xl'>Online Store</p>
            </div>
            {/* mid */}
            <div className="flex items-center border rounded-sm p-2">
                {/* Search Input */}
                <input
                    type="text"
                    className="flex-grow border-none outline-none p-2"
                    placeholder="Search"
                />

                {/* Category Dropdown */}
                <div className="relative">
                    <select className="bg-white border border-gray-400 hover:border-gray-500 p-2 pr-4 rounded-l-lg shadow outline-none">
                        <option>All Categories</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                        {/* Add more categories as needed */}
                    </select>
                </div>
                <div className="flex items-center px-2 pointer-events-none text-gray-700">
                    <FaSearch size={20} />
                </div>
            </div>
            {/* right */}
            <div className='flex flex-row gap-4 items-end'>
                <div className='flex flex-row items-end gap-1'>
                    <AiOutlineUser size={30} />
                    {/* account logo */}
                    <div className='flex flex-col'>
                        <p className='text-sm text-slate-600'>Sign in</p>
                        <p className='text-base'>Account</p>
                    </div>
                </div>
                <div className='relative place-items-end'>
                    {/* favorite icon */}
                    <MdFavoriteBorder size={30} />
                    <div className='absolute right-0 top-[-3px] place-items-end'><p className='bg-red-500 rounded-full w-3 h-3 text-[11px] px-1 font-bold text-slate-100'>2</p></div>
                </div>
                <div className='flex flex-row items-end gap-1'>
                    <AiOutlineShoppingCart size={30} />
                    <div className='flex flex-col'>
                        <p className='text-sm text-slate-600'> Total</p>
                        <p className='text-base'>$0.00</p>
                    </div>
                    {/* Cart page */}
                </div>
            </div>
        </div>
    )
}

export default LowerBar