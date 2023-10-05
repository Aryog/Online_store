import React from 'react'
type tagProps = {
    count: number;
}
const Tag = ({ count }: tagProps) => {
    return (
        <div className='absolute right-0 top-[-3px]'>
            <p className='bg-red-500 rounded-full w-[12px] h-[12px] text-[10px] font-bold text-slate-100 pl-[3px] pb-2'>{count}</p>
        </div>
    )
}

export default Tag