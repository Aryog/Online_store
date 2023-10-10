"use client"
import React, { ChangeEvent, useState } from 'react'
import Tag from '@/components/UI/Tag';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa';
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchCategories } from '@/components/api';
type lowerBarProps = {
    activeCat: string;
    setActiveCat: React.Dispatch<React.SetStateAction<string>>;
}
const LowerBar = ({ activeCat, setActiveCat }: lowerBarProps) => {
    // Get categories array here
    const queryClient = useQueryClient();
    const queryData = useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    })

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newSelectedOption = event.target.value;
        setActiveCat(newSelectedOption)
        if (newSelectedOption === 'allCat') {
            setActiveCat('')
        }
    }
    return (
        <div className='w-5/6 m-auto flex justify-between items-center mt-4'>
            {/* left */}
            <div className='flex justify-start'>
                <p className='text-3xl'>Online Store</p>
            </div>
            {/* mid */}
            <div className="flex items-center border dark:border-none rounded-sm p-2">
                {/* Search Input */}
                <input
                    type="text"
                    className="flex-grow border-none outline-none p-2"
                    placeholder="Search"
                />

                {/* Category Dropdown */}
                <div className="relative">
                    <select className="bg-white dark:bg-slate-800 border border-gray-400 hover:border-gray-500 p-2 pr-4 rounded-l-lg shadow outline-none capitalize" onChange={handleSelectChange}>
                        <option value="allCat">All Categories</option>
                        {
                            queryData.isSuccess && queryData.data.map((category: string) => <option className='capitalize' value={category}>{category}</option>)
                        }
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
                <div className='relative cursor-pointer'>
                    {/* favorite icon */}
                    <MdFavoriteBorder size={30} />
                    <Tag count={2} />
                </div>
                <div className='flex flex-row items-end gap-1'>
                    <div className='relative cursor-pointer'>
                        <AiOutlineShoppingCart size={30} />
                        <Tag count={2} />
                    </div>
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