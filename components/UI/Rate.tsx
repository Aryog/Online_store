import React from 'react'
import { Rating } from "@simuratli/rating";
type RateProps = {
    rate: number;
    count: number;
}
const Rate = ({ rate, count }: RateProps) => {
    return (
        <div className='flex items-center'>
            <Rating rate={rate} precision={0.5} /> <p className='text-slate-500 text-sm'>&nbsp;({count})</p>
        </div>
    )
}

export default Rate